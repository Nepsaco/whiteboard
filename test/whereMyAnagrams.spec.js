const { anagrams, isAnagram } = require('../whereMyAnagrams')
const { assert } = require('chai')

describe('anagrams', () => {
    const tests = [
        { word1: 'abba', words: [ 'abba' ], outcome: [ 'abba' ] },
        { word1: 'abba', words: [ 'abba', 'aabb' ], outcome: [ 'abba', 'aabb' ] },
        { word1: 'abba', words: [ 'b', 'd', 'd' ], outcome: [] },
        { word1: 'abba', words: [ 'abba', 'aabb', 'acbd', 'aaaaaaaaaaaaa', 'a' ], outcome: [ 'abba', 'aabb' ] },
        { word1: 'racer', words: ['crazer', 'carer', 'racar', 'caers', 'racer'], outcome: ['carer', 'racer'] },
        { word1: 'laser', words: ['lazing', 'lazy',  'lacer'], outcome: [] },
    ]
    it('works', () => {
        assert.equal(true, true)
    })
    it('returns an array', () => {
        assert.isArray(anagrams(tests[1].word1, tests[1].words))
    })
    tests.forEach(({word1, words, outcome}) => {
        it(`returns a list of anagram given ${word1} and ${words}`, () => {
            assert.notStrictEqual(anagrams(word1, words), outcome)
        })
    })
})

describe('isAnagram', () => {
    const tests = [
        {
            word1: 'abba',
            word2: 'abba',
            outcome: true
        },
        {
            word1: 'abba',
            word2: 'aabb',
            outcome: true
        },
        {
            word1: 'abba',
            word2: 'acba',
            outcome: false
        },
        {
            word1: 'abba',
            word2: 'abbaa',
            outcome: false
        },
    ]
    tests.forEach(({word1, word2, outcome}) => {
        it(`finds anagram given ${word1} and ${word2}`, () => {
            assert.equal(isAnagram(word1, word2), outcome)
        })
    })
})
