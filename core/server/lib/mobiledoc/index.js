'use strict';

module.exports = {
    activate() {
        // needed by ghost
    },

    get cards() {
        return requireRoot('lib/mobiledoc/cards');
    },

    get atoms() {
        return requireRoot('lib/mobiledoc/atoms');
    },

    get converters() {
        return requireRoot('lib/mobiledoc/converters');
    }
};
