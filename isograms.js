// An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
// Implement a function that determines whether a string that contains only letters is an isogram. 
// Assume the empty string is an isogram. Ignore letter case.

function isIsogram(string){
    const newArray = string.toLowerCase().split('')
    const comparisonLetter = newArray.shift()
    if(newArray.length === 1 || newArray.length === 0){
        return true
    } else if(newArray.includes(comparisonLetter)){
        return false
    } else {
        return isIsogram(newArray.join('')) 
    }
}

console.log(isIsogram('tacocat'))
console.log(isIsogram("Dermatoglyphics"))
console.log(isIsogram("aba"))
console.log(isIsogram("moOse"))
