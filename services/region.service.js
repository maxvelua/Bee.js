const db = require('../lib/sequelize.lib').db;
const BeeRegionModel = db['bee_region'];

module.exports.createRegion = async (regionData) => {
    const {name, lat, lng} = regionData;
    return await BeeRegionModel.create({name, lat, lng});
};

module.exports.deleteRegion = async (regionData) => {
    const {name, lat, lng} = regionData;
    return await BeeRegionModel.delete({name, lat, lng});
};

module.exports.getAllRegion = async (regionData) => {
    //const {name, lat, lng} = regionData;
    return await BeeRegionModel.findAll();
};