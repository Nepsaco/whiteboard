// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

function sumMix(array){
    return array.reduce(sum, 0)
}

function sum(total, number){
    return parseInt(total) + parseInt(number)
}

console.log(sumMix([9,'3', 2, '3']))
