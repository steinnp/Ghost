var connection;

Object.defineProperty(exports, 'knex', {
    enumerable: true,
    configurable: true,
    get: function get() {
        connection = connection || requireRoot('data/db/connection');
        return connection;
    }
});
