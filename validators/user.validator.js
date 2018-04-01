const { check, body, validationResult, query } = require('express-validator/check');

module.exports.validateChangeEmail = [
    body('id').isInt().exists(),
    body('email').isEmail().exists(),
];

module.exports.validateUpdatePhone = [
    body('id').isInt().exists(),
    body('code').matches(/\d{4}/).exists(),
    body('phone').matches(/\+\d{12,18}/).exists(),
];

module.exports.resetPassword = [
    body('email').isEmail().exists(),
];

module.exports.changePassword = [
    body('pass').isLength({min: 8}).withMessage('pass must be min 8 characters'),
    body('repeatPass', 'passwordConfirm field must have the same value as the password field')
        .exists()
        .custom((value, { req }) => value === req.body.pass),
    //body('token').exists(),
];

module.exports.regUser = [
    body('login').isLength({ min: 1 }).withMessage('Name cannot be empty'),
    body('pass').isLength({min: 8}).withMessage('pass must be min 8 characters')
    //body('email', 'Invalid email').isEmail().exists(),//withMessage('Invalid email'),
    //body('phoneNumber', 'Invalid phone number').matches(/\+\d{12,18}/).exists()//.withMessage('Invalid phone number')
];