module.exports = (sequelize, DataTypes) => {
    const BeeEmployee = sequelize.define('bee_employee', {
        user_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            field: 'user_id'
        },
        name: {
            type: DataTypes.TEXT,
            field: 'name',
            required: true
        },
        surname: {
            type: DataTypes.TEXT,
            field: 'surname',
            required: true
        },
    });

    BeeEmployee.associate = models => {

    };

    return BeeEmployee;
};