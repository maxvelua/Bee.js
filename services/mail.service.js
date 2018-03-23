const jwtHelper = require("../helpers/jwt.helper")
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'bnmdude@gmail.com',
        pass: 'Vova21karp1112'
    }
});

module.exports.sendConfirmationEmail = async (token, email) => {
    const url = `http://localhost:3000/register/confirm-email?token=${token}`;

    const mailOptions = {
        from: 'bnmdude@gmail.com', // sender address
        to: email, // list of receivers
        subject: 'Please confirm your email', // Subject line
        html: `Please click this email to confirm your email address: <a href="${url}">${url}</a>`// plain text body
    };

    await transporter.sendMail(mailOptions);
};

module.exports.sendForgotEmail = async (token, email) => {
    const url = `http://localhost:3000/auth/forgot/verify?token=${token}`;

    const mailOptions = {
        from: 'bnmdude@gmail.com', // sender address
        to: email, // list of receivers
        subject: 'Please reset your password', // Subject line
        html: `Please click to reset your password: <a href="${url}">${url}</a>`// plain text body
    };

    await transporter.sendMail(mailOptions);
};

module.exports.sendRegEmployeeEmail = async (token, email, login, pass) => {
    this.employeeEmail = email;
    const url = `http://localhost:3000/auth/employee?token=${token}`;

    const mailOptions = {
        from: 'bnmdude@gmail.com', // sender address
        to: email, // list of receivers
        subject: 'You have registered on pornGEYhub', // Subject line
        html: `<p>This is your login and password: ` + login +`, ` + pass + `</p> Please click to login : <a href="${url}">${url}</a>`// plain text body
    };

    await transporter.sendMail(mailOptions);
};

module.exports.sendChangePassEmployeeEmail = async (email) => {
    console.log(email);
    const url = `http://localhost:3000/auth/employee/change-pass`;

    const mailOptions = {
        from: 'bnmdude@gmail.com', // sender address
        to: email, // list of receivers
        subject: 'Pls change your passrowd after first authorization', // Subject line
        html: `Please click to change your password : <a href="${url}">${url}</a>`// plain text body
    };

    await transporter.sendMail(mailOptions);
};