const userService = require('../services/user.service');
const HttpError = require('../error');
const { validationResult } = require('express-validator/check');
const jwtHelper = require('../helpers/jwt.helper');
const BeeUser = require('../models/beeUser.model');


// TODO do forgotPassword

module.exports.forgotPassword = async (req, res, next) => {

};

module.exports.confirmEmail = async (req, res, next) => {
    console.log(req.query);
    const { token } = req.query;
    const {user_id} = jwtHelper.verifyToken(token);

    const user = await userService.updateUser(user_id, {is_email_confirmed: true});//

    res.json(user);

};
