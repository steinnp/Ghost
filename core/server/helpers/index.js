var coreHelpers = {},
    register = require('helpers/register'),
    registerThemeHelper = register.registerThemeHelper,
    registerAsyncThemeHelper = register.registerAsyncThemeHelper,
    registerAllCoreHelpers;

coreHelpers.asset = require('helpers/asset');
coreHelpers.author = require('helpers/author');
coreHelpers.body_class = require('helpers/body_class');
coreHelpers.content = require('helpers/content');
coreHelpers.date = require('helpers/date');
coreHelpers.encode = require('helpers/encode');
coreHelpers.excerpt = require('helpers/excerpt');
coreHelpers.facebook_url = require('helpers/facebook_url');
coreHelpers.foreach = require('helpers/foreach');
coreHelpers.get = require('helpers/get');
coreHelpers.ghost_foot = require('helpers/ghost_foot');
coreHelpers.ghost_head = require('helpers/ghost_head');
coreHelpers.img_url = require('helpers/img_url');
coreHelpers.is = require('helpers/is');
coreHelpers.has = require('helpers/has');
coreHelpers.lang = require('helpers/lang');
coreHelpers.meta_description = require('helpers/meta_description');
coreHelpers.meta_title = require('helpers/meta_title');
coreHelpers.navigation = require('helpers/navigation');
coreHelpers.page_url = require('helpers/page_url');
coreHelpers.pagination = require('helpers/pagination');
coreHelpers.plural = require('helpers/plural');
coreHelpers.post_class = require('helpers/post_class');
coreHelpers.prev_post = require('helpers/prev_next');
coreHelpers.next_post = require('helpers/prev_next');
coreHelpers.reading_time = require('helpers/reading_time');
coreHelpers.t = require('helpers/t');
coreHelpers.tags = require('helpers/tags');
coreHelpers.title = require('helpers/title');
coreHelpers.twitter_url = require('helpers/twitter_url');
coreHelpers.url = require('helpers/url');

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
