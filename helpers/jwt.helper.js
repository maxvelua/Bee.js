const jwt = require("jsonwebtoken");
const serverConfig = require("../config/server.config");

module.exports.createToken = (data) => jwt.sign(data, serverConfig.jwt.secret, serverConfig.jwt.options);

module.exports.verifyToken = (token) => jwt.verify(token, serverConfig.jwt.secret);