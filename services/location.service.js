const db = require('../lib/sequelize.lib').db;
const BeeLocationModel = db['bee_location'];
const BeeLocationTypeModel = db['bee_location_type'];
const BeeRegionModel = db['bee_region'];
const BeeAreaModel = db['bee_area'];

module.exports.createLocation = async (regionData) => {
    const {name, lat, lng, area_id, region_id} = regionData;
    return await BeeLocationModel.create({name, lat, lng, area_id, region_id});
};

module.exports.getAll = async (regionData) => {
    //const {name, lat, lng, area_id, region_id} = regionData;
    return await BeeLocationModel.findAll({});
};

module.exports.getAllType = async () => {
    return await BeeLocationTypeModel.findAll({
        include: [
            {
                model: BeeLocationTypeModel
            },
            {
                model: BeeRegionModel
            },
            {
                model: BeeAreaModel
            }
        ]
    });
};

