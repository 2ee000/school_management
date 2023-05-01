const express = require('express');
const cors = require('cors');
const { adminRouter, schoolRouter } = require('../routers');

const morgan = require('morgan');
const { logHandler, errorHandler } = require('../middlewares/errorHandler');

module.exports = {
    expressApplication: async (app) => {
        if (process.env.NODE_ENV !== 'test') {
            app.use(morgan('dev'));
        }

        app.use('/upload', express.static('upload'));
        app.use(cors());
        app.use(express.urlencoded({ extended: false }));
        app.use(express.json());
        app.use('/admin', adminRouter);
        app.use(express.static('apidoc'));
        app.use('/school', schoolRouter);
        app.use(logHandler);
        app.use(errorHandler);
    },
    app: express(),
}