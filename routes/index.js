module.exports = (app) => { // пусті роути неможна робити !
    app.use('/register', require('../routes/register.route'));
    app.use('/auth', require('../routes/auth.route'));
    app.use('/client', require('../routes/client.route'));
    app.use('/admin', require('../routes/admin.route'));
    app.use('/employee', require('../routes/employee.route'));
    app.use('/test', require('../routes/test.route'))
};