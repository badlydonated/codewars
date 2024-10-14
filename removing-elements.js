// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// My attempt
// P: take in an array
// R: return an array with every second element removed
// E: see above
// P: create result array. loop through given array and push odd index items to array

function removeEveryOther(arr){
    let result = []
    if(arr.length <= 1){
        return arr
    }else for(let i = 0; i < arr.length; i += 2){
                result.push(arr[i])
            } return result        
}



console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again'])) // ,['Hello', 'Hello Again']);
console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) // ,[1, 3, 5, 7, 9]);
console.log(removeEveryOther([[1, 2]])) // , [[1, 2]]);
console.log(removeEveryOther([['Goodbye'], {'Great': 'Job'}])) // ,[['Goodbye']])

// Codewars solutions
function removeEveryOther(arr){
    return arr.filter(function(elem, index) {
      return index % 2 === 0;
    });
  }

// -----------------------  
function removeEveryOther(arr){
    var newArr=[];
  for (var i = 0; i < arr.length; i+=2){
    newArr.push(arr[i]);
    }
  return newArr;
  }

// -----------------------
const removeEveryOther = arr => arr.filter((_, i) => !(i % 2));  