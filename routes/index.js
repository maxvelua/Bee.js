module.exports = (app) => {
    app.use('/register', require('../routes/register.route'));
    app.use('/auth', require('../routes/auth.route'));
    // async function errorHandler(err, req, res, next) {
    //     let errorMsg = [${new Date().toString()}] "${req.method} ${req.originalUrl}": ${err.message};
    //     if (req.query && _.keys(req.query).length > 0) {
    //         errorMsg +=  | query: ${JSON.stringify(req.query)};
    //     }
    //     if (req.body && _.keys(req.body).length > 0) {
    //         errorMsg +=  | body: ${JSON.stringify(req.body)};
    //     }
    //     logger.error(errorMsg);
    //     res.status(err.status || 500).json({ error: err.message || err });
    // }
    //
    // app.use(notFound);
    // app.use(errorHandler);
    //
    // app.use(require('morgan')('combined', { stream: logger.stream }));
    //
    // const logger = require('./services/logger.service');
    //
    // logger.info(Process: ${process.cwd()});
};