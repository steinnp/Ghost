'use strict';

module.exports = {
    get i18n() {
        return requireRoot('lib/common/i18n');
    },

    get events() {
        return requireRoot('lib/common/events');
    },

    get errors() {
        return requireRoot('lib/common/errors');
    },

    get logging() {
        return requireRoot('lib/common/logging');
    }
};
