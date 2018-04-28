module.exports = (sequelize, DataTypes) => {
    const BeeAdmin = sequelize.define('bee_admin', {
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

    BeeAdmin.associate = models => {

    };

    return BeeAdmin;
};

// TODO (DONE all are required) во всех блять, значит что нужно добавить not null (required) сука во всех таблицах в полях которые по любому дложны быть в системе (this is magic validation blet)!
