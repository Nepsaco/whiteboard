const bouncingBalls = require('../bouncingBalls')
const chai = require('chai')
const assert = chai.assert

describe('tests', () => {
    it('sees ball once', () => {
        assert.equal(bouncingBalls(3.0, 0.5,2),1)
    })
    it('sees ball 3 times', () => {
        assert.equal(bouncingBalls(3, 0.66, 1.5), 3)
    })
    it('sees ball more than 3 times', () => {
        assert.equal(bouncingBalls(30.0, 0.66,1.5), 15)
    })
})
