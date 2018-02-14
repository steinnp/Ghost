var backup = requireRoot('data/db/backup'),
    models = requireRoot('models');

module.exports = function before() {
    models.init();
    return backup();
};
