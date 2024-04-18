// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.

//My attempt
//P: all values are integers. do not mutate array.
//R: return a new array containing the additive inverse of each element from the original array 
//E: see above
//P: take in an array. loop through each element. check for pos or neg. if pos, convert to neg. add element to new array. if neg, convert to pos. add element to new array.


function invert(array) {
   newArr = array.map(element => element * -1)
   return newArr 
}
console.log(invert([1,2,3,4,5]))

//codewars solutions
const invert = array => array.map(num => -num);

//---------------------------------
function invert(array) {
    return array.map( x => x === 0 ? x : -x);
 }

