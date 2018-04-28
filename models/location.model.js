module.exports = (sequelize, DataTypes) => {
    const BeeLocation = sequelize.define('bee_location', {
        location_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            field: 'location_id'
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
        },
        location_type_id: {
            type: DataTypes.INTEGER,
            field: 'location_type_id',
            required: true
        },
        area_id: {
            type: DataTypes.INTEGER,
            field: 'area_id',
            required: true
        },
        region_id: {
            type: DataTypes.INTEGER,
            field: 'region_id',
            required: true
        }
    });

    BeeLocation.associate = models => {

    };

    return BeeLocation;
};