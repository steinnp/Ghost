'use strict';

module.exports = {
    get blogIcon() {
        return require('lib/image/blog-icon');
    },

    get imageSize() {
        return require('lib/image/image-size');
    },

    get gravatar() {
        return require('lib/image/gravatar');
    },

    get imageSizeCache() {
        return require('lib/image/cached-image-size-from-url');
    }
};
