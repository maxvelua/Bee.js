const registerService = require('../services/register.service');
const serverConfig = require('../config/server.config');
const jwt = require('jsonwebtoken');
const UserModel = require("../models/user.model");
const HttpError = require('../error');
const { validationResult } = require('express-validator/check');

// var api = express.Router();
// api.use(validatorResult());

module.exports.regUser = async (req, res, next) => {
    console.log(req.body);
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        throw new HttpError(442, JSON.stringify(errors.mapped())); //'Ja hz szo tyt mozna napysatu, takzo cyka blyat idi nahui');
    }

    await registerService.createUser(req.body);
    res.json('saved');
};

module.exports.confirmEmail = async (req, res, next) => {
    console.log("Original link: " + req.query.token)
    const { token } = req.query;
    const {email} = await jwt.verify(token, serverConfig.jwt.secret);
    console.log(email);

    const user = await UserModel.findOne({email: email, isEmailConfirmed: false});
    if (user) {
        console.log(user);
        user.isEmailConfirmed = true;
        await user.save;
    }

    res.json(user);
};