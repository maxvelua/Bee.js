const userService = require('../services/user.service');

module.exports.login = async (loginOrEmail, pass) => {
    const user = await userService.findWhere({
        or: [
            {login: loginOrEmail},
            {email: loginOrEmail}
        ]
    });

    return userService.checkPass(user, pass);
};
