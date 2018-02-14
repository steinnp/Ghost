var router     = requireRoot('apps/subscribers/lib/router'),
    registerHelpers = requireRoot('apps/subscribers/lib/helpers'),

    // Dirty requires
    config = requireRoot('config'),
    labs = requireRoot('services/labs');

module.exports = {
    activate: function activate(ghost) {
        var subscribeRoute = '/' + config.get('routeKeywords').subscribe + '/';
        // TODO, how to do all this only if the Subscribers flag is set?!
        registerHelpers(ghost);

        ghost.routeService.registerRouter(subscribeRoute, function labsEnabledRouter(req, res, next) {
            if (labs.isSet('subscribers') === true) {
                return router.apply(this, arguments);
            }

            next();
        });
    }
};
