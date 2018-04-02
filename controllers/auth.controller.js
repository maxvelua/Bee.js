const authService = require('../services/auth.service');
const userService = require('../services/user.service');
const jwtHelper = require('../helpers/jwt.helper');
const emailService = require('../services/mail.service');
const { validationResult } = require('express-validator/check');
const HttpError = require('../error');

 module.exports.login = async (req, res, next) => {
    const {login, pass} = req.body;
    const user = await authService.login(login, pass);
    if(user){
        const userData = await userService.getUserData(user.user_id, user.user_type);
        const token = jwtHelper.createToken({user_id: user.user_id});
        res.json({user: {...user.toJSON(), ...userData.toJSON()}, token}); // urzas
    } else throw new HttpError(401, "Unauthorized");
};

module.exports.forgotPass = async (req, res, next) => {
    const {email} = req.body;

    console.log("GOt: " + email);

    const token = await authService.forgotPassword(email);
    await emailService.sendForgotEmail(token, email);

    res.json({message: 'ok'});
};

module.exports.resetPass = async (req, res, next) => {
    const {pass} = req.body;
    const {token} = req.query;

    console.log("TOKEN: " + token);

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        console.log("errors");
        throw new HttpError(442, JSON.stringify(errors.mapped()));
    }

    const user = await authService.resetPassword(pass, token);
    res.json(user)
};