// Write a function that doubles every second integer in a list, starting from the left.

// Example:

// For input array/list :

// [1,2,3,4]
// the function should return :

// [1,4,3,8]

// My attempt
function doubleEveryOther(a) {
    let result = a.map(function(el, ind){
        if (ind % 2 === 0){
           return (el)
        } else return (el * 2)
    })
    return result
}


console.log(( doubleEveryOther([1,2,3,4]))) // [1,4,3,8]
console.log(( doubleEveryOther([1,19,6,2,12,-3]))) // [1,38,6,12,-6]
console.log(( doubleEveryOther([-2]))) // [-2]

// Codewars solutions
const doubleEveryOther = (a) => a.map((c,i) => i % 2 == 0 ? c : 2 * c);

//-----------------------------
function doubleEveryOther(a) {
    for(let i = 1; i < a.length; i += 2) {
      a[i] *= 2;
    }
    return a;
  }
