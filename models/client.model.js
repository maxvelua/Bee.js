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
            field: 'name',
            required: true
        },
        surname: {
            type: DataTypes.TEXT,
            field: 'surname',
            required: true
        },
        company_name: {
            type: DataTypes.TEXT,
            field: 'company_name',
            required: true
        },
        company_address: {
            type: DataTypes.TEXT,
            field: 'company_address',
            required: true
        },
        phone: {
            type: DataTypes.TEXT,
            field: 'phone',
            required: true
        }

    });

    BeeClient.associate = models => {

    };

    return BeeClient;
};