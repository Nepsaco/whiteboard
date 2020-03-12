// ROT13 is a simple letter substitution cipher that replaces a letter with the
// letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13.
// If there are numbers or special characters included in the string,
// they should be returned as they are. Only letters from the latin/english alphabet should be shifted,
// like in the original Rot13 "implementation".

function rot13(message){
    characters = 'abcdefghijklmnopqrstuvwxyz'
    
    return message.split('').map(letter => {
        characterIndex = characters.indexOf(letter)
        if(characters.includes(letter) ) {
            return characterIndex + 13 >= 26
                ? characters[characterIndex + 13 - 26]
                : characters[characterIndex + 13]
        } else if(characters.includes(letter.toLowerCase())) {
            newCharacterIndex = characters.indexOf(letter.toLowerCase())
            return newCharacterIndex + 13 >= 26
                ? characters[newCharacterIndex + 13 - 26].toUpperCase()
                : characters[newCharacterIndex + 13].toUpperCase()
        } else {
            return letter
        }
    }).join('')
}

function rot13regEx(message){
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    const charactersMoved = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'
    return message.replace(/[a-z]/gi, character => charactersMoved[characters.indexOf(character)])
}

console.log(rot13regEx('d1szn'))
