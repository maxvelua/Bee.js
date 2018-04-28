//TODO (DONE +-) create 5 service for models and create add function witch will add data to you tables
const areaService = require('../../services/area.service');

module.exports.create = async (req, res, next) => {
    const area = await areaService.createArea(req.body);
    res.json(area.toJSON());
};

module.exports.update = async (req, res, next) => {

};

module.exports.delete = async (req, res, next) => {

};

module.exports.get = async (req, res, next) => {

   const area = await areaService.getAll();
   res.json(area);
};