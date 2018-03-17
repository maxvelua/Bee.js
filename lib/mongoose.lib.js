const mongoose = require('mongoose');
mongoose.connect('mongodb://admin:admin@ds012178.mlab.com:12178/bee');
mongoose.set('debug', true);
module.exports = mongoose;