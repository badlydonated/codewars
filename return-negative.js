// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// Examples
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12
// Notes
// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

// My attempt
// take in a number. could be floats.
// return the negative if number is pos. return same number if it's already neg. return 0 if 0.
// example makeNegative(-5) returns -5 since it's already neg

function makeNegative(num){return num <=0 ? num : num * -1}

console.log(makeNegative(42), -42)


// Codewars solutions
function makeNegative(num) {
    return -Math.abs(num);
  }