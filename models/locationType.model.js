module.exports = (sequelize, DataTypes) => {
    const BeeLocationType = sequelize.define('bee_location_type', {
        location_type_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.TEXT,
            field: 'name',
            required: true
        },
        feature: {
            type: DataTypes.ENUM,
            values: ['outdoors', 'indoors'],
            required: true
        }
    });

    BeeLocationType.associate = models => {

    };

    return BeeLocationType;
};