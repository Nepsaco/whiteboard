// function repeatedString(s, n) {
//     let string = ''

     
//     while (string.length < n){
//         string = string + s
//     }

//     return string
//         .split('')
//         .slice(0, n)
//         .filter(letter => letter === 'a')
//         .length
// }
function repeatedString(s, n) {
    const sRepeated = Math.floor(n / s.length)
    let count = (s.split('a').length - 1) * sRepeated
    let remainder = n % s.length

    for(let i = 0; i < remainder; i++){
        if(s.charAt(i) === 'a'){
            count++
        }
    }

    return count
}

console.log(repeatedString('aba', 10000000))
