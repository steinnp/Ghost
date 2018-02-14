'use strict';

module.exports = {
    get readCSV() {
        return requireRoot('lib/fs/read-csv');
    },

    get zipFolder() {
        return requireRoot('lib/fs/zip-folder');
    }
};
