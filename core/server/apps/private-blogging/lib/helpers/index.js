module.exports = function registerHelpers(ghost) {
    ghost.helpers.register('input_password', requireRoot('apps/private-blogging/lib/helpers/input_password'));
};
