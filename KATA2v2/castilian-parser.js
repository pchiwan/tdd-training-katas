const query = require('./query')

function parse (input) {
  return query(input)
    .toUpperCase()
    .removeDiacritics()
    .removeNumbers()
    .removeSpecialCharacters()
    .trim()
    .removePluralCharacter('S')
    .toArray()
}

module.exports = parse