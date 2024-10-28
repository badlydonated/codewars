// Your task is to make two functions 
// ( max and min, or maximum and minimum, etc., depending on the language ) 
// that receive a list of integers as input, and return the largest and lowest number in that list, respectively. 
// Each function returns one number.

// Examples (Input -> Output)
// * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
// * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
// * [42, 54, 65, 87, 0]             -> min = 0, max = 87
// * [5]                             -> min = 5, max = 5

// Notes
// You may consider that there will not be any empty arrays/vectors.

// My attempt
// P: 
// R: 
// E: 
// P: 

const min = function(list){
    
    return Math.min(...list);
}

const max = function(list){
    
    return Math.max(...list);
}

console.log(min([-52, 56, 30, 29, -54, 0, -110])) //, -110);
console.log(min([42, 54, 65, 87, 0])) //, 0);
console.log(max([4,6,2,1,9,63,-134,566])) //, 566);
console.log(max([5])) //, 5);

// Codewars solutions
var mini = function(list){
    list.sort((a, b) => (a - b));
    return list[0];
}

var maxu = function(list){
    list.sort((a, b) => (b - a));
    return list[0];
}