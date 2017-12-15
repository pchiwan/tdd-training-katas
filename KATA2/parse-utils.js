function arrayMapperCreator (callback) {
  return arr => arr.map(callback)
}

function parserCreator (operations) {
  return (input) => operations.reduce((value, operation) => operation(value), input)
}

function removeDiacritics (input) {
  return input.normalize('NFD').replace(/[\u0300-\u036f]/gi, '')
}

function removeNumbers (input) {
  return input.replace(/[0-9]/gi, '')
}

function removePluralCharacter (input, character) {
  const lastIndex = input.length - 1
  return input[lastIndex] === character
    ? input.substring(0, lastIndex)
    : input
}

function removeSpecialCharacters (input) {
  return input.replace(/[&\/\\#,+\-()$~%.'":*<>{}]/gi, '')
}

function reverseArray (arr) {
  return arr.reverse()
}

function splitString (input) {
  return input.split(' ')
}

function stringToUppercase (input) {
  return input.toUpperCase()
}

function trimString (input) {
  return input.trim()
}

module.exports = {
  arrayMapperCreator,
  parserCreator,
  removeDiacritics,
  removeNumbers,
  removePluralCharacter,
  removeSpecialCharacters,
  reverseArray,
  splitString,
  stringToUppercase,
  trimString
}