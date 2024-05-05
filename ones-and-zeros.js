// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

// Examples:

// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11
// However, the arrays can have varying lengths, not just limited to 4.

//my attempt
//P: take in an array of 1s and 0s 
//R: return the binary value as an integer
//E: see above
//P: loop through the array to perform conversion of each digit
//array length is 2 then 2 to the first power plus element


const binaryArrayToNumber = arr => {
   let bin =  arr.join('').toString()
   let binVal = parseInt(bin, 2)
   return binVal
  };


console.log(binaryArrayToNumber([1, 0, 1, 1]))
//codewars solutions
const binaryArrayToNumber = arr => parseInt(arr.join(''), 2);

//--------------------------------------------
const binaryArrayToNumber = arr => {
    return parseInt(arr.join(""), 2)
  };