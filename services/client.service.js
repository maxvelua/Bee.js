const db = require('../lib/sequelize.lib').db;
const BeeClientModel = db['bee_client'];

module.exports.createClient = async (user_id, userData) => {
    const {name, surname, company_name, company_address, phone} = userData;
    return await BeeClientModel.create({user_id, name, surname, company_name, company_address, phone});
};