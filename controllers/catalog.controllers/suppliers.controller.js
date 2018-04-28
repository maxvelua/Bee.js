const supplierService = require('../../services/suppliers.service');

module.exports.create = async (req, res, next) => {

};

module.exports.update = async (req, res, next) => {

};

module.exports.delete = async (req, res, next) => {

};

// location owner just get name  ??? Corp / LLC / LP / LLP / LLLP / SP / Trust / JVAss / Mun / NP Corp
module.exports.get = async (req, res, next) => res.json(await supplierService.getSuppliers(req.params.type, req.query));
