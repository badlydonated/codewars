// Write a function that takes an array of numbers (integers for the tests) and a target number. 
// It should find two different items in the array that, when added together, give the target value. 
// The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

// The input will always be valid (numbers will be an array of length 2 or greater, 
//     and all of the items will be numbers; target will always be the sum of two different items from that array).

//twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]
//twoSum([3, 2, 4], 6) // returns [1, 2] or [2, 1]

//my attempt
//P: take in an array of numbers and a target number
//R: return the position numbers from the array that identify
    //the numbers which added together equal the target number
//E: see above
//P: loop through the array to see which numbers equal the target. 
//how to pull out array positions of the two correct numbers. 
//

function twoSum(numbers, target) {
    let result = numbers.filter((number) => {
        if(number + number == target){
            return numbers.indexOf(number)
        }
    })
    return result
}

console.log(twoSum([1,2,3],4))

//codewars solutions
function twoSum(numbers, target) {
    for (let i = 0; i < numbers.length-1; i++) {
        for (let j = i+1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) return [i, j];
        }
    }
}

//-------------------
function twoSum(numbers, target) {
    let seen = new Map();
    for (let i = 0; i < numbers.length; i++) {
      let x = numbers[i], y = target - x;
      if (seen.has(y))
        return [seen.get(y), i];
      seen.set(x, i);
    }
  }
