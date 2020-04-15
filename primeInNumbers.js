// Given a positive number n > 1 find the prime factor decomposition of n. 
// The result will be a string with the following form :
// "(p1**n1)(p2**n2)...(pk**nk)"
// with the p(i) in increasing order and n(i) empty if n(i) is 1.
// Example: n = 86240 should return "(2**5)(5)(7**2)(11)"


function primeFactors(number){
    let factorsString = ''
    for(let prime = 2; prime <= number ; prime++){
        let count = 0
        while(number % prime === 0){ 
            count++
            number /= prime
        }
        factorsString += count ? (count > 1 ? `(${prime}**${count})` : `(${prime})`): ''
    }
    return factorsString
}

console.log(primeFactors(86240))

module.exports = primeFactors
