// Site Router is the top level Router for the whole site
var ParentRouter = requireRoot('services/route/ParentRouter'),
    siteRouter = new ParentRouter('site');

module.exports = siteRouter;
