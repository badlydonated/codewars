// Challenge:

// Given a two-dimensional array of integers, return the flattened version of the array 
// with all the integers in the sorted (ascending) order.

// Example:

// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].



function flattenAndSort(array) {
    function compareNumbers(a, b) {
        return a - b;
      }
    return array.flat().sort(compareNumbers)
  }

console.log(flattenAndSort([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]))  
console.log(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]]))


// Codewars solutions

function flattenAndSort(array) {
    return [].concat(...array).sort((a,b) => a - b);
  }

// ---------------------------------

const flattenAndSort = (array) => array.flat().sort((a, b) => a-b)

//-----------------------------------

function flattenAndSort(array) {
    let newArray = [];
    for(let i =0;i<array.length;i++)
    {
      for(let j=0;j<array[i].length;j++)
      {
        newArray.push(array[i][j]);
      }
    }
      
    return newArray.sort((a,b) =>  a-b);
  }
