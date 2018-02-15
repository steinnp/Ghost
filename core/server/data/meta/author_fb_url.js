var getContextObject = require('data/meta/context_object.js'),
    _                = require('lodash');

function getAuthorFacebookUrl(data) {
    var context = data.context ? data.context : null,
        contextObject = getContextObject(data, context);

    if ((_.includes(context, 'post') || _.includes(context, 'page')) && contextObject.author && contextObject.author.facebook) {
        return contextObject.author.facebook;
    } else if (_.includes(context, 'author') && contextObject.facebook) {
        return contextObject.facebook;
    }
    return null;
}

module.exports = getAuthorFacebookUrl;
