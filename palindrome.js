function isPalindrome(string){
    const stringArray = string.toLowerCase().split('')
    if(stringArray.length === 1){
        return true
    } else if(stringArray[0] === stringArray[stringArray.length -1]){
        const newString = stringArray.slice(1, string.length-1).join('')
        return isPalindrome(newString)
    } else {
        return false
    }
}

function refactorPalindrome(string){

}

const normalizeString = (string) => {
    string.toLowerCase().split('')
}


module.exports = {
    isPalindrome,
    refactorPalindrome,
}
