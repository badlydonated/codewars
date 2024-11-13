// A pangram is a sentence that contains every single letter of the alphabet at least once. 
// For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, 
// because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, 
// False if not. Ignore numbers and punctuation.

// take in a string. ignore numbers and punctuation.
// return true if pangram, false is not
// 

function isPangram(string){
    const alpha = "abcdefghijklmnopqrstuvwxyz";
    const lowerCase = string.toLowerCase();
    
    return alpha.split('').every(char => lowerCase.includes(char));
}


console.log(isPangram("The quick brown fox jumps over the lazy dog."), true)
console.log(isPangram("This is not a pangram."), false)

// Codewars solutions
function isPangram(string){
    string = string.toLowerCase();
    return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
      return string.indexOf(x) !== -1;
    });
  }

// -------------------------------------------
function isPangram(string){
    return 'abcdefghijklmnopqrstuvwxyz'
      .split('')
      .every((x) => string.toLowerCase().includes(x));
  }