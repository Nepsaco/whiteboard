function add(a, b) {
    const [longer, shorter] = padNumber(a, b)
    const [reversedLonger, reversedShorter] = reverseNumber(longer, shorter)

    let finalNumber = []
    let carries = 0
    for(let i = 0; i < reversedLonger.length; i++){
        let digit = parseInt(reversedLonger[i]) + parseInt(reversedShorter[i]) + carries

        if(digit >= 10){
            finalNumber.unshift(digit - 10)
            carries = 1
        } else{
            finalNumber.unshift(digit)
            carries = 0
        }
    }
    carries === 1 
        ? finalNumber.unshift(carries)
        : null

    return finalNumber.join('')
}


function reverseNumber(longer, shorter){
    let reversedLonger = longer.split('').reverse()
    let reversedShorter = shorter.split('').reverse()
    return [reversedLonger, reversedShorter]
}

function padNumber(a, b){
    let [ longer, shorter ] = longerNumber(a, b)
    let paddedNumber = []
    for(let i = 0; i < longer.split('').length; i++){
        if(shorter[i]) {
            paddedNumber.push(shorter[i])
        } else {
            paddedNumber.unshift('0')
        }
    }
    return [ longer, paddedNumber.join('') ]
}

function longerNumber(a, b){
    let longer = 0
    let shorter = 0
    if(a.length > b.length){
        longer = a
        shorter = b
    } else {
        longer = b
        shorter = a
    }
    return [ longer, shorter ]
}

module.exports = {
    add,
    padNumber
}

