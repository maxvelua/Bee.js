// adding all services and libs
const crypto = require('crypto');
const db = require('../lib/sequelize.lib').db;
const BeeUserModel = db['bee_user'];

module.exports.createUser = async (userData) => {
    const {pass} = userData;
    console.log(userData);
    const {passSalt, hashPass} = this.hashPass(pass); // hashing pass
    return await BeeUserModel.create( {pass_salt: passSalt, pass_hash: hashPass, ...userData}); // adding user to bee_user table
};

module.exports.hashPass = (pass) => {
    const passSalt = crypto.randomBytes(8).toString('hex'); // create passSalt using random
    const hashPass = crypto.pbkdf2Sync(pass, passSalt, 64, 128, 'sha512').toString('base64'); // creating hashPass using pass and passSalt
    return {passSalt, hashPass};
};

module.exports.checkPass = (user, passToCheck) => {
    const hashPass = crypto.pbkdf2Sync(passToCheck, user.pass_salt, 64, 128, 'sha512').toString('base64'); // getting hashPass using pass and salt

    return hashPass === user.pass_hash ? user : null; // found user with same hash and returned it
};

module.exports.updateUser = async (user_id, userData) => await BeeUserModel.update(userData, {where: {user_id}}); // find user by id and update his data

module.exports.findById = async (user_id, is_email_confirmed = true) => await BeeUserModel.findOne({where: {user_id}, is_email_confirmed}); // find user by id where email is confirmed

module.exports.findWhere = async (where) => await BeeUserModel.findOne({where}); // find user by data

