module.exports = (sequelize, DataTypes) => {
    const BeeArea = sequelize.define('bee_area', {
        area_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            field: 'area_id'
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
        region_id: {
            type: DataTypes.INTEGER,
            field: 'region_id',
            required: true
        }
    });

    BeeArea.associate = models => {
        BeeArea.belongsTo(sequelize.model('bee_location'), {foreignKey: 'area_id', targetKey: 'area_id'});
    };

    return BeeArea;
};