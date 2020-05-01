function countingValleys(n, s) {
    let elevation = 0

    return s.split('').reduce((valleys, step) => {
        elevation === 0 && step === 'D'
            ? valleys += 1 
            : null 

        step === 'U'
            ? elevation += 1
            : elevation -= 1
        return valleys 
    }, 0)
}


console.log(countingValleys(8, 'UDDDUDUU'))
