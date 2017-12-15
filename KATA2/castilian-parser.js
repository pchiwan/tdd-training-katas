const {
  arrayMapperCreator,
  parserCreator,
  removeDiacritics,
  removeNumbers,
  removePluralCharacter,
  removeSpecialCharacters,
  splitString,
  stringToUppercase,
  trimString
} = require('./parse-utils')

module.exports = parserCreator([
  stringToUppercase,
  removeDiacritics,
  removeNumbers,
  removeSpecialCharacters,
  trimString,
  splitString,
  arrayMapperCreator(word => removePluralCharacter(word, 'S'))
])