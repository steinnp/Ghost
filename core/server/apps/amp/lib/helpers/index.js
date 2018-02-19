// Dirty require!
var ghostHead = require('helpers/ghost_head');

module.exports = function registerAmpHelpers(ghost) {
    ghost.helpers.registerAsync('amp_content', require('apps/amp/lib/helpers/amp_content'));

    ghost.helpers.register('amp_components', require('apps/amp/lib/helpers/amp_components'));

    // we use the {{ghost_head}} helper, but call it {{amp_ghost_head}}, so it's consistent
    ghost.helpers.registerAsync('amp_ghost_head', ghostHead);
};
