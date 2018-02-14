var router           = requireRoot('apps/amp/lib/router'),
    registerHelpers = requireRoot('apps/amp/lib/helpers'),

    // Dirty requires
    config = requireRoot('config'),
    settingsCache = requireRoot('services/settings/cache');

module.exports = {
    activate: function activate(ghost) {
        var ampRoute = '*/' + config.get('routeKeywords').amp + '/';

        ghost.routeService.registerRouter(ampRoute, function settingsEnabledRouter(req, res, next) {
            if (settingsCache.get('amp') === true) {
                return router.apply(this, arguments);
            }

            next();
        });

        registerHelpers(ghost);
    }
};
