const locationService = require('../../services/location.service');

module.exports.create = async (req, res, next) => {
    const location = await locationService.createLocation(req.body);
    res.json(location.toJSON());
};

module.exports.update = async (req, res, next) => {

};

module.exports.delete = async (req, res, next) => {

};

module.exports.get = async (req, res, next) => {
    const allLocations = await locationService.getAll(req.body);
    //await console.log(allLocations);
    res.json(allLocations);
};