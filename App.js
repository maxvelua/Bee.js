const express = require('express')
const app = express()
const mongoose = require('./lib/mongoose.lib')
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const routes = require('./routes');
routes(app);

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