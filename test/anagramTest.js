const Anagram = require('../anagram')
const isAnagram = Anagram.isAnagram
const refactorAnagram = Anagram.refactorAnagram
const chai = require('chai')
const assert = chai.assert
const should = chai.should

describe('anagram function', () => {
    it('returns a boolean', () => {
        assert.typeOf(isAnagram('tobie'), 'boolean')
    })
    it('returns true if there is an anagram', () => {
        assert.equal(true, isAnagram('tacocat'))
    })
    it('returns false is there is not an anagram', () => {
        assert.equal(false, isAnagram('tobie'))
    })
})
