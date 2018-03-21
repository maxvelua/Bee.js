const { check, body, validationResult, query } = require('express-validator/check');
const XRegExp = require('xregexp');
const { matchedData, sanitize } = require('express-validator/filter');

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
  // body('pass','password does not match regex')
  //   .matches(XRegExp('^(?!.*([\\p{Lu}\\p{Ll}0-9])\\1{2})(?=.*[a-z])(?=.*\\d)[\\p{Lu}\\p{Ll}0-9]{8,20}$')),
  body('repeatPass', 'passwordConfirm field must have the same value as the password field')
    .exists()
    .custom((value, { req }) => value === req.body.pass),
    //body('token').exists(),
];

module.exports.regUser = [
    body('name').isLength({ min: 1 }).withMessage('Name cannot be empty').isAlpha().withMessage('Name must be alphabet letters'),
    body('pass').isLength({min: 8}).withMessage('pass must be min 8 characters'),
        //.matches(XRegExp('^(?!.*([\\p{Lu}\\p{Ll}0-9])\\1{2})(?=.*[a-z])(?=.*\\d)[\\p{Lu}\\p{Ll}0-9]{8,20}$')).trim().withMessage('Password does not match regex'),
    body('email', 'Invalid email').isEmail().exists(),//withMessage('Invalid email'),
    body('phoneNumber', 'Invalid phone number').matches(/\+\d{12,18}/).exists()//.withMessage('Invalid phone number')
];
