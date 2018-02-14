var urlService = requireRoot('services/url'),
    settingsCache = requireRoot('services/settings/cache'),
    imageLib = requireRoot('lib/image');

function getBlogLogo() {
    var logo = {};

    if (settingsCache.get('logo')) {
        logo.url = urlService.utils.urlFor('image', {image: settingsCache.get('logo')}, true);
    } else {
        // CASE: no publication logo is updated. We can try to use either an uploaded publication icon
        // or use the default one to make
        // Google happy with it. See https://github.com/TryGhost/Ghost/issues/7558
        logo.url = imageLib.blogIcon.getIconUrl(true);
    }

    return logo;
}

module.exports = getBlogLogo;
