var passport = require('services/auth/passport'),
    authorize = require('services/auth/authorize'),
    authenticate = require('services/auth/authenticate'),
    oauth = require('services/auth/oauth');

exports.init = function (options) {
    oauth.init(options);
    return passport.init(options);
};

exports.oauth = oauth;
exports.authorize = authorize;
exports.authenticate = authenticate;
