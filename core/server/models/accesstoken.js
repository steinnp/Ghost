var ghostBookshelf = requireRoot('models/base'),
    Basetoken = requireRoot('models/base/token'),
    common = requireRoot('lib/common'),

    Accesstoken,
    Accesstokens;

Accesstoken = Basetoken.extend({
    tableName: 'accesstokens',

    emitChange: function emitChange(event) {
        // Event named 'token' as access and refresh token will be merged in future, see #6626
        common.events.emit('token' + '.' + event, this);
    },

    onCreated: function onCreated(model) {
        model.emitChange('added');
    }
});

Accesstokens = ghostBookshelf.Collection.extend({
    model: Accesstoken
});

module.exports = {
    Accesstoken: ghostBookshelf.model('Accesstoken', Accesstoken),
    Accesstokens: ghostBookshelf.collection('Accesstokens', Accesstokens)
};
