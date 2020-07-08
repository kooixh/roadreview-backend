/**
 *
 * This file handles all cache operations
 *
 *
 */

const redis = require('redis');
const config = require('config');

let redisDB = redis.createClient({
    db: config.redis.dbID,
    host: config.redis.url,
    port: config.redis.port,
    password: config.redis.password
});

let isInitialized = false;


/**
 *
 * Start up the cache and log it
 *
 *
 */
function init() {
    if (!isInitialized) {
        redisDB.on('connect', () => {
            console.log(`connected to redis : ` + config.redis.url);

        });
        redisDB.on('error', err => {
            console.log(`Error: ${err}`);
            return process.exit(7);
        });
        isInitialized = true;
    }
}

module.exports = {
    init: init,
    redisDB: redisDB
};