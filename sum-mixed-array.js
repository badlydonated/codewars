// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

//my attempt
function sumMix(x){
    let numArr = x.map(Number)
    return numArr.reduce((acc, cv) => acc + cv)
}

console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7])) //

//codewars solutions
function sumMix(x){
    return x.map(a => +a).reduce((a, b) => a + b);
  }

//-------------------------
function sumMix(x){
    let result = 0;
    for (let n of x) {
      result += parseInt(n);
    }
    return result;
  }  