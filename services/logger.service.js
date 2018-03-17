"use strict";

const winston = require('winston');
winston.emitErrs = true;

let logger = new winston.Logger({
    transports: [
        new winston.transports.Console({
            level: 'debug',
            handleExceptions: false,
            json: false,
            colorize: true
        }),
        new winston.transports.File({
            filename: 'server.verbose.log',
            level: 'verbose'
        })
    ],
    exitOnError: false
});

module.exports = logger;
module.exports.stream = {
    write: function(message, encoding){
        logger.info(message);
    }
};