const db = require('../lib/sequelize.lib').db;
const BeeAreaModel = db['bee_area'];

module.exports.createArea = async (regionData) => {
    const {name, lat, lng, region_id} = regionData;
    return await BeeAreaModel.create({name, lat, lng, region_id});
};

module.exports.getAll = async () => {
    return await BeeAreaModel.findAll({});
};
