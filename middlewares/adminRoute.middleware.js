// 1 - norm, 2, 3 - ploho
const jwt = require('../helpers/jwt.helper');
const userService = require('../services/user.service');
const HttpError = require('../error');

// TODO if good take admin data from db and write it to req.user.userData

module.exports = async (req, res, next) => {

    const {user_type} = req.user;  // return user check user tupe
    // const token = req.headers['authorization'];
    // console.log("Get token: " + req.header.Authorization);
    // const { user_id } = await jwt.verifyToken(token);
    // const { user_type } = await userService.findWhere(user_id);

    if (user_type === 2 || user_type === 3)
        return next(new HttpError(401, 'Sry but you don\'t have access to admin panel'));
    else
        next();

}