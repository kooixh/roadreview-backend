/**
 *
 * This file builds the express app
 *
 */

'use strict';

const path = require('path');
const cors = require('cors');
const config = require('config');
const logger = require('morgan');
const express = require('express');
const cookieParser = require('cookie-parser');


let app = express();

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'pug');
app.set('trust proxy', true);
app.set('etag', false);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

app.use(cors({
    origin: config.allowedURLs,
    methods: ['GET', 'PUT', 'POST', 'DELETE'],
    allowedHeaders: ['X-Requested-With', 'X-File-Name', 'Content-Type', 'Authorization', 'Location', 'Language',
        'Device-ID', 'Timestamp', 'Key', 'Encrypted-Content-Type'],
    exposedHeaders: ['File-Type', 'File-Length', 'Content-Type', 'Content-Length', 'Last-Modified', 'Last-Created']
}));


module.exports = app;

