// The main idea is to count all the occurring characters(UTF-8) in string. 
// If you have string like this aba then the result should be { 'a': 2, 'b': 1 }

// What if the string is empty ? Then the result should be empty object literal { }

function count(string, object={}){
    if(!string) {
        return object
    } else {
        const sortedCharArray = string.split('').sort()
        const occurances = sortedCharArray.filter(letter => sortedCharArray[0] === letter).length
        const newObject = Object.assign({[sortedCharArray[0]]: occurances}, {...object}) 
        const newSubstring = sortedCharArray.slice(occurances).join('')
        return count(newSubstring, newObject)
    }
}

console.log(count('faaabulosa'))
