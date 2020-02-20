// An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
// Implement a function that determines whether a string that contains only letters is an isogram. 
// Assume the empty string is an isogram. Ignore letter case.

function isIsogram(string){
    const stringArray = string.toLowerCase().split('')
    if(stringArray.length === 1){
        return true
    } else if(stringArray[0] === stringArray[stringArray.length -1]){
        const newString = stringArray.slice(1, string.length-1).join('')
        return isIsogram(newString)
    } else {
        return false
    }
}

console.log(isIsogram('tacocat'))
console.log(isIsogram("Dermatoglyphics"))
console.log(isIsogram("aba"))
console.log(isIsogram("moOse"))
