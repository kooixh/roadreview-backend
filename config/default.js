
module.exports = {

    PORT: 3000,
    SERVER_NAME: 'node-js:server',


    name: 'node-js-boilerplate',
    version: '1.0',

    env: process.env.NODE_ENV || 'development',

    redis: {
        url: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT,
        dbID: process.env.REDIS_DB_ID,
        password: process.env.REDIS_PASSWORD
    }

};