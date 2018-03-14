const UserModel = require("../models/user.model");
const crypto = require('crypto');

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

    const user = new UserModel({...userData, pass: hashPass, passSalt});
    await user.save();
}
