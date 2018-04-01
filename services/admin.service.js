const db = require('../lib/sequelize.lib').db;
const BeeAdminModel = db['bee_admin'];

module.exports.createAdmin = async (id, userData) => {
    const {name, surname} = userData;
    return await BeeAdminModel.create({user_id: id, name, surname});
};

module.exports.findById = async (user_id) => await BeeAdminModel.findOne({
    where: {user_id},
});