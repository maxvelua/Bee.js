const locationService = require('../../../services/location.service');

module.exports.create = async (req, res, next) => {

};

module.exports.update = async (req, res, next) => {

};

module.exports.delete = async (req, res, next) => {

};

module.exports.get = async (req, res, next) => {
    const allLocationTypes = await locationService.getAllType(req.body);
    res.json(allLocationTypes);
};