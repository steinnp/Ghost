var _ = require('lodash'),
    Promise = require('bluebird'),
    path = require('path'),
    config = requireRoot('config'),
    urlService = requireRoot('services/url'),
    storage = requireRoot('adapters/storage'),

    ImageHandler;

ImageHandler = {
    type: 'images',
    extensions: config.get('uploads').images.extensions,
    contentTypes: config.get('uploads').images.contentTypes,
    directories: ['images', 'content'],

    loadFile: function (files, baseDir) {
        var store = storage.getStorage(),
            baseDirRegex = baseDir ? new RegExp('^' + baseDir + '/') : new RegExp(''),
            imageFolderRegexes = _.map(urlService.utils.STATIC_IMAGE_URL_PREFIX.split('/'), function (dir) {
                return new RegExp('^' + dir + '/');
            });

        // normalize the directory structure
        files = _.map(files, function (file) {
            var noBaseDir = file.name.replace(baseDirRegex, ''),
                noGhostDirs = noBaseDir;

            _.each(imageFolderRegexes, function (regex) {
                noGhostDirs = noGhostDirs.replace(regex, '');
            });

            file.originalPath = noBaseDir;
            file.name = noGhostDirs;
            file.targetDir = path.join(config.getContentPath('images'), path.dirname(noGhostDirs));
            return file;
        });

        return Promise.map(files, function (image) {
            return store.getUniqueFileName(image, image.targetDir).then(function (targetFilename) {
                image.newPath = urlService.utils.urlJoin('/', urlService.utils.getSubdir(), urlService.utils.STATIC_IMAGE_URL_PREFIX,
                    path.relative(config.getContentPath('images'), targetFilename));

                return image;
            });
        });
    }
};

module.exports = ImageHandler;
