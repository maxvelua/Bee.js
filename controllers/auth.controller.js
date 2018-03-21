const authService = require('../services/auth.service');
const emailService = require("../services/mail.service");
const jwt = require("jsonwebtoken");
const serverConfig = require("../config/server.config");
const HttpError = require('../error');
const userService = require("../services/user.service");
const { validationResult } = require('express-validator/check');

 module.exports.authUser = async (req, res, next) => {
    const {login, pass} = req.body;
    const authCheck = await authService.checkUserPass(login, pass);
    if(authCheck) res.json("Good");
    else res.json("Idi naxyj")
};

 module.exports.forgotPass = async (req, res, next) => {
     const {email} = req.body;

     const token = await authService.forgotPass(email);

     await emailService.sendForgotEmail(token, email);

     res.json({message: 'ok'});
 };

 module.exports.resetPass = async (req, res, next) => {
    console.log(req.body);
    const {pass, repeatPass} = req.body;
    const {token} = req.query;

     const errors = validationResult(req);

     if(!errors.isEmpty()){
         console.log("errors");
         throw new HttpError(442, JSON.stringify(errors.mapped()));
     }


   //  if(pass !== repeatPass) throw new HttpError(402, 'Bad password');

    const {email} = jwt.decode(token, serverConfig.jwt.secret);

    const {hashPass, passSalt} = await userService.hashPass(pass);
    //console.log(decode);
    const user = await userService.updateUser({email, isActive: false}, {pass: hashPass, passSalt, isActive: true});
    // const [v1, v2] = await Promise.all([asd, asd, asd])
    res.json(user);
 }