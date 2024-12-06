// What if we need the length of the words separated by a space to be added at the end of that same word 
// and have it returned as an array?

// Example(Input --> Output)

// "apple ban" --> ["apple 5", "ban 3"]
// "you will win" -->["you 3", "will 4", "win 3"]
// Your task is to write a function that takes a String and returns an 
// Array/list with the length of each word added to each element.

// Note: String will have at least one element; words will always be separated by a space.

// my attempt
// take in a string of words
// return an array containing each word as a seperate string including a number 
//    representing the length of the string
// example "apple ban" --> ["apple 5", "ban 3"]


function addLength(str){
    // make each word of the string its own string
    let wordsArr = str.split(' ')
    for(let i = 0; i < wordsArr.length; i++){
        wordsArr[i] = wordsArr[i] + ' ' + wordsArr.length
    }
    // then find the length of each new string
    // return the separated strings and number representing its length in an array
    return wordsArr
}

console.log(addLength('you will win')) //,["you 3", "will 4", "win 3"])

// Codewars solutions
function addLength(str){
    return str.split(" ").map(s => `${s} ${s.length}`)
  }

// ---------------------------
var addLength = s => s.split(' ').map(x => x + ' ' + x.length);