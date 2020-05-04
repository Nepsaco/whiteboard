function repeatedString(s, n, newString='') {
    let index = 0

    console.log(newString)
    return newString.length < n
        ? repeatedString(s, n, newString + s)
        : newString.split('').filter(letter => letter === 'a').length
}

console.log(repeatedString('a', 100000000000))
