const crypto = require('crypto');
const db = require('../lib/sequelize.lib').db;
const BeeUserModel = db['bee_user'];

module.exports.createUser = async (userData) => {
    const {login, password} = userData;
    const {passSalt, hashPass} = await this.hashPass(password);
    return await BeeUserModel.create({login, passSalt, passHash: hashPass});
};

module.exports.hashPass = async (pass) => {
    const passSalt = await crypto.randomBytes(8).toString('hex');
    const hashPass = crypto.pbkdf2Sync(pass, passSalt, 64, 128, 'sha512').toString('base64');
    return {passSalt, hashPass};
};
