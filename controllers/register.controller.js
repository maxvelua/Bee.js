const registerService = require('../services/register.service');

module.exports.regUser = async (req, res, next) => {
    console.log(req.body);
    await registerService.createUser(req.body);
    res.json('saved');
};