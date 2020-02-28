function isAnagram(string){
    const stringArray = string.toLowerCase().split('')
    if(stringArray.length === 1){
        return true
    } else if(stringArray[0] === stringArray[stringArray.length -1]){
        const newString = stringArray.slice(1, string.length-1).join('')
        return isAnagram(newString)
    } else {
        return false
    }
}

console.log(isAnagram('tacocat'))
console.log(isAnagram("Dermatoglyphics"))
console.log(isAnagram("aba"))
console.log(isAnagram("moOse"))