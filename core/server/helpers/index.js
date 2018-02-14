var coreHelpers = {},
    register = requireRoot('helpers/register'),
    registerThemeHelper = register.registerThemeHelper,
    registerAsyncThemeHelper = register.registerAsyncThemeHelper,
    registerAllCoreHelpers;

coreHelpers.asset = requireRoot('helpers/asset');
coreHelpers.author = requireRoot('helpers/author');
coreHelpers.body_class = requireRoot('helpers/body_class');
coreHelpers.content = requireRoot('helpers/content');
coreHelpers.date = requireRoot('helpers/date');
coreHelpers.encode = requireRoot('helpers/encode');
coreHelpers.excerpt = requireRoot('helpers/excerpt');
coreHelpers.facebook_url = requireRoot('helpers/facebook_url');
coreHelpers.foreach = requireRoot('helpers/foreach');
coreHelpers.get = requireRoot('helpers/get');
coreHelpers.ghost_foot = requireRoot('helpers/ghost_foot');
coreHelpers.ghost_head = requireRoot('helpers/ghost_head');
coreHelpers.img_url = requireRoot('helpers/img_url');
coreHelpers.is = requireRoot('helpers/is');
coreHelpers.has = requireRoot('helpers/has');
coreHelpers.lang = requireRoot('helpers/lang');
coreHelpers.meta_description = requireRoot('helpers/meta_description');
coreHelpers.meta_title = requireRoot('helpers/meta_title');
coreHelpers.navigation = requireRoot('helpers/navigation');
coreHelpers.page_url = requireRoot('helpers/page_url');
coreHelpers.pagination = requireRoot('helpers/pagination');
coreHelpers.plural = requireRoot('helpers/plural');
coreHelpers.post_class = requireRoot('helpers/post_class');
coreHelpers.prev_post = requireRoot('helpers/prev_next');
coreHelpers.next_post = requireRoot('helpers/prev_next');
coreHelpers.reading_time = requireRoot('helpers/reading_time');
coreHelpers.t = requireRoot('helpers/t');
coreHelpers.tags = requireRoot('helpers/tags');
coreHelpers.title = requireRoot('helpers/title');
coreHelpers.twitter_url = requireRoot('helpers/twitter_url');
coreHelpers.url = requireRoot('helpers/url');

registerAllCoreHelpers = function registerAllCoreHelpers() {
    // Register theme helpers
    registerThemeHelper('asset', coreHelpers.asset);
    registerThemeHelper('author', coreHelpers.author);
    registerThemeHelper('body_class', coreHelpers.body_class);
    registerThemeHelper('content', coreHelpers.content);
    registerThemeHelper('date', coreHelpers.date);
    registerThemeHelper('encode', coreHelpers.encode);
    registerThemeHelper('excerpt', coreHelpers.excerpt);
    registerThemeHelper('foreach', coreHelpers.foreach);
    registerThemeHelper('has', coreHelpers.has);
    registerThemeHelper('is', coreHelpers.is);
    registerThemeHelper('img_url', coreHelpers.img_url);
    registerThemeHelper('lang', coreHelpers.lang);
    registerThemeHelper('meta_description', coreHelpers.meta_description);
    registerThemeHelper('meta_title', coreHelpers.meta_title);
    registerThemeHelper('navigation', coreHelpers.navigation);
    registerThemeHelper('page_url', coreHelpers.page_url);
    registerThemeHelper('pagination', coreHelpers.pagination);
    registerThemeHelper('plural', coreHelpers.plural);
    registerThemeHelper('post_class', coreHelpers.post_class);
    registerThemeHelper('reading_time', coreHelpers.reading_time);
    registerThemeHelper('t', coreHelpers.t);
    registerThemeHelper('tags', coreHelpers.tags);
    registerThemeHelper('title', coreHelpers.title);
    registerThemeHelper('twitter_url', coreHelpers.twitter_url);
    registerThemeHelper('facebook_url', coreHelpers.facebook_url);
    registerThemeHelper('url', coreHelpers.url);

    // Async theme helpers
    registerAsyncThemeHelper('ghost_foot', coreHelpers.ghost_foot);
    registerAsyncThemeHelper('ghost_head', coreHelpers.ghost_head);
    registerAsyncThemeHelper('next_post', coreHelpers.next_post);
    registerAsyncThemeHelper('prev_post', coreHelpers.prev_post);
    registerAsyncThemeHelper('get', coreHelpers.get);
};

module.exports = coreHelpers;
module.exports.loadCoreHelpers = registerAllCoreHelpers;
