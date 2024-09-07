// Write a program that outputs the top n elements from a list.

// Example:

// largest(2, [7,6,5,4,3,2,1])
// // => [6,7]

function largest(n, array) {
    let results = []
    let sorted = array.sort((a,b)=>a-b)
    return sorted.push([n])
}

console.log(2, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]) //, [9, 10]);
console.log(0, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]) //, []);
console.log(2, [-3, -2, -1, 0, -9, -8, -7, -6, -4, -5]) //, [-1, 0]);
console.log(3, [5, 1, 5, 2, 3, 1, 2, 3, 5]) //, [5, 5, 5]);
console.log(7, [9, 1, 50, 22, 3, 13, 2, 63, 5]) //, [3, 5, 9, 13, 22, 50, 63]);
console.log(0, [1, 2, 3, 4, 8, 7, 6, 5]) //, []);

// codewars solutions
function largest(n, array) {
    let result = []
    array.sort((a, b) => b - a);
    for ( let i = 0; i < n; i++) {
      result.unshift(array[i]);
    }
    return result;
  }

// -----------------------------
function largest(n,xs){
    return xs.sort(function(a, b) {return a - b;}).slice(xs.length-n);
  }
  
  