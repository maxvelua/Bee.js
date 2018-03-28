const crypto = require('crypto');
const db = require('../lib/sequelize.lib').db;
const BeeUserModel = db['bee_user'];

module.exports.createUser = async (userData) => {
    const {pass} = userData;
    console.log(userData);
    const {passSalt, hashPass} = this.hashPass(pass);
    return await BeeUserModel.create( {pass_salt: passSalt, pass_hash: hashPass, ...userData}); // {login: login, pass_salt: passSalt, pass_hash: hashPass, user_type: user_type}
};

module.exports.hashPass = (pass) => {
    const passSalt = crypto.randomBytes(8).toString('hex');
    const hashPass = crypto.pbkdf2Sync(pass, passSalt, 64, 128, 'sha512').toString('base64');
    return {passSalt, hashPass};
};

module.exports.checkPass = (user, passToCheck) => {
    const hashPass = crypto.pbkdf2Sync(passToCheck, user.pass_salt, 64, 128, 'sha512').toString('base64');

    return hashPass === user.pass_hash ? user : null;
};

module.exports.updateUser = async (user_id, userData) => await BeeUserModel.update(userData, {where: {user_id}});

module.exports.findById = async (user_id, is_email_confirmed = true) => await BeeUserModel.findOne({where: {user_id}, is_email_confirmed});

module.exports.findWhere = async (where) => await BeeUserModel.findOne({where});

