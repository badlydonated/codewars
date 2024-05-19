// In this kata you are required to, given a string, 
// replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

//my attempt
//P: take in a string
//R: return a new string with each letter replaced by its 
    //numbered position in the alphabet
//E: see above
//P: 26 variables or cases or properties or if elses?

function alphabetPosition(text) {
    text = text.toLowerCase()
    let alphaNum = ''
    for (let i = 0; i < text.length; i++){
        if (text[i] < 'A' || text[i] > 'Z' && text[i] < 'a' || text[i] > 'z') { 
            text = text.substring(0, i) + text.substring(i + 1);
            i--;
        }
    }
    let splitChar = text.split('')
    for(let i = 0; i < splitChar.length; i++){
        alphaNum += splitChar[i].charCodeAt(0)-96 + ' '
        
    }
    return alphaNum.substring(0, alphaNum.length - 1)
  }

console.log(alphabetPosition("The sunset sets at twelve o' clock."))

//codewars solutions
function alphabetPosition(text) {
    var result = "";
    for (var i = 0; i < text.length; i++){
      var code = text.toUpperCase().charCodeAt(i)
      if (code > 64 && code < 91) result += (code - 64) + " ";
    }
  
    return result.slice(0, result.length-1);
  }

//---------------------------
function alphabetPosition(text) {
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    return text.toLowerCase().split('')
    .filter( letter => {
      let index = alphabet.indexOf(letter);
      return index > -1;
    }  )
    .map( letter => alphabet.indexOf(letter) + 1 )
    .join(' ')
  }  