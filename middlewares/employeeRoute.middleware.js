// 1 2 - norm, 3 - ploho
const db = require('../lib/sequelize.lib').db;
const jwt = require('../helpers/jwt.helper');
const userService = require('../services/user.service');
const HttpError = require('../error');
const employeeModel = db['bee_employee'];

module.exports = async (req, res, next) => {

    const {user_id ,user_type} = req.user;

    if (user_type === 3)
        return next(new HttpError(401, 'Sry but you don\'t have access to employee panel'));
    else {
        const userData = await employeeModel.findOne({where: user_id});
        req.user = userData;
        next();
    }

}