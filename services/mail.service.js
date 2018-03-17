const jwtHelper = require("../helpers/jwt.helper")
const UserModel = require("../models/user.model");
const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'bnmdude@gmail.com',
        pass: 'Vova21karp1112'
    }
});

module.exports.sendConfirmationEmal = async (token, email) => {
    const url = `http://localhost:6666/register/confirm-email?token=${token}`;

    const mailOptions = {
        from: 'bnmdude@gmail.com', // sender address
        to: email, // list of receivers
        subject: 'Please confirm your email', // Subject line
        html: `Please click this email to confirm your email address: <a href="${url}">${url}</a>`// plain text body
    };

    await transporter.sendMail(mailOptions);
};

module.exports.sendForgotEmail = async (token, email) => {
    const url = `http://localhost:6666/auth/forgot/verify?token=${token}`;

    const mailOptions = {
        from: 'bnmdude@gmail.com', // sender address
        to: email, // list of receivers
        subject: 'Please reset your password', // Subject line
        html: `Please click to reset your password: <a href="${url}">${url}</a>`// plain text body
    };

    await transporter.sendMail(mailOptions);
};