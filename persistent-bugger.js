// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, 
// which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit, there are 3 multiplications)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2, there are 4 multiplications)
// 4 --> 0 (because 4 is already a one-digit number, there is no multiplication)

// My attempt
// P: a positive number param
// R: return a single digit number that is the result of multiplying 2 digit numbers together until only a single digit remains
// E: 234 = 2*3*4 = 24 = 2*4 = 8, there are 2 multiplications
// P: turn the number into a string
//    split the string into separate 'characters'
//    loop over the array until result of one digit

function persistence(num) {
    let strNum = num.toString().split('')
    let result = 1
    let count = 0
    while (strNum.length > 1){
        for(let i = 0; i < strNum.length; i++){
            Number(strNum[i])
            result *= strNum[i]
            count++
            if(result > 9){
                result *= strNum[i]
                count++
            }
        }
        return count
    }
    if(strNum.length === 1){
        return 0
    }
}

console.log(persistence(39)) // ,3);
console.log(persistence(4)) // ,0);
console.log(persistence(25)) // ,2);
console.log(persistence(999)) // ,4);

// Codewars solutions
function persistence(num) {
    let times = 0;
    num = num.toString();
    while (num.length > 1) {
      times++;
      num = num.split('').map(Number).reduce((a, b) => a * b).toString();
    }
    
    return times;
 }

// ---------------------------------
function persistence(num) {
    for (let i = 0; num > 9; i++) {
      num = num.toString().split('').reduce((t, c) => c * t);
    }
    return i;
 } 
 