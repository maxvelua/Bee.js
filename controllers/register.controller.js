const registerService = require('../services/register.service');
const HttpError = require('../error');
const { validationResult } = require('express-validator/check');

module.exports.regEmployee = async (req, res, next) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        throw new HttpError(442, JSON.stringify(errors.mapped())); //'Ja hz szo tyt mozna napysatu, takzo cyka blyat idi nahui');
    }

    await registerService.createUser();
    
    res.json('saved');
};
