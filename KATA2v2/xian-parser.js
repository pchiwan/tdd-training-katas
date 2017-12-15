const query = require('./query')

function parse (input) {
  return query(input)
    .toUpperCase()
    .removeNumbers()
    .removeSpecialCharacters()
    .trim()
    .removePluralCharacter('X')
    .toArray()
    .reverse()
}

module.exports = parse
