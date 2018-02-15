'use strict';

module.exports = {
    get url() {
        return require('lib/security/url');
    },

    get tokens() {
        return require('lib/security/tokens');
    },

    get string() {
        return require('lib/security/string');
    },

    get identifier() {
        return require('lib/security/identifier');
    }
};
