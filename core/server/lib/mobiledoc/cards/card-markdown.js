'use strict';

// this card is just an alias of the `markdown` card which is necessary because
// our markdown-only editor was using the `card-markdown` card name
const markdownCard = require('lib/mobiledoc/cards/markdown');

module.exports = Object.assign({}, markdownCard, {name: 'card-markdown'});
