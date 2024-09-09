// Modify the spacify function so that it returns the given string with spaces inserted between each character.

// spacify("hello world") // returns "h e l l o   w o r l d"

// My attempt
let spacify = function (str){
    return str.split('').join(' ')
}
// probably should've used 'const'


console.log(spacify('hello world')) //,'h e l l o   w o r l d');
console.log(spacify('12345')) //,'1 2 3 4 5'); 

// Codewars solutions
const spacify = str => [...str].join(' ')

// This is what I was trying to do and make it an arrow function
const spacify = str => str.split('').join(' ');
