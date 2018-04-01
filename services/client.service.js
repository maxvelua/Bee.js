const db = require('../lib/sequelize.lib').db;
const BeeClientModel = db['bee_client'];

module.exports.createClient = async (user_id, userData) => await BeeClientModel.create({user_id, ...userData});

module.exports.findById = async (user_id) => await BeeClientModel.findOne({
    where: {user_id},
});