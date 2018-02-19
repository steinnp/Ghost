'use strict';

module.exports = {
    activate() {
        // needed by ghost
    },

    get cards() {
        return require('lib/mobiledoc/cards');
    },

    get atoms() {
        return require('lib/mobiledoc/atoms');
    },

    get converters() {
        return require('lib/mobiledoc/converters');
    }
};
