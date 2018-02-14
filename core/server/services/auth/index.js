var passport = requireRoot('services/auth/passport'),
    authorize = requireRoot('services/auth/authorize'),
    authenticate = requireRoot('services/auth/authenticate'),
    oauth = requireRoot('services/auth/oauth');

exports.init = function (options) {
    oauth.init(options);
    return passport.init(options);
};

exports.oauth = oauth;
exports.authorize = authorize;
exports.authenticate = authenticate;
