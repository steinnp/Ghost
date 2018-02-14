'use strict';

const config = requireRoot('config'),
    UrlService = requireRoot('services/url/UrlService'),
    urlService = new UrlService({
        disableUrlPreload: config.get('disableUrlPreload')
    });

// Singleton
module.exports = urlService;
