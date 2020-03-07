
module.exports = {

    PORT: 3000,
    SERVER_NAME: 'road-review:server',


    name: 'road-review',
    version: '1.0',

    env: process.env.NODE_ENV || 'development',

    redis: {
        url: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT,
        dbID: process.env.REDIS_DB_ID,
        password: process.env.REDIS_PASSWORD
    },

    db: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        dialect: 'mysql'
    }

};