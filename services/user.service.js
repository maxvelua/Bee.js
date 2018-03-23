const crypto = require('crypto');

module.exports.hashPass = async (pass) => {
    const passSalt = await crypto.randomBytes(8).toString('hex');
    const hashPass = crypto.pbkdf2Sync(pass, passSalt, 64, 128, 'sha512').toString('base64');

    return {passSalt, hashPass};
};
