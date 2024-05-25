// Given an array of integers, find the one that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

//my attempt
//P: take in an array of integers. 
//R: return the integer that appears an odd number of times
//E: see above
//P: if only one int in the array, return that int. 
    //
    
function findOdd(A) {
    let counts = {}
    if(A.length == 1){
        return A[0]
    }
    for(let i = 0; i < A.length; i++){ 
        if (counts[A[i]]){
        counts[A[i]] += 1
        } else {
        counts[A[i]] = 1
        }
    }  
       for (let prop in counts){
           if (counts[prop] % 2 === 1){
               return Number(prop)
           }
       }
}

console.log(findOdd([7])) //7
console.log(findOdd([0])) //0
console.log(findOdd([1,1,2])) //2
console.log(findOdd([0,1,0,1,0])) //0
console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1])) //4
console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5])) //5
console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5])) //-1
console.log(findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5])) //5
console.log(findOdd([10])) //10
console.log(findOdd([1,1,1,1,1,1,10,1,1,1,1])) //10
console.log(findOdd([5,4,3,2,1,5,4,3,2,10,10])) //1

//codewars solutions
const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

//---------------------------
function findOdd(A) {
    for(var i = 0; i < A.length; i++){  
      //Query the number of times that this 'i' element appears
      //then verify if that number of times is odd. If it is true, then return
      //that 'i' element
      if((A.filter(function(item){return item == A[i]; })).length % 2 != 0){
        return A[i];
      }
    }
    return 0;
  }