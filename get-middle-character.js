// You are going to be given a word. Your job is to return the middle character of the word. 
// If the word's length is odd, return the middle character. 
// If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"
// #Input

// A word (string) of length 0 < str < 1000 
// (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). 
// You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

// #Output

// The middle character(s) of the word represented as a string.

//my attempt
//P: take in a string (a word)
//R: return the middle character if the string length is odd
    //return the middle 2 characters if the string length is even
    //return a single character is the string length is 1
//E: see above
//P: split the string into an array? loop through the array. 
//using substring instead of array method. Using if else instead of loop.
//using modulus to determine if odd length else it's even

function getMiddle(s){
    let position
    let length

    if(s.length % 2 == 1) {
        position = s.length / 2;
        length = 1;
    } else {
        position = s.length / 2 - 1;
        length = 2;
    }
    return s.substring(position, position + length)
}

console.log(getMiddle('a'))

//codewars solutions
function getMiddle(s)
{
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}

//---------------------------
function getMiddle(s) {
    var middle = s.length / 2;
    return (s.length % 2) 
      ? s.charAt(Math.floor(middle))
      : s.slice(middle - 1, middle + 1);
  }

//----------------------------
function getMiddle(s)
{
  return s.slice((s.length-1)/2, s.length/2+1);
}  