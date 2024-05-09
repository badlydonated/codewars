// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 .

//my attempt
//P: takes in an array of numbers
//R: returns the square of each number and then the sum of the results
//E: see above
//P: loop through each number and get its square, loop through again to add results

function squareSum(numbers){
    let sqrd = numbers.map((n) =>{
        return Math.pow(n, 2)
    })
    return sqrd.reduce((ac,cv)=>ac + cv,0)
}
console.log(squareSum([0,3,4,5]))



//codewars solutions
function squareSum(numbers){
    return numbers.reduce(function(sum, n){
      return (n*n) + sum;
    }, 0)
  }

//-----------------------------  
function squareSum(numbers){
    return numbers.reduce((sum,num) => sum + (num * num), 0);
  }

//-----------------------------
function squareSum(numbers){
    var sum = 0;
    numbers.forEach(function(n) {
      sum += n * n
    });
    return sum;
  }