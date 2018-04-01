const authService = require('../services/auth.service');
const mailServers = require ('../services/mail.service');
const jwtHelper = require('../helpers/jwt.helper');
const userService = require('../services/user.service');

module.exports.confirmEmail = async (req, res, next) => {
    console.log(req.query);
    const { token } = req.query;
    const {user_id} = await jwtHelper.verifyToken(token);

    const user = await userService.updateUser(user_id, {is_email_confirmed: true});//

    res.json(user);

};
