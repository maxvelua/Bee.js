const db = require('../lib/sequelize.lib').db;
const BeeSuppliersModel = db['bee_suppliers'];

module.exports.getSuppliers = async (type, where) => await BeeSuppliersModel.findAll({where: type === "All" ? where : {...where, sup: type}});