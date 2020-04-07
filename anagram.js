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

function refactorAnagram(string){

}

const normalizeString = (string) => {
    string.toLowerCase().split('')
}


module.exports = {
    isAnagram,
    refactorAnagram,
}
