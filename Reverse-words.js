// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

//My attempt
function reverseWords(str) {
     let revOne =  str.split(' ').reverse().join(' ')
     let revTwo = revOne.split('').reverse().join('')
     return revTwo
  }
console.log(reverseWords('This is an example!'))

//Codewars solutions
function reverseWords(str) {
    return str.split(' ').map(function(word){
      return word.split('').reverse().join('');
    }).join(' ');
  }

//----------------------
function reverseWords(str) {
    // Go for it
    //split words into seperate arrays
    return str.split("").reverse().join("").split(" ").reverse().join(" ");
  }  

//-----------------------
function reverseWords(str) {
    return str.split(' ').map( str => str.split('').reverse().join('') ).join(' ');
  }  