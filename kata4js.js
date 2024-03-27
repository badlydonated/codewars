// Sum Numbers
//Write a function that takes an array of numbers and returns the sum of the numbers. 
//The numbers can be negative or non-integer. 
//If the array does not contain any numbers then you should return 0.

function sum (numbers) {
    "use strict";
   if(numbers == []){
    return 0
} else{
    return numbers.reduce((total, amount) => total + amount, 0)
} 
};



//top codewars solutions
function sumTwo(numbers) {
    return numbers.reduce((a, b) => a + b, 0);
  } //I guess I didn't need the if/else statement since this apparently will return a 0 for an empty array.

console.log(sumTwo([]))