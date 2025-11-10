// Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers, so, for example:

//   3 -->    15  (  3 * 5¹)
//  10 -->   250  ( 10 * 5²)
// 200 --> 25000  (200 * 5³)
//   0 -->     0  (  0 * 5¹)
//  -3 -->   -15  ( -3 * 5¹)

// Parameters - given any pos or neg whole number. Multiply the number by 5 raised to the number of digits in the given number.
// Return - return the value of the multiplication
// Examples - see above
// Psuedocode -

function multiply(number){
    // count the digits in the given number
    // handle the negative sign
    let power 
    if(number < 0){
        power = number.toString().length -1
    } else power = number.toString().length
    
    // multiply by given number
    return number * (Math.pow(5,power))
}

console.log(multiply(10), 250)
console.log(multiply(-5822678), 0);
console.log(multiply(-2), -10)

// Codewars solutions
// function multiply(number){
//     return number * Math.pow(5, Math.abs(number).toString().length)
// }