const express = require('express')
const app = express()
const mongoose = require('./lib/mongoose.lib')
const bodyParser = require('body-parser');
const _ = require('lodash');
const HttpError = require('./error');
const logger = require('./services/logger.service');

logger.info(`Process: ${process.cwd()}`);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(require('morgan')('combined', {stream: logger.stream}));

const routes = require('./routes');
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


//app.get('/', (req, res) => res.send('Hello World!'))
// router.get('/dashboard', async (req, res, next) => {
//     const myFunc = () => res.json('прости за опоздание');
//     setTimeout(myFunc, 10000);
//     // res.send('kek');
// })
// router.get('/dashboard', async (req, res, next) => {
//     const myFunc = () => res.json('прости за опоздание');
//     setTimeout(myFunc, 10000);
//     // res.send('kek');
// })

// router.post('/user', async (req, res, next) => {
//     console.log(req.body);
//     const user = new UserModel(req.body);
//     await user.save();
//     res.json('saved');
// })

// routes.get('/register',  async (req, res, next) => {
//     res.render('register', { });
// });



app.listen(6666, () => console.log('Example app listening on port 5555!'))