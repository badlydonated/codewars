// Your goal in this kata is to implement a difference function, 
// which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

//my attempt
//P: take in two arrays of numbers
//R: return the 'a' array having removed any values that
    //also appear in 'b' array
//E: see above
//P: 

function arrayDiff(a, b) {
    let difference = a.filter(x => !b.includes(x))
    return difference    
}

console.log(arrayDiff([1,2,2,2,3],[2]))

//codewars solutions
function array_diff(a, b) {
    return a.filter(function(x) { return b.indexOf(x) == -1; });
  }