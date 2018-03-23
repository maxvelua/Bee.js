module.exports = (app) => {
    app.use('/register', require('../routes/register.route'));
    app.use('/auth', require('../routes/auth.route'));
};