'use strict';

module.exports = {
    get readCSV() {
        return require('lib/fs/read-csv');
    },

    get zipFolder() {
        return require('lib/fs/zip-folder');
    }
};
