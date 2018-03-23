const db = require('../lib/sequelize.lib').db;
const BeeUserModel = db['bee_user'];
const crypto = require('crypto');
const serverConfig = require("../config/server.config");
const jwt = require("jsonwebtoken");
const mailService = require('../services/mail.service');

module.exports.createUser = async () => {
    try {
        const login = Math.random().toString(36).slice(-8);
        const password = Math.random().toString(36).slice(-8);

        const passSalt = await crypto.randomBytes(8).toString('hex');
        const hashPass = crypto.pbkdf2Sync(password, passSalt, 64, 128, 'sha512').toString('base64');

        const user = await BeeUserModel.create({login, passSalt, passHash: hashPass}); // emailToken: token
        await EmployeeModel.create({id: user.id, ...employeeData});
        const token = jwt.sign({login}, serverConfig.jwt.secret, serverConfig.jwt.options);

        mailService.sendRegEmployeeEmail(token, 's15118@pjwstk.edu.pl', login, password);
    } catch (err) {
        console.log(err);
    }
 };
