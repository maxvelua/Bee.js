const _ = require('lodash');

module.exports = (sequelize, DataTypes) => {
    const BeeUser = sequelize.define('bee_user', {
        user_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            field: 'user_id'
        },
        pass_salt: {
            type: DataTypes.TEXT,
            field: 'pass_salt',
            required: true
        },
        pass_hash: {
            type: DataTypes.TEXT,
            field: 'pass_hash',
            required: true
        },
        email: {
            type: DataTypes.TEXT,
            field: 'email',
            unique: true,
            required: true
        },
        is_email_confirmed: {
            type: DataTypes.BOOLEAN,
            field: 'is_email_confirmed',
            required: true
        },
        login: {
            type: DataTypes.TEXT,
            field: 'login',
            unique: true,
            required: true
        },
        user_type: {
            type: DataTypes.INTEGER,
            field: 'user_type',
            required: true
        }
    });

    BeeUser.associate = models => {

    };

    BeeUser.prototype.toJSON = function () {
        const privateAttributes = ['pass_salt', 'pass_hash'];
        return _.omit(this.dataValues, privateAttributes);
    };

    return BeeUser;
};