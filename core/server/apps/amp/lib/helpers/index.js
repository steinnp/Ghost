// Dirty require!
var ghostHead = requireRoot('helpers/ghost_head');

module.exports = function registerAmpHelpers(ghost) {
    ghost.helpers.registerAsync('amp_content', requireRoot('apps/amp/lib/helpers/amp_content'));

    ghost.helpers.register('amp_components', requireRoot('apps/amp/lib/helpers/amp_components'));

    // we use the {{ghost_head}} helper, but call it {{amp_ghost_head}}, so it's consistent
    ghost.helpers.registerAsync('amp_ghost_head', ghostHead);
};
