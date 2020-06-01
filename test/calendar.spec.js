const calendar = require('../calendar')
const { assert } = require('chai')
const events =[
    {startTime: 1, endTime: 50},
    {startTime: 5, endTime: 30},
    {startTime: 10, endtime: 100},
    {startTime: 4, endtime: 35},
    {startTime: 1, endtime: 100},
    {startTime: 400, endtime: 401},
]

describe('tests', () => {
    it('if there is only 1 event return true', () => {
        assert.equal(calendar([{startTime:1, endTime:4}]), true)
    })
    it('if there are no events return true', () => {
        assert.equal(calendar([]), true)
    })
    it('two events do not overlap return true', () => {
        assert.equal(calendar([{startTime:1, endTime:2},{startTime:3, endTime:4}]), true)
    })
    it('if event start time overlap return false', () => {
        assert.equal(calendar([{startTime:1, endTime:3},{startTime:2, endTime:4}]), false)
    })
    it('if event end time overlap return false', () => {
        assert.equal(calendar([{startTime:2, endTime:4},{startTime:1, endTime:3}]), false)
    })
    it('if an event is during another event return false', () => {
        assert.equal(calendar([{startTime:1, endTime:4},{startTime:2, endTime:3}]), false)
    })
    it('if an event start and end at the same time return false', () => {
        assert.equal(calendar([{startTime:1, endTime:4},{startTime:1, endTime:4}]), false)
    })
    it('checks if 3 events have overlap', () => {
        assert.equal(calendar([{startTime:1, endTime:2},{startTime:2, endTime:4},{startTime:3, endTime:5}]), false)
    })
    it('checks if 3 events dont have overlap', () => {
        assert.equal(calendar([{startTime:1, endTime:2},{startTime:2, endTime:3},{startTime:3, endTime:5}]), true)
    })
    it('checks if events have overlap', () => {
        assert.equal(calendar(events), false)
    })
})
