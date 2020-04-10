const Palindrome = require('../palindrome')
const isPalindrome = Palindrome.isPalindrome
const refactorPalindrome = Palindrome.refactorPalindrome
const chai = require('chai')
const assert = chai.assert
const should = chai.should

describe('palindrome function', () => {
    it('returns a boolean', () => {
        assert.typeOf(isPalindrome('tobie'), 'boolean')
    })
    it('returns true if there is an palindrome', () => {
        assert.equal(true, isPalindrome('tacocat'))
    })
    it('returns false is there is not an palindrome', () => {
        assert.equal(false, isPalindrome('tobie'))
    })
    it('returns true for a single letter', () => {
        assert.equal(true, isPalindrome('a'))
    })
})
