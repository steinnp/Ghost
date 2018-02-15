// canThis(someUser).edit.posts([id]|[[ids]])
// canThis(someUser).edit.post(somePost|somePostId)

var models = require('models'),
    actionsMap = require('services/permissions/actions-map-cache'),
    init;

init = function init(options) {
    options = options || {};

    // Load all the permissions
    return models.Permission.findAll(options)
        .then(function (permissionsCollection) {
            return actionsMap.init(permissionsCollection);
        });
};

module.exports = {
    init: init,
    canThis: require('services/permissions/can-this'),
    // @TODO: Make it so that we don't need to export these
    parseContext: require('services/permissions/parse-context'),
    applyPublicRules: require('services/permissions/public')
};
