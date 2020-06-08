const { score, findTripples } = require('../greedIsGood')
const { assert } = require('chai')

describe('score', () => {
    it('returns a integer', () => {
        assert.typeOf(score(), 'number')
    })
    it('if dice equals all 1sthen should equal', () => {
        const dice = [1,1,1,1,1]
        assert.equal(score(dice), 1200)
    })
    it('if dice equals 2s then should equal', () => {
        const dice = [2,2,2,2,2]
        assert.equal(score(dice), 200)
    })
})

describe('findTripples', ()=> {
    it('given all 1s return 1 tripple', () => {
        assert.equal(findTripples(dice), { 1: 1 })
    })
})
