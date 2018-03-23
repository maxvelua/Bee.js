module.exports = (sequelize, DataTypes) => {
    const BeeUser = sequelize.define('bee_user', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            field: 'user_id'
        },
        passSalt: {
            type: DataTypes.TEXT,
            field: 'pass_salt'
        },
        passHash: {
            type: DataTypes.TEXT,
            field: 'pass_hash'
        },
        login: {
            type: DataTypes.TEXT,
            field: 'login'
        }
    });

    return BeeUser;
};