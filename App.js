const express = require('express')
const router = require('express-promise-router')();
const app = express()
const mongoose = require('./lib/mongoose.lib')
const bodyParser = require('body-parser');
const UserModel = require('./models/user.model')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//app.get('/', (req, res) => res.send('Hello World!'))

router.get('/dashboard', async (req, res, next) => {
    const myFunc = () => res.json('прости за опоздание');
    setTimeout(myFunc, 10000);
    // res.send('kek');
})

router.post('/user', async (req, res, next) => {
    console.log(req.body);
    const user = new UserModel(req.body);
    await user.save();
    res.json('saved');
})


app.use(router);

app.listen(5555, () => console.log('Example app listening on port 5555!'))