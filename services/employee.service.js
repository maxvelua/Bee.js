const db = require('../lib/sequelize.lib').db;
const BeeEmployeeModel = db['bee_employee'];

module.exports.createEmployee = async (user_id, userData) => {
    const {name, surname} = userData;
    return await BeeEmployeeModel.create({user_id: id, name, surname});
};