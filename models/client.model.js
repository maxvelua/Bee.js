module.exports = (sequelize, DataTypes) => {
    const BeeClient = sequelize.define('bee_client', {
        user_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            field: 'user_id'
        },
        name: {
            type: DataTypes.TEXT,
            field: 'name'
        },
        surname: {
            type: DataTypes.TEXT,
            field: 'surname'
        },
        company_name: {
            type: DataTypes.TEXT,
            field: 'company_name'
        },
        company_address: {
            type: DataTypes.TEXT,
            field: 'company_address'
        },
        phone: {
            type: DataTypes.TEXT,
            field: 'phone'
        }

    });

    return BeeClient;
};