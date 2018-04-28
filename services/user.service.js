// adding all services and libs
const crypto = require('crypto');
const jwt = require("jsonwebtoken");
const db = require('../lib/sequelize.lib').db;
const BeeUserModel = db['bee_user'];
const BeeAdminModel = db['bee_admin'];
const BeeEmployeeModel = db['bee_employee'];
const BeeClientModel = db['bee_client'];
const adminService = require('./admin.service');
const empService = require('./employee.service');
const clientService = require('./client.service');
const mailService = require('../services/mail.service');
const jwtHelper = require('../helpers/jwt.helper');


module.exports.createUser = async (userData) => {
    const {pass} = userData;
    console.log(userData);
    const {passSalt, hashPass} = this.hashPass(pass); // hashing pass
    return await BeeUserModel.create({pass_salt: passSalt, pass_hash: hashPass, ...userData}); // adding user to bee_user table
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

module.exports.updateAdmin = async (user_id, userData) => await BeeAdminModel.update(userData, {where: {user_id}});

module.exports.updateEmployee = async (user_id, userData) => await BeeEmployeeModel.update(userData, {where: {user_id}});

module.exports.updateClient = async (user_id, userData) => await BeeClientModel.update(userData, {where: {user_id}});

module.exports.findById = async (user_id, is_email_confirmed = true) => await BeeUserModel.findOne({
    where: {user_id},
    is_email_confirmed
}); // find user by id where email is confirmed

module.exports.findWhere = async (where) => await BeeUserModel.findOne({where}); // find user by data

module.exports.getUserData = async (user_id, user_type) => {
// i got user_ type and user_id, first find which table is this user_type
// and then find user by id in this table and return him

    if (user_type === 1)
        return await adminService.findById(user_id); // ??? return adminModel.findOne({user_id: user_id});
    else if (user_type === 2)
        return await empService.findById(user_id);
    else
        return await clientService.findById(user_id);
};

module.exports.changeUserEmail = async (user_id, email) => {
    const emailToken = jwtHelper.createToken({user_id, email});
    console.log(email);
    await mailService.sendChangeConfirmationEmail(emailToken, email);
};

module.exports.changeUserPass = async (user_id, pass) => {
    const {passSalt, hashPass} = await this.hashPass(pass);
    await this.updateUser(user_id, {pass_salt: passSalt, pass_hash: hashPass});
};

module.exports.updateAdminData = async (user_id, userData) => {
    await this.updateAdmin(user_id, {name: userData.name, surname: userData.surname});
};
