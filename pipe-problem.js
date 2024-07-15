// Issue
// Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.

// The pipes connecting your level's stages together need to be fixed before you receive any more complaints.

// The pipes are correct when each pipe after the first is 1 more than the previous one.

// Task
// Given a list of unique numbers sorted in ascending order, 
// return a new list so that the values increment by 1 for each index from the minimum value 
// up to the maximum value (both included).

// Example
// Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8
 

//my attempt
function pipeFix(numbers){
    let arry1 = []
    for(let i = 1; i < numbers.length-1; i++){
        if(numbers[i] != numbers[i + 1]){
            arry1.push() = numbers[i + 1]
        }  
    }
    return arry1
}

console.log(pipeFix([6,9]))

//codewars solutions
function pipeFix(numbers){
    var first = numbers[0];
    var last = numbers[numbers.length-1];
    
    var arr = [];
    for(var i = first; i <= last; i++) {
      arr.push(i);
    }
    return arr;
  }

 //------------------------
 function pipeFix(numbers){
    var min = numbers[0];
    var max = numbers[numbers.length - 1];
    var array = [];
    
    for(var i = min; i<=max; i++)
    {
      array.push(i);
    }
    
    return array;
  } 