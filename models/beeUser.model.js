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
            field: 'pass_salt'
        },
        pass_hash: {
            type: DataTypes.TEXT,
            field: 'pass_hash'
        },
        email: {
            type: DataTypes.TEXT,
            field: 'email'
        },
        is_email_confirmed: {
            type: DataTypes.BOOLEAN,
            field: 'isemailconfirmed'
        },
        login: {
            type: DataTypes.TEXT,
            field: 'login'
        },
        user_type: {
            type: DataTypes.INTEGER,
            field: 'user_type'
        }
    });

    BeeUser.associate = models => {
        BeeUser.hasOne(sequelize.model('bee_admin'), {foreignKey: 'user_id', targetKey: 'user_id'});
    };

    BeeUser.prototype.toJSON = function () {
        const privateAttributes = ['pass_salt', 'pass_hash'];
        return _.omit(this.dataValues, privateAttributes);
    };

    return BeeUser;
};