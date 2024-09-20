// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

// My attempt
function findAverage(array) {
    if(array.length === 0){
        return 0
    } else {
    let total = array.reduce((acc, cv)=>{
        return acc + cv
    })
    return total / array.length
    } 
}

console.log(findAverage([1,1,1])) //, 1);
console.log(findAverage([1,2,3])) //, 2);
console.log(findAverage([1,2,3,4])) //, 2.5);
console.log(findAverage([])) //, 2.5);

// Codewars solutions
var find_average = (array) => {  
    return array.length === 0 ? 0 : array.reduce((acc, ind)=> acc + ind, 0)/array.length
  }

// ----------------------------
function find_average(arr) {
    return arr.length > 0? arr.reduce((a, b) => a + b) / arr.length : 0;
}