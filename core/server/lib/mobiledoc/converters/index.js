'use strict';

module.exports = {
    get mobiledocConverter() {
        return requireRoot('lib/mobiledoc/converters/mobiledoc-converter');
    },

    get markdownConverter() {
        return requireRoot('lib/mobiledoc/converters/markdown-converter');
    }
};
