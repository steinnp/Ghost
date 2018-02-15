var debug = require('ghost-ignition').debug('channels:render'),
    formatResponse = require('controllers/frontend/format-response'),
    renderer = require('controllers/frontend/renderer');

module.exports = function renderChannel(req, res) {
    debug('renderChannel called');
    return function renderChannel(result) {
        // Renderer begin
        // Format data 2
        // Do final data formatting and then render
        var data = formatResponse.channel(result);

        // Render Call
        return renderer(req, res, data);
    };
};
