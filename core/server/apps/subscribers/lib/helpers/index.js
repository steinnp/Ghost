// Dirty requires!
var labs = requireRoot('services/labs');

module.exports = function registerHelpers(ghost) {
    ghost.helpers.register('input_email', requireRoot('apps/subscribers/lib/helpers/input_email'));

    ghost.helpers.register('subscribe_form', function labsEnabledHelper() {
        var self = this,
            args = arguments;

        return labs.enabledHelper({
            flagKey: 'subscribers',
            flagName: 'Subscribers',
            helperName: 'subscribe_form',
            helpUrl: 'https://help.ghost.org/hc/en-us/articles/224089787-Subscribers-Beta'
        }, function executeHelper() {
            return requireRoot('apps/subscribers/lib/helpers/subscribe_form').apply(self, args);
        });
    });
};
