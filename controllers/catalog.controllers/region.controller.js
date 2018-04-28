const regionService = require('../../services/region.service');

module.exports.create = async (req, res, next) => {  // TODO ask why i can't send to res.json ???
    //res.json('Get' + req.body);
    const region = await regionService.createRegion(req.body);
    res.json(region.toJSON());

};

module.exports.update = async (req, res, next) => {

};

module.exports.delete = async (req, res, next) => {
    const region = await regionService.deleteRegion(req.body);
    res.json("Deleted");
};

module.exports.get = async (req, res, next) => {
    const region = await regionService.getAllRegion(req.body);
    res.json(region);
};