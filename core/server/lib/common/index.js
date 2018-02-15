'use strict';

module.exports = {
    get i18n() {
        return require('lib/common/i18n');
    },

    get events() {
        return require('lib/common/events');
    },

    get errors() {
        return require('lib/common/errors');
    },

    get logging() {
        return require('lib/common/logging');
    }
};
