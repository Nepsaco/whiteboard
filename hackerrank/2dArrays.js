const array = [
    [ 0, -4, -6, 0, -7, -6, ],
    [ -1, -2, -6, -8, -3, -1, ],
    [ -8, -4, -2, -8, -8, -6, ],
    [ -3, -1, -2, -5, -7, -4, ],
    [ -3, -5, -3, -6, -6, -6, ],
    [ -3, -6, 0, -8, -6, -7, ],
]

function hourglassSum(array){
    return array.reduce((highestHourglass, row, currentIndex) => {
        let hourglass
        const currentHourglass = row.reduce((highRowHourglass, number, currentRowIndex) => {
            if(array[currentIndex + 2] && (array[currentIndex][currentRowIndex + 2] || array[currentIndex][currentRowIndex + 2] === 0)){
                hourglass = array[currentIndex][currentRowIndex] + array[currentIndex][currentRowIndex + 1] + array[currentIndex][currentRowIndex + 2] + array[currentIndex + 1][currentRowIndex + 1] + array[currentIndex + 2][currentRowIndex] + array[currentIndex + 2][currentRowIndex + 1] + array[currentIndex + 2][currentRowIndex + 2] 
            } 
            if(hourglass > highRowHourglass){
                return highRowHourglass = hourglass
            } else {
                return highRowHourglass
            }
        }, -1000)

        if(currentHourglass > highestHourglass){
            return highestHourglass = currentHourglass
        } else {
            return highestHourglass
        }
    }, -1000)
}

// hourglassSum(array)
console.log(hourglassSum(array))
