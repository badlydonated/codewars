// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

//My attempt
function positiveSum(arr){
    let sum = 0
    arr.forEach((el) =>{
        if(el >= 0){
            sum += el
        }
    })
    return sum
}

console.log(positiveSum([1, -4, 7, 12]))

//codewars solutions
function positiveSum(arr) {
    var total = 0;    
    for (i = 0; i < arr.length; i++) {    // setup loop to go through array of given length
      if (arr[i] > 0) {                   // if arr[i] is greater than zero
        total += arr[i];                  // add arr[i] to total
      }
    }
    return total;                         // return total
  }

//---------------------------  
function positiveSum(arr) {
    return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
 }

//--------------------------
function positiveSum (arr) {
    return arr.filter(x => x >= 0).reduce((a, c) => a + c, 0);
  } 
