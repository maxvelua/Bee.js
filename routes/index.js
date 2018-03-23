module.exports = (app) => {
    app.use('/register', require('../routes/register.route'));
    app.use('/auth', require('../routes/auth.route'));
    app.user('/client', require('../routes/client.route'));
    app.user('/admin', require('../routes/admin.route'));
    app.user('/employee', require('../routes/employee.route'));
    app.user('/test', require('../routes/test.route'))
};