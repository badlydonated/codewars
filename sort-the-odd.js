// Task
// You will be given an array of numbers. 
// You have to sort the odd numbers in ascending order 
// while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
//my attempt
//P: take in an array of numbers
//R: return an array that sorts
    //any odd numbers in ascending order
    //while leaving even numbers in place. 
//E: see above
//P: 

function sortArray(array) {
    let oddsArr = array.filter(x => x % 2).sort((a, b) => a - b) //the callback function for
                                                                //the filter method is x % 2
                                                                //if the result is 1 (odd), it
                                                                //is considered 'truthy' and added 
                                                                //to filtered array. If the result is
                                                                //0, it is considered to be 'falsey' 
                                                                //and ignored. 
    return array.map(x => x % 2 ? oddsArr.shift() : x)
  }

  console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]))

  //codewars solutions
  function sortArray(array) {
    const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
    return array.map((x) => x % 2 ? odd.shift() : x);
  }

  //---------------------------------
  function sortArray(array) {
    var odds = [];
    //loop, if it's odd, push to odds array
    for (var i = 0; i < array.length; ++i) {
      if (array[i]%2 !== 0) {
        odds.push(array[i]);
      }
    }
    //sort odds from smallest to largest
    odds.sort(function(a,b){
      return a-b;
    });
    
    //loop through array, replace any odd values with sorted odd values
    for (var j = 0; j < array.length; ++j) {
      if (array[j]%2 !== 0) {
        array[j] = odds.shift();
      }
    }
    
   return array;
  }