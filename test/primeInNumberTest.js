const primeFactors = require('../primeInNumbers')
const chai = require('chai')
const assert = chai.assert
const should = chai.should

describe('prime numbers function', () => {
    it('returns a string', () => {
        assert.typeOf(primeFactors(1), 'string')
    })
    it('evaluates simple', () => {
        assert.equal(primeFactors(10), '(2)(5)')
    })
    it('evaluates prime decomposition', () => {
        assert.equal(primeFactors(7775460), '(2**2)(3**3)(5)(7)(11**2)(17)')
    })
})
