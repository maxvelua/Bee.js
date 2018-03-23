const authService = require('../services/auth.service');

 module.exports.login = async (req, res, next) => {
    const {login, pass} = req.body;
    const authCheck = await authService.login(login, pass);
    if(authCheck) res.json("Good");
    else res.json("Idi naxyj")
};
