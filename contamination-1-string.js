// An AI has infected a text with a character!!

// This text is now fully mutated to this character.

// Starting with the original text, and given a character, return the text once it has been mutated so that all of the characters in the original text have been replaced with the character.

// If the text or the character are empty, return an empty string.
// There will never be a case when both are empty as nothing is going on!!

// Note: The character is a string of length 1 or an empty string.

// Example
// text before = "abc"
// character   = "z"
// text after  = "zzz"

// My attempt
// P: take in a string and a character
// R: return a new string replacing all the characters from the original string with the given character
// E: ("abc", "z") becomes "zzz"
// P: 

function contamination(text, char){
   for(let i = 0; i < text.length; i++){
    return text.replaceAll(text[i], char)
   }
}


console.log(contamination("abc","z")) // , "zzz")
console.log(contamination("","z")) // , "")
console.log(contamination("abc","")) // , "")
console.log(contamination("_3ebzgh4","&")) // , "&&&&&&&&")
console.log(contamination("//case"," ")) // , "      ")

// Codewars solutions
function contamination(text, char){
    return char.repeat(text.length)
  }

// ---------------------------------  
function contamination(text, char) {
    return text.split("").fill(char).join("");
  }

 