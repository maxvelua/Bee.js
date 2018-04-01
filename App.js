const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const _ = require('lodash');
const HttpError = require('./error');
const logger = require('./services/logger.service');
const Sequelize = require('./lib/sequelize.lib');
const routes = require('./routes');
Sequelize.connect();

logger.info(`Process: ${process.cwd()}`);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(require('morgan')('combined', {stream: logger.stream}));

routes(app);

async function notFound(req, res, next) {
    next(new HttpError(404, 'Page not found'));
}

async function errorHandler(err, req, res, next) {
    let errorMsg = `[${new Date().toString()}] "${req.method} ${req.originalUrl}": ${err.message}`;
    if (req.query && _.keys(req.query).length > 0) {
        errorMsg += ` | query: ${JSON.stringify(req.query)}`;
    }
    if (req.body && _.keys(req.body).length > 0) {
        errorMsg += ` | body: ${JSON.stringify(req.body)}`;
    }
    logger.error(errorMsg);
    res.status(err.status || 500)
        .json({error: err.message || err});
}

app.use(notFound);
app.use(errorHandler);

app.listen(process.env.PORT || 3000, () => console.log('Example app listening on port 3000!'));

module.exports = app;