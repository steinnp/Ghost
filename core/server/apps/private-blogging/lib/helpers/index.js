module.exports = function registerHelpers(ghost) {
    ghost.helpers.register('input_password', require('apps/private-blogging/lib/helpers/input_password'));
};
