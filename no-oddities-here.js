// Write a small function that returns the values of an array that are not odd.

// All values in the array will be integers. Return the good values in the order they are given.

//my attempt
function noOdds( values ){
    let evens = values.filter((value) => value % 2 == 0)
    return evens
}

console.log(noOdds([1,2,3,4,5,6,7,8,9]))

// codewars solutions
var noOdds = values => values.filter(x => x % 2 === 0);

//--------------------------
function noOdds( values ){
    function isEven(number){
      return number % 2 == 0;
    }
    
    return values.filter(isEven);
  }


