const mongoose = require('mongoose');
mongoose.connect('mongodb://admin:admin@ds012178.mlab.com:12178/bee');
module.exports = mongoose;