// In this Kata we are passing a number (n) into a function.

// Your code will determine if the number passed is even (or not).

// The function needs to return either a true or false.

// Numbers may be positive or negative, integers or floats.

// Floats with decimal part non equal to zero are considered UNeven for this kata.

// My attempt
function testEven(n) {
    if(n == 0 || n % 2 == 0){
        return true
    } else if(n % 2 == 1){
        return false
    }else return false
}
console.log(testEven(0))



//codewars solutions
function testEven(n) {
    return n%2===0;
}

//-----------------------
function testEven(n) {
    return n % 2 === 0 ? true : false;
  }

//---------------------
const testEven = n => !(n % 2);  