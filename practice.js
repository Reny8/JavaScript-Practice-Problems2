// REVERSE A STIRNG 

function reverse(word) {
    let splitString = word.split("")
    let reverse = splitString.reverse()
    let string = reverse.join("")
    return string
} 
let string = reverse('Hello')
console.log(string)

// CAPITALIZE LETTER 

function cap(sentence) {
    // const a variable that can not be redefined
    const words = sentence.split(" ");

    for ( let index = 0; index < words.length; index++ ) {
        words[index] = words[index][0].toUpperCase() + words[index].substring(1)
    }
    console.log(words.join(" "))
}
cap('hello and welcome to devcodecamp')

// COMPRESS A STRING OF CHARACTERS 

function compress(word) {
    let count = 0
    let splitString = word.split("");
    let wordLetters = word[0]
    let finalResult = ""
    for (let letter = 0;letter < splitString.length;letter++) {
        if ( splitString[letter] == wordLetters ) {
            count ++
        }
        else {
            num = count.toString()
            finalResult += num + wordLetters
            wordLetters = word[letter]
            count = 1
        }
    }
    num = count.toString()
    finalResult + num + wordLetters
    return finalResult    
}
words = compress("aaaaabbbbccccaaaaaabb ")
console.log(words)

//PALINDROME

function palindrome(word) {
    let backwards = reverse(word)
    if ( backwards == word ) {
        console.log(`${word} is a Palindrome!`)
    }
    else if ( backwards !== word) {
        console.log(`${word} is not a Palindrome`)
    }
}
palindrome("hello")
palindrome("madam")