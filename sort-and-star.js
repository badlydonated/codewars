// You will be given a list of strings. 
// You must sort it alphabetically 
// (case-sensitive, and based on the ASCII values of the chars) 
// and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

//my attempt
function twoSort(s) {
    let sorted = s.sort()
    return sorted[0].split('').join('***')
}



console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"])) //'b***i***t***c***o***i***n'
console.log(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"])) //'a***r***e'

//codewars solutions
function twoSort(s) {
    return s.sort()[0].split('').join('***');
  }

//-------------------------
twoSort = s => s.sort()[0].split('').join('***')  