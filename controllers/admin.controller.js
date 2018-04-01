const adminService = require('../services/admin.service');
const userService = require('../services/user.service');
const serverConfig = require("../config/server.config");
const HttpError = require('../error');
const { validationResult } = require('express-validator/check');
const jwtHelper = require('../helpers/jwt.helper');
const mailService = require('../services/mail.service');

module.exports.createAdmin = async (req, res, next) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            console.log("errors");
            throw new HttpError(442, JSON.stringify(errors.mapped()));
        }

        const user = await userService.createUser({user_type: 1, ...req.body});

        const {user_id, email} = user;

        const admin = await adminService.createAdmin(user_id, req.body);

        const token = jwtHelper.createToken({user_id});

        await mailService.sendConfirmationEmail(token, email);

        res.json({user, admin});
    } catch (err) {
        console.log(err);
        throw err;
    }
}