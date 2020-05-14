const array = [
    // [1, 2, 3, 4],
    // [5, 6, 7, 8],
    // [9, 0, 1, 2],
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 9, 2, -4, -4, 0],
    [0, 0, 0, -2, 0, 0],
    [0, 0, -1, -2, -4, 0]
    // [0, 0, 2, 4, 4, 0],
    // [0, 0, 0, 2, 0, 0],
    // [0, 0, 1, 2, 4, 0]
]

function hourglassSum(array){
    return array.reduce((highestHourglass, row, currentIndex) => {
        let currentHourglass = row.reduce((highRowHourglass, number, currentRowIndex) => {
            console.log(row)
            let hourglass = 0
            if(array[currentIndex + 2] && array[currentIndex][currentRowIndex + 2]){
                hourglass = number + array[currentIndex][currentRowIndex + 1] + array[currentIndex][currentRowIndex + 2] + array[currentIndex + 1][currentRowIndex + 1] + array[currentIndex + 2][currentRowIndex] + array[currentIndex + 2][currentRowIndex + 1] + array[currentIndex + 2][currentRowIndex + 2] 
            }

            if(hourglass > highRowHourglass){
                return highRowHourglass = hourglass
            } else {
                return highRowHourglass
            }
        }, 0)

        if(currentHourglass > highestHourglass){
            return highestHourglass = currentHourglass
        } else {
            return highestHourglass
        }
    }, 0)
}

// hourglassSum(array)
console.log(hourglassSum(array))
