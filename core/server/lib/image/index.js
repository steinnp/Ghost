'use strict';

module.exports = {
    get blogIcon() {
        return requireRoot('lib/image/blog-icon');
    },

    get imageSize() {
        return requireRoot('lib/image/image-size');
    },

    get gravatar() {
        return requireRoot('lib/image/gravatar');
    },

    get imageSizeCache() {
        return requireRoot('lib/image/cached-image-size-from-url');
    }
};
