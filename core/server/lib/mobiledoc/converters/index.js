'use strict';

module.exports = {
    get mobiledocConverter() {
        return require('lib/mobiledoc/converters/mobiledoc-converter');
    },

    get markdownConverter() {
        return require('lib/mobiledoc/converters/markdown-converter');
    }
};
