// This file defines everything that helpers "require"
// With the exception of modules like lodash, Bluebird
// We can later refactor to enforce this something like we do in apps
var hbs = requireRoot('services/themes/engine'),
    settingsCache = requireRoot('services/settings/cache'),
    config = requireRoot('config');

// Direct requires:
// - lodash
// - bluebird
// - downsize
// - moment-timezone
// - jsonpath

module.exports = {
    hbs: hbs,
    SafeString: hbs.SafeString,
    escapeExpression: hbs.escapeExpression,

    // TODO: Expose less of the API to make this safe
    api: requireRoot('api'),
    models: requireRoot('models'),

    // TODO: Only expose "get"
    settingsCache: settingsCache,

    // These 3 are kind of core and required all the time
    errors: requireRoot('lib/common/errors'),
    i18n: requireRoot('lib/common/i18n'),
    logging: requireRoot('lib/common/logging'),

    // This is used to detect if "isPost" is true in prevNext.
    checks: requireRoot('data/schema').checks,

    // Config!
    // Keys used:
    // isPrivacyDisabled & referrerPolicy used in ghost_head
    // Subscribe app uses routeKeywords
    config: {
        get: config.get.bind(config),
        isPrivacyDisabled: config.isPrivacyDisabled.bind(config)
    },

    // Labs utils for enabling/disabling helpers
    labs: requireRoot('services/labs'),

    // System for apps to hook into one day maybe
    filters: requireRoot('filters'),

    // Things required from data/meta
    metaData: {
        get: requireRoot('data/meta'), // ghost_head
        getAssetUrl: requireRoot('data/meta/asset_url'), // asset
        getMetaDataExcerpt: requireRoot('data/meta/excerpt'), // excerpt
        getMetaDataDescription: requireRoot('data/meta/description'), // meta_desc
        getMetaDataTitle: requireRoot('data/meta/title'), // meta_title
        getPaginatedUrl: requireRoot('data/meta/paginated_url'), // page_url
        getMetaDataUrl: requireRoot('data/meta/url') // url
    },

    // The local template thing, should this be merged with the channels one?
    templates: requireRoot('helpers/template'),

    // Various utils, needs cleaning up / simplifying
    socialUrls: requireRoot('lib/social/urls'),
    blogIcon: requireRoot('lib/image/blog-icon'),
    url: requireRoot('services/url').utils,
    localUtils: requireRoot('helpers/utils')
};
