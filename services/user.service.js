const UserModel = require("../models/user.model");
const crypto = require('crypto');

module.exports.updateUser = async (where, data) => await UserModel.findOneAndUpdate(where, data);

module.exports.hashPass = async (pass) => {
    const passSalt = await crypto.randomBytes(8).toString('hex');
    const hashPass = crypto.pbkdf2Sync(pass, passSalt, 64, 128, 'sha512').toString('base64');

    return {passSalt, hashPass};
};
