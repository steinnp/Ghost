var Promise = require('bluebird'),
    settingsCache = requireRoot('services/settings/cache'),
    urlService = requireRoot('services/url'),
    common = requireRoot('lib/common'),
    getUrl = requireRoot('data/meta/url'),
    getImageDimensions = requireRoot('data/meta/image-dimensions'),
    getCanonicalUrl = requireRoot('data/meta/canonical_url'),
    getAmpUrl = requireRoot('data/meta/amp_url'),
    getPaginatedUrl = requireRoot('data/meta/paginated_url'),
    getAuthorUrl = requireRoot('data/meta/author_url'),
    getBlogLogo = requireRoot('data/meta/blog_logo'),
    getRssUrl = requireRoot('data/meta/rss_url'),
    getTitle = requireRoot('data/meta/title'),
    getDescription = requireRoot('data/meta/description'),
    getCoverImage = requireRoot('data/meta/cover_image'),
    getAuthorImage = requireRoot('data/meta/author_image'),
    getAuthorFacebook = requireRoot('data/meta/author_fb_url'),
    getCreatorTwitter = requireRoot('data/meta/creator_url'),
    getKeywords = requireRoot('data/meta/keywords'),
    getPublishedDate = requireRoot('data/meta/published_date'),
    getModifiedDate = requireRoot('data/meta/modified_date'),
    getOgType = requireRoot('data/meta/og_type'),
    getOgImage = requireRoot('data/meta/og_image'),
    getTwitterImage = requireRoot('data/meta/twitter_image'),
    getStructuredData = requireRoot('data/meta/structured_data'),
    getSchema = requireRoot('data/meta/schema'),
    getExcerpt = requireRoot('data/meta/excerpt');

function getMetaData(data, root) {
    var metaData = {
            url: getUrl(data, true),
            canonicalUrl: getCanonicalUrl(data),
            ampUrl: getAmpUrl(data),
            previousUrl: getPaginatedUrl('prev', data, true),
            nextUrl: getPaginatedUrl('next', data, true),
            authorUrl: getAuthorUrl(data, true),
            rssUrl: getRssUrl(data, true),
            metaTitle: getTitle(data, root),
            metaDescription: getDescription(data, root) || null,
            coverImage: {
                url: getCoverImage(data, true)
            },
            authorImage: {
                url: getAuthorImage(data, true)
            },
            ogImage: {
                url: getOgImage(data, true)
            },
            ogTitle: getTitle(data, root, {property: 'og'}),
            ogDescription: getDescription(data, root, {property: 'og'}),
            twitterImage: getTwitterImage(data, true),
            twitterTitle: getTitle(data, root, {property: 'twitter'}),
            twitterDescription: getDescription(data, root, {property: 'twitter'}),
            authorFacebook: getAuthorFacebook(data),
            creatorTwitter: getCreatorTwitter(data),
            keywords: getKeywords(data),
            publishedDate: getPublishedDate(data),
            modifiedDate: getModifiedDate(data),
            ogType: getOgType(data),
            // @TODO: pass into each meta helper - wrap each helper
            blog: {
                title: settingsCache.get('title'),
                description: settingsCache.get('description'),
                url: urlService.utils.urlFor('home', true),
                facebook: settingsCache.get('facebook'),
                twitter: settingsCache.get('twitter'),
                timezone: settingsCache.get('active_timezone'),
                navigation: settingsCache.get('navigation'),
                icon: settingsCache.get('icon'),
                cover_image: settingsCache.get('cover_image'),
                logo: getBlogLogo(),
                amp: settingsCache.get('amp')
            }
        },
        customExcerpt,
        metaDescription,
        fallbackExcerpt;

    // TODO: cleanup these if statements
    if (data.post) {
        // There's a specific order for description fields (not <meta name="description" /> !!) in structured data
        // and schema.org which is used the description fields (see https://github.com/TryGhost/Ghost/issues/8793):
        // 1. CASE: custom_excerpt is populated via the UI
        // 2. CASE: no custom_excerpt, but meta_description is poplated via the UI
        // 3. CASE: fall back to automated excerpt of 50 words if neither custom_excerpt nor meta_description is provided
        customExcerpt = data.post.custom_excerpt;
        metaDescription = data.post.meta_description;
        fallbackExcerpt = data.post.html ? getExcerpt(data.post.html, {words: 50}) : '';

        metaData.excerpt = customExcerpt ? customExcerpt : metaDescription ? metaDescription : fallbackExcerpt;
    }

    if (data.post && data.post.author && data.post.author.name) {
        metaData.authorName = data.post.author.name;
    }

    return Promise.props(getImageDimensions(metaData)).then(function () {
        metaData.structuredData = getStructuredData(metaData);
        metaData.schema = getSchema(metaData, data);

        return metaData;
    }).catch(function (err) {
        common.logging.error(err);
        return metaData;
    });
}

module.exports = getMetaData;
