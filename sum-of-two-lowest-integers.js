// Create a function that returns the sum of the two lowest positive numbers 
// given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

//my attempt
//P: take in an array of pos nums. 
//R: return the sum of the two lowest value numbers in the array
//E: see above
//P: sort the numbers from lowest to highest and add the first two nums in the array

function sumTwoSmallestNumbers(numbers) {  
    let sorted = numbers.sort((a,b) => a-b)
    return sorted[0] + sorted[1]
  }

console.log(sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453]))
console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]))

//codewars solutions
function sumTwoSmallestNumbers(numbers) {  
    var [ a, b ] = numbers.sort((a, b) => a - b)
    return a + b
  }


