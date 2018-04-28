const userService = require('../services/user.service');
const HttpError = require('../error');
const {validationResult} = require('express-validator/check');

// TODO create updateUser function PUT / and change password function PUT /pass and change password function PUT /email
// TODO (DONE using header Authorization) блятское подтверждение форготПассворд это блять не изменить нихуя пароль, пароль блять изменяется когда юзер уже залогинен, это изменение, а не востановление!
// TODO (DONE using header Authorization) изменение почты происходит так же как при регистрации  с подтверждением новой почты, пока не подтвердил почта у юзера не поменялась
// TODO функции измнения данных юзера у тебя тоже нихуя нет
// TODO ask why put ???

module.exports.getUser = async (req, res, next) => {
    const {user_id, user_type} = req.user;
    const userData = await userService.getUserData(user_id, user_type);
    res.json({...req.user.toJSON(), ...userData.toJSON()});
};

module.exports.updateUser = async (req, res, next) => {
//  check admin/employee/client or do separate functions ?
//  fields which can be change name/surname/company_name/company_address/phone
//  req.body - ? token (headers) ? and fields which will be change

    /* *
    * recognize which user - admin/employee/client (using token)
    * change his fields
    * save
    * */
};

module.exports.changePassword = async (req, res, next) => {
    // same like userUpdate ?
    // checked pass validationResult(req.pass);
    try {
        const errors = validationResult(req); // how does it work ??? req.body.pass == repeated pass

        if (!errors.isEmpty()) {
            throw new HttpError(442, JSON.stringify(errors.mapped()));
        }

        //console.log("Got: " + req.body.pass);
        await userService.changeUserPass(req.user.id, req.body.pass);
        res.json({message: 'ok'});

    } catch (err) {
        console.log(err);
        throw err;
    }
};

module.exports.changeEmail = async (req, res, next) => {
    /*
* find user by id
* and change his email
* change isEmailConfirmed to false
* send email confirmation
* */
    try {
        const errors = validationResult(req.email);

        if (!errors.isEmpty()) {
            throw new HttpError(442, JSON.stringify(errors.mapped()));
        }
        const {email} = req.body;
        console.log("Got: " + req.body.email);
        await userService.changeUserEmail(req.user.id, email);

        res.json({message: 'ok'});
    } catch (err) {
        console.log(err);
        throw err;
    }
};


module.exports.changeUserData = async (req, res, next) => { // name and surname
    const {name, surname} = req.body;
    await userService.updateAdminData(req.user.id, {name, surname});
    res.json({message: "ok"});
};

module.exports.changeClientData = async (req, res, next) => { // company_name, company_address, phone
    const {companyName, companyAddress, phone} = req.body;
    await userService.updateAdminData(req.user.id, {company_name: companyName, company_address: companyAddress, phone});
    res.json({message: "ok"});
};