var Promise = require('bluebird'),
    models = requireRoot('models');

module.exports = function before() {
    models.init();
    return Promise.resolve();
};
