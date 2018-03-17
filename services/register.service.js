const UserModel = require("../models/user.model");
const crypto = require('crypto');
const serverConfig = require("../config/server.config");
const jwt = require("jsonwebtoken");
const mailService = require('../services/mail.service');

module.exports.createUser = async(userData) => {
    const {pass} = userData; //req.body.pass

    //const user = new UserModel({name: req.body.name, pass: req.body.pass, email: req.body.email, phoneNumber: req.body.phoneNumber})
    //var pass = req.body.pass;
    //const enc = crypto.createCipher("aes-128-cbc", "TheKey%%%21312adsa").update(req.body.pass, "utf-8","hex");
    // const hashPass = crypto.createHash('sha1').update(req.body.passSalt + req.body.pass).digest('hex');

    const passSalt = await crypto.randomBytes(8).toString('hex');
    const hashPass = crypto.pbkdf2Sync(pass, passSalt, 64, 128, 'sha512').toString('base64');

    console.log("----");
    console.log(hashPass);
    console.log("----");

    const user = new UserModel({...userData, pass: hashPass, passSalt}); // emailToken: token
    await user.save();

    const {email} = user;
    const token = jwt.sign({ email }, serverConfig.jwt.secret, serverConfig.jwt.options);


    console.log("User toke: " + token);
    console.log("get email: " + email)

    mailService.sendConfirmationEmal(token, email)
};
