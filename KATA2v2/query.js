function query (input) {
  const self = {}

  self.log = () => {
    console.log(input)
    return this
  }

  self.removeDiacritics = () => query(input.normalize('NFD').replace(/[\u0300-\u036f]/gi, ''))

  self.removeNumbers = () => query(input.replace(/[0-9]/gi, ''))

  self.removePluralCharacter = (character) => {
    return query(
      input
        .split(' ')
        .map(word => {
          const lastIndex = word.length - 1
          return word[lastIndex] === character ? word.substring(0, lastIndex) : word
        })
        .join(' ')
    )
  }

  self.removeSpecialCharacters = () => query(input.replace(/[&\/\\#,+\-()$~%.'":*<>{}]/gi, ''))

  self.trim = () => query(input.trim())

  self.toArray = (separator = ' ') => input.split(separator)

  self.toString = () => input

  self.toWords = () => input.split(' ')

  self.toUpperCase = () => query(input.toUpperCase())

  return self
}

module.exports = query