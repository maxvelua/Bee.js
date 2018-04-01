// 1 - norm, 2, 3 - ploho
const HttpError = require('../error');

module.exports = async (req, res, next) => {
    const {user_type} = req.user;

    if (user_type === 1 ) next();
    else return next(new HttpError(401, 'Sry but you don\'t have access to admin panel'));
};