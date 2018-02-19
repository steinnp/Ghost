var Promise = require('bluebird'),
    settingsCache = require('services/settings/cache'),
    urlService = require('services/url'),
    common = require('lib/common'),
    getUrl = require('data/meta/url'),
    getImageDimensions = require('data/meta/image-dimensions'),
    getCanonicalUrl = require('data/meta/canonical_url'),
    getAmpUrl = require('data/meta/amp_url'),
    getPaginatedUrl = require('data/meta/paginated_url'),
    getAuthorUrl = require('data/meta/author_url'),
    getBlogLogo = require('data/meta/blog_logo'),
    getRssUrl = require('data/meta/rss_url'),
    getTitle = require('data/meta/title'),
    getDescription = require('data/meta/description'),
    getCoverImage = require('data/meta/cover_image'),
    getAuthorImage = require('data/meta/author_image'),
    getAuthorFacebook = require('data/meta/author_fb_url'),
    getCreatorTwitter = require('data/meta/creator_url'),
    getKeywords = require('data/meta/keywords'),
    getPublishedDate = require('data/meta/published_date'),
    getModifiedDate = require('data/meta/modified_date'),
    getOgType = require('data/meta/og_type'),
    getOgImage = require('data/meta/og_image'),
    getTwitterImage = require('data/meta/twitter_image'),
    getStructuredData = require('data/meta/structured_data'),
    getSchema = require('data/meta/schema'),
    getExcerpt = require('data/meta/excerpt');

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
