const UserModel = require("../models/user.model");
const crypto = require('crypto');

module.exports.checkUserPass = async(login , pass) => {
    const user = await UserModel.findOne({$or: [{"email": login}, {"name": login}]});
    if (!user) {
        console.log("Sry, but we don't have you")
        throw new Error('sosnooley');
    }

    console.log(user)

    const {passSalt, pass: userHash} = user;
    const hashPass = crypto.pbkdf2Sync(pass, passSalt, 64, 128, 'sha512').toString('base64');

    return hashPass === userHash;
};