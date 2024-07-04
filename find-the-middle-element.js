// As a part of this Kata, you need to create a function that when provided with a triplet, 
// returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers (Haskell: a tuple).

// For example:

// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

// Another example (just to make sure it is clear):

// gimme([5, 10, 14]) => 1
// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

//my attempt
//P: take in an array of 3 numbers
//R: return the array index of the number that falls in between the other two numbers
//E: see above
//P: a loop that runs through the 3 numbers and compares if one is bigger or smaller than the others
//until the middle value is found.

function gimme (triplet) {
    let sortedNums = [...triplet].sort((a, b) => a - b)
    let middle = triplet.filter((num) => num == sortedNums[1])
    let index = triplet.findIndex(x => x == middle[0])
    return index 
}    



console.log(gimme([5,10,14])) //answer is 10 so return 1
console.log(gimme([1,2,3])) //answer is 2 so return 1
console.log(gimme([2, 3, 1])) //, 0);
console.log(gimme([2.1, 3.2, 1.4])) //, 0);
console.log(gimme([5.9, 10.4, 14.2])) //, 1)
console.log(gimme([-2, -3, -1])) //, 0);
console.log(gimme([-5, -10, -14])) //, 1)
console.log(gimme([-2, -3, -1])) //, 0);
console.log(gimme([-5, -10, -14])) //, 1)
console.log(gimme([-2, -3.2, 1])) //, 0);
console.log(gimme([-5.2, -10.6, 14])) //, 0)

//codewars solutions
function gimme(a) {
    return a.indexOf(a.concat().sort(function(a, b) { return a - b })[1])
  }

//---------------------
const gimme = function (arr) {
    return arr.indexOf([...arr].sort((x, y) => x > y)[1]);
  };


