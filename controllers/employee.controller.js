// adding all services and libs
const employeeService = require('../services/employee.service');
const userService = require('../services/user.service');
const HttpError = require('../error');
const { validationResult } = require('express-validator/check');
const jwtHelper = require('../helpers/jwt.helper');
const mailService = require('../services/mail.service');

module.exports.createEmployee = async (req, res, next) => {
    try {
        const errors = validationResult(req); // validating login and pass

        if (!errors.isEmpty()) { // checking if errors exist
            console.log("errors");
            throw new HttpError(442, JSON.stringify(errors.mapped())); // output all errors
        }

        const user = await userService.createUser({user_type: 2, ...req.body}); // create user

        const {user_id, email} = user; // take user email and id

        const employee = await employeeService.createEmployee(user_id, req.body); // create employee

        const token = jwtHelper.createToken({user_id}); // create token

        await mailService.sendConfirmationEmail(token, email); // send confirmation email

        res.json({user, employee});
    } catch (err) {
        console.log(err);
        throw err;
    }
};