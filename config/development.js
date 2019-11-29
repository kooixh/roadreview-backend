module.exports = {

    // Default server protocol
    protocol: process.env.PROTOCOL || 'http',

    redis: {
        url: process.env.REDIS_HOST || "127.0.0.1",
        port: process.env.REDIS_PORT || "6379",
        dbID: process.env.REDIS_DB_ID || "0",
        password: process.env.REDIS_PASSWORD || "1234567890"
    }

};