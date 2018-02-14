/**
 * Dependencies
 */

var _ = require('lodash'),
    exports,
    models;

// enable event listeners
requireRoot('models/base/listeners');

/**
 * Expose all models
 */
exports = module.exports;

models = [
    'accesstoken',
    'app-field',
    'app-setting',
    'app',
    'client-trusted-domain',
    'client',
    'permission',
    'post',
    'refreshtoken',
    'role',
    'settings',
    'subscriber',
    'tag',
    'user',
    'invite',
    'webhook'
];

function init() {
    exports.Base = requireRoot('models/base');

    models.forEach(function (name) {
        _.extend(exports, require('./' + name));
    });
}

/**
 * Expose `init`
 */

exports.init = init;
