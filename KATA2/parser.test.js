const Parser = require('./parser')
const castilianParser = require('./castilian-parser')
const xianParser = require('./xian-parser')

describe('the parser', () => {
  let parser

  beforeEach(() => {
    parser = new Parser()
  })

  it('throws an error when asked to parse an unsupported language', () => {
    expect(() => parser.parse('foobar', 'NO')).toThrow()
  })

  describe('for Castilian language', () => {
    beforeEach(() => {
      parser.register('ES', castilianParser)
    })

    it('parses correctly and mind blown', () => {
      const result = parser.parse('9 Holás CARäco*lax foo-bar 8!', 'ES')
      expect(result).toEqual(['HOLA', 'CARACOLAX', 'FOOBAR', '!'])
    })
  })

  describe('for Xian language', () => {
    beforeEach(() => {
      parser.register('XX', xianParser)
    })

    it('parses correctly and mind blown', () => {
      const result = parser.parse('9 Holás CARäco*lax foo-bar 8!', 'XX')
      expect(result).toEqual(['!', 'FOOBAR', 'CARÄCOLA', 'HOLÁS'])
    })
  })
})