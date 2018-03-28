const authService = require('../services/auth.service');
const jwtHelper = require('../helpers/jwt.helper');

 module.exports.login = async (req, res, next) => {
    const {login, pass} = req.body;
    const user = await authService.login(login, pass);
    if(user){
        const token = jwtHelper.createToken({user_id: user.user_id});
        res.json({user, token});
    } else res.json("Unauthorized")
};
