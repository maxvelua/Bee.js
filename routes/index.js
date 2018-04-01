module.exports = (app) => { // пусті роути неможна робити !
    app.use('/register', require('./register.route'));
    app.use('/auth', require('./auth.route'));
    app.use('/client', require('./client.route'));
    app.use('/admin', require('./admin.route'));
    app.use('/employee', require('./employee.route'));
    app.use('/test', require('./test.route'));
    app.use('/user', require('./user.route'));
};