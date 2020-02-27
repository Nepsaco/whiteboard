// Given an array, find the integer that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

function findOddRecurring(array){
    if(array.length === 0) {
        return false
    } else if (array.length === 1){
        return array[0]
    } else {
        const numberOccurances = array.sort().filter(number => {
            if(number === array[0]){
                return true
            }
        }).length

        if(numberOccurances % 2 === 0){
            return findOddRecurring(array.slice(numberOccurances))
        } else {
            return array[0]
        }

    }
}

console.log(findOddRecurring([20,1,1,2,2,3,3,5,5,4,20,4,5]))
