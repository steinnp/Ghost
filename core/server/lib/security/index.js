'use strict';

module.exports = {
    get url() {
        return requireRoot('lib/security/url');
    },

    get tokens() {
        return requireRoot('lib/security/tokens');
    },

    get string() {
        return requireRoot('lib/security/string');
    },

    get identifier() {
        return requireRoot('lib/security/identifier');
    }
};
