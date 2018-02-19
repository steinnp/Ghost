'use strict';

const config = require('config'),
    UrlService = require('services/url/UrlService'),
    urlService = new UrlService({
        disableUrlPreload: config.get('disableUrlPreload')
    });

// Singleton
module.exports = urlService;
