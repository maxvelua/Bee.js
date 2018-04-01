const db = require('../lib/sequelize.lib').db;
const BeeEmployeeModel = db['bee_employee'];

module.exports.createEmployee = async (user_id, userData) => {
    const {name, surname} = userData;
    return await BeeEmployeeModel.create({user_id, name, surname});
};

module.exports.findById = async (user_id) => await BeeEmployeeModel.findOne({
    where: {user_id},
});