const jwt = require('../helpers/jwt.helper');
const userService = require('../services/user.service');
const HttpError = require('../error');

module.exports = async (req, res, next) => {
    console.log("Get token: " + req.headers['authorization']);
    const token = req.headers['authorization']; // jwt = req.header.Authorization
    if (!token) return next(new HttpError(401, 'Bad token'));

    const {user_id} = await jwt.verifyToken(token);
    const user = await userService.findById(user_id);
    if (!user) return next(new HttpError(401, 'Sry but we don\' have user with this id'));

    req.user = user;
    next();
};
