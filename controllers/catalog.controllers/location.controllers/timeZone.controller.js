const timezones = require('../../../config/timezone');

module.exports.get = async (req, res, next) => {
    res.json(timezones);
};