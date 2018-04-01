const userService = require('../services/user.service');

// TODO create updateUser function POST / and change password function POST /pass

module.exports.getUser = async (req, res, next) => {
    const {user_id, user_type} = req.user;
    const userData = await userService.getUserData(user_id, user_type);
    res.json({user: req.user, userData});
};