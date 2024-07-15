// Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?

// Examples:

// input:    output:
// 0    ->   0
// 2    ->   5
// 3    ->   5
// 12   ->   15
// 21   ->   25
// 30   ->   30
// -2   ->   0
// -5   ->   -5
// etc.
// Input may be any positive or negative integer (including 0).

// You can assume that all inputs are valid integers.

//my attempt
//P: take in an integer
//R: return the nearest next multiple of 5
//E: see above
//P: 

function roundToNext5(n){
    let divFive = n/5
    let result = Math.ceil(divFive) * 5
    if(result === -0){
        return result += 0
    } else return result
  }

  console.log(roundToNext5(0))

//codewars solutions
function roundToNext5(n){
    return Math.ceil(n/5)*5;
  }

//------------------------
function roundToNext5(n){
    while(n % 5 !== 0) n++;
    return n;
  }  