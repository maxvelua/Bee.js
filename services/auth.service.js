const userService = require('../services/user.service');
const jwtHelper = require('../helpers/jwt.helper');
const db = require('../lib/sequelize.lib').db;

module.exports.login = async (loginOrEmail, pass) => {
    const user = await userService.findWhere({ // find where by login or email
        or: [
            {login: loginOrEmail},
            {email: loginOrEmail}
        ]
    });

    return userService.checkPass(user, pass);
};

module.exports.forgotPassword = async (email) => {
    console.log("GOt: " + email);
    const user = await userService.findWhere({email: email});
    const user_id = user.user_id;
    console.log("user_Id" + user_id);
    const token = jwtHelper.createToken({user_id}); // createToken(); - invalid expiresIn option for string payload - must be createToken ({});

    if (user) {
        console.log(user.email);
        //user.isActive = false;
        await user.save;
        return token;
    } else {
        throw new HttpError(404, "User not found");
    }
};

module.exports.resetPassword = async (pass, token) => {
    const {user_id} = jwtHelper.verifyToken(token);
    const {hashPass, passSalt} = await userService.hashPass(pass);
    console.log("SALT: " + passSalt);
    // const user = await userService.updateUser({email, isActive: false}, {pass: hashPass, passSalt, isActive: true});
    const user = await userService.updateUser(user_id, {pass_hash: hashPass, pass_salt:passSalt});
    await user.save;
};

