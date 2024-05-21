// In this simple exercise, you will create a program that will take two lists of integers, 
// a and b. Each list will consist of 3 positive integers above 0, 
// representing the dimensions of cuboids a and b. 
// You must find the difference of the cuboids' volumes regardless of which is bigger.

// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), 
// the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

// Your function will be tested with pre-made examples as well as random ones.

// If you can, try writing it in one line of code.
//my attempt
//P: take in two arrays of int. containing 3 pos int greater than 0. 
//R: return difference of two volumes of cubes
//E: see above
//P: multiply each number inside each array, then return the difference between the two. 
    //

function findDifference(a, b) {
    let result 
    let volA = a.reduce((acc, cv) =>{
        return acc * cv
    })
    let volB = b.reduce((acc,cv) =>{
        return acc * cv
    })
    if(volA > volB){
        return volA - volB
    }else return volB - volA
  }

  //function findDifference(a, b){return (a.reduce((acc,cv)=>acc*cv))-(b.reduce((acc,cv)=>acc*cv))}
  //needed to wrap Math.abs() around return expression to handle the negatives
  console.log(findDifference([3, 2, 5], [1, 4, 4]))
  console.log(findDifference([9, 7, 2], [5, 2, 2]))
  console.log(findDifference([11, 8, 5], [17, 2, 27]))
  console.log(findDifference([4, 4, 7], [3, 9, 3]))
  console.log(findDifference([15, 20, 25], [10, 30, 25]))

  //codewars solutions
  function find_difference(a, b) {
    return Math.abs(a.reduce((previous, current) => previous * current) - b.reduce((previous, current) => previous * current));
  }

//----------------------------
function find_difference(a, b) {
    return Math.abs(a[0]*a[1]*a[2]-b[0]*b[1]*b[2]);
  }