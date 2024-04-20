// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

//My attempt
//P: taking in a string
//R: return two words from a camelCase string
//E: see above
//P: identify if string is camelCase.
    //loop through each character
    //if it is, seperate the string between the last lower-case letter
    //and the first capital letter using a space.

function solution(string) {
    for(let i = 0; i < string.length; i++){
        if(string[i] == string[i].toUpperCase){
           return string
        }
    }
  }
console.log(solution('camelCase'))

//codewars solutions
function solution(string) {
    string = string.split('').map(function (el) {
      if (el === el.toUpperCase()) {
        el = ' ' + el
      }
      return el
    })
    return string.join('')
  }

//-------------------------------  
const solution = string => {
    return [...string].map((char) => {
      return (char === char.toUpperCase()) ? ` ${char}` : char;
    }).join('');
  }