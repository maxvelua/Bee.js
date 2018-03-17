const UserModel = require("../models/user.model");
const crypto = require('crypto');
const jwt = require("jsonwebtoken");
const serverConfig = require("../config/server.config");
const HttpError = require('../error');

module.exports.checkUserPass = async(login , pass) => {
    const user = await UserModel.findOne({$or: [{"email": login}, {"name": login}]});
    if (!user) {
        console.log("Sry, but we don't have you");
        throw new Error('sosnooley');
    }
    if(!user.isEmailConfirmed){
        console.log("Sry, you need to confirm your email");
        throw new Error('sosnooley');
    }

    console.log(user);

    const {passSalt, pass: userHash} = user;
    const hashPass = crypto.pbkdf2Sync(pass, passSalt, 64, 128, 'sha512').toString('base64');

    return hashPass === userHash;
};

module.exports.forgotPass = async (email) => {
    const user = await UserModel.findOne({email: email, isEmailConfirmed: false});
    const token = jwt.sign({ email }, serverConfig.jwt.secret, serverConfig.jwt.options);

    if (user) {
        console.log(user);
        user.isActive = false;
        await user.save;
        return token;
    } else {
        throw new HttpError(404, "User not found");
    }
}

module.exports.checkPass = async (pass, repeatPass) => {

}