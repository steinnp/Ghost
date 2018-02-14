var urlService = requireRoot('services/url'),
    getContextObject = requireRoot('data/meta/context_object.js'),
    _ = require('lodash');

function getAuthorImage(data, absolute) {
    var context = data.context ? data.context : null,
        contextObject = getContextObject(data, context);

    if ((_.includes(context, 'post') || _.includes(context, 'page')) && contextObject.author && contextObject.author.profile_image) {
        return urlService.utils.urlFor('image', {image: contextObject.author.profile_image}, absolute);
    }
    return null;
}

module.exports = getAuthorImage;
