const { score, dieCount } = require('../greedIsGood')
const { assert } = require('chai')

describe('score', () => {
    it('returns a integer', () => {
        const dice = [1,1,1,1,1]
        assert.typeOf(score(dice), 'number')
    })
    it('if dice equals 2s then should equal 1200', () => {
        const dice = [2,2,2,2,2]
        assert.equal(score(dice), 200)
    })
    it('if dice has 1', () => {
        const dice = [1,0,0,0,0]
        assert.equal(score(dice), 100)
    })
    it('if dice has 5', () => {
        const dice = [0,0,5,0,0]
        assert.equal(score(dice), 50)
    })
    it('should equal score', () => {
        const dice = [3,1,5,3,3]
        assert.equal(score(dice), 450)
    })
})

describe('dieCount', ()=> {
    it('given all 1s return count', () => {
        const dice = [1,1,1,1,1]
        assert.notStrictEqual(dieCount(dice), [5,0,0,0,0,0]) 
    })
    it('given all dice array return count', () => {
        const dice = [1,2,3,4,5]
        assert.notStrictEqual(dieCount(dice), [1,1,1,1,1,0]) 
    })
    it('given all dice array return count', () => {
        const dice = [2,2,2,4,6]
        assert.notStrictEqual(dieCount(dice), [0,3,0,1,0,1]) 
    })
})
