const { add, padNumber }= require('../bigAddition')
const { assert } = require('chai')

describe('Add two numbers', function(){
    const dataModel = [
        {
            number1: '1',
            number2: '1',
            sum: '2'
        },
        {
            number1: '123',
            number2: '456',
            sum: '579',
        },
        {
            number1: '888',
            number2: '222',
            sum: '1110',
        },
        {
            number1: '1372',
            number2: '69',
            sum: '1441',
        },
        {
            number1: '12',
            number2: '456',
            sum: '468',
        },
        {
            number1: '101',
            number2: '100',
            sum: '201',
        },
        {
            number1: '63829983432984289347293874',
            number2: '90938498237058927340892374089',
            sum: '91002328220491911630239667963',
        }]

    dataModel.forEach(test => {
        const {number1, number2, sum} = test
        it.skip(`should pass basic tests ${number1} + ${number2}`, () => {
            assert.equal(add(number1, number2), sum)
        })
    })
    it('test pad number', () => {
        assert.equal(padNumber(100, 1), [100, 001])
    })
})
