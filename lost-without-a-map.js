// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

//my attempt
function maps(x){
    return x.map((el)=>{return el*2})
}

console.log(maps([1, 2, 3])) //, [2, 4, 6]);
console.log(maps([4, 1, 1, 1, 4])) //, [8, 2, 2, 2, 8]); 
console.log(maps([2, 2, 2, 2, 2, 2])) //, [4, 4, 4, 4, 4, 4]);

//codewars solutions
function maps(x){
    return x.map(n => n * 2);
  }

//-----------------------
maps = x => x.map(e => e * 2);

//----------------------
const maps = arr => arr.map( x => x * 2 )