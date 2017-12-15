function Parser () {
  const parsers = {}

  const parse = (input, languageCode) => {
    if (!parsers[languageCode]) {
      throw new Error(`Sorry! I don't have a parser for language ${languageCode}`)
    }
    return parsers[languageCode](input)
  }

  const register = (languageCode, parser) => {
    parsers[languageCode] = parser
  }

  return {
    parse,
    register
  }
}

module.exports = Parser