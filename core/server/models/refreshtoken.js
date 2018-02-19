var ghostBookshelf  = require('models/base'),
    Basetoken       = require('models/base/token'),

    Refreshtoken,
    Refreshtokens;

Refreshtoken = Basetoken.extend({
    tableName: 'refreshtokens'
});

Refreshtokens = ghostBookshelf.Collection.extend({
    model: Refreshtoken
});

module.exports = {
    Refreshtoken: ghostBookshelf.model('Refreshtoken', Refreshtoken),
    Refreshtokens: ghostBookshelf.collection('Refreshtokens', Refreshtokens)
};
