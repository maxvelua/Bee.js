module.exports = (app) => { // пусті роути неможна робити !
    app.use('/api/register', require('./register.route'));
    app.use('/api/auth', require('./auth.route'));
    app.use('/api/client', require('./client.route'));
    app.use('/api/admin', require('./admin.route'));
    app.use('/api/employee', require('./employee.route'));
    app.use('/api/test', require('./test.route'));
    app.use('/api/user', require('./user.route'));
    app.use('/api/', require('./root.route'));

    app.use('/api/catalog', require('./catalog.routes'));
    app.use('/api/beehives-management', require('./beehiveManagement.routes'));
};

// TODO (DONE) create routes for all catalogs and beehive management (catalogs: create, update, delete, get functions in controllers) (beehive management get function)
