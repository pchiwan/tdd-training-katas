const {
  arrayMapperCreator,
  parserCreator,
  removeNumbers,
  removePluralCharacter,
  removeSpecialCharacters,
  reverseArray,
  splitString,
  stringToUppercase,
  trimString
} = require('./parse-utils')

module.exports = parserCreator([
  stringToUppercase,
  removeNumbers,
  removeSpecialCharacters,
  trimString,
  splitString,
  arrayMapperCreator(word => removePluralCharacter(word, 'X')),
  reverseArray
])