module.exports = (app) => { // пусті роути неможна робити !
    app.use('/api/register', require('./register.route'));
    app.use('/api/auth', require('./auth.route'));
    app.use('/api/client', require('./client.route'));
    app.use('/api/admin', require('./admin.route'));
    app.use('/api/employee', require('./employee.route'));
    app.use('/api/test', require('./test.route'));
    app.use('/api/user', require('./user.route'));
    app.use('/api/', require('./root.route'));
};