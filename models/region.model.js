const _ = require('lodash');

module.exports = (sequelize, DataTypes) => {
    const BeeRegion = sequelize.define('bee_region', {
        region_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            field: 'region_id'
        },
        name: {
            type: DataTypes.TEXT,
            field: 'name',
            required: true
        },
        lat: {
            type: DataTypes.NUMERIC,
            field: 'lat',
            required: true
        },
        lng: {
            type: DataTypes.NUMERIC,
            field: 'lng',
            required: true
        }
    });

    BeeRegion.associate = models => {

    };

    return BeeRegion;
};