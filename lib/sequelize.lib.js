const Sequelize = require('sequelize');
const fs = require('fs');
const path = require('path');
const Op = Sequelize.Op;
const databaseConfig = require('../config/server.config').db;
const logger = require('../services/logger.service');

const db = {};

const createConnection = () => new Sequelize({...databaseConfig, operatorsAliases: Op});
const connection = createConnection();

fs
    .readdirSync('models')
    .filter(file => (file.indexOf('.') !== 0) && (file.slice(-3) === '.js')) //&& (file !== basename)
    .forEach(file => {
        const model = connection['import'](path.resolve(__dirname, '../', 'models', file));
        db[model.name] = model;
    });

Object.keys(db).forEach(function (modelName) {
    console.log(modelName);
    if (db[modelName].associate) {
        console.log(db[modelName]);
        db[modelName].associate(db);
    }
});

module.exports = {
    connection,
    connect: () => connection
        .authenticate()
        .then(() => {
            logger.info(`Db connection has been established successfully.`);
        })
        .catch(err => {
            logger.error('Sequelize error:', err.toString());
            throw err;
        }),
    db
};
