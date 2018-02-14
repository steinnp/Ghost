var debug = require('ghost-ignition').debug('renderer'),
    setContext = requireRoot('controllers/frontend/context'),
    templates = requireRoot('controllers/frontend/templates');

module.exports = function renderer(req, res, data) {
    // Context
    setContext(req, res, data);

    // Template
    templates.setTemplate(req, res, data);

    // Render Call
    debug('Rendering template: ' + res._template + ' for: ' + req.originalUrl);
    debug('res.locals', res.locals);
    res.render(res._template, data);
};
