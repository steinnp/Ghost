// # Slack API
// API for sending Test Notifications to Slack
var Promise = require('bluebird'),
    common = requireRoot('lib/common'),
    slack;

/**
 * ## Slack API Method
 *
 * **See:** [API Methods](constants.js.html#api%20methods)
 * @typedef Slack
 * @param slack
 */
slack = {
    /**
     * ### SendTest
     * Send a test notification
     *
     * @public
     */
    sendTest: function () {
        common.events.emit('slack.test');
        return Promise.resolve();
    }
};

module.exports = slack;
