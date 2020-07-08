'use strict';

const winston = require('winston');

const loggerMiddleware = winston.createLogger({
    format: winston.format.json(),
    levels: {
        debug: 0,
        info: 1,
        error: 2
    },
    transports: [new winston.transports.Console()]
});

function setupLoggingMiddleware(app) {
    app.use(completionLoggingMiddleware);
}

function completionLoggingMiddleware(req, res) {
    let message = `${req.method} method completely handled by ${
        req.path
    } at time ${new Date().toISOString()} and returned ${res.statusCode}`;
    loggerMiddleware.info(message, {
        httpCode: res.statusCode,
        path: req.path,
        method: req.method
    });
}

module.exports = {
    setupLoggingMiddleware: setupLoggingMiddleware,
    logger: loggerMiddleware
};
