const wrap = require('./wordwrap')

describe('the word wrapper ', function(){
  it('wraps words', function(){
      expect(wrap('hola', 7)).toBe('hola');
      expect(wrap('mandarina', 4)).toBe('mand\narin\na');
      expect(wrap('hola mandarina', 6)).toBe('hola\nmandar\nina');
  })
})
