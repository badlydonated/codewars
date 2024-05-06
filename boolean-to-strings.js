// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

//my attempt
//P: take in boolean value
//R: return 'Yes' for true, and 'No' for false
//E: see above
//P: if true return 'yes', if false return 'no'

const boolToWord = ( bool ) => bool ? "Yes" : "No"

console.log(boolToWord(false))
console.log(boolToWord(true))

//codewars solutions
function boolToWord( bool ){
    if (bool) {
      return 'Yes';
    } else {
      return 'No';
    }
  }