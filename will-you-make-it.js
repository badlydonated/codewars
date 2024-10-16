// You were camping with your friends far away from home, 
// but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! 
// You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.

// Considering these factors, write a function that tells you if it is possible to get to the pump or not.

// Function should return true if it is possible and false if not.

// My attempt
// P: take in 3 parameters, numbers
// R: return true or false
// E: given 50 miles distance to pump, 25mph, 2 gallons left = true
    //  because for every gallon of gas the car will travel approx 25 miles
    //  with 2 gallons left, the car will travel 50 miles. 
// P: if mpg * fuelLeft >= distanceToPump = true if not false

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return mpg * fuelLeft >= distanceToPump ? true : false
}

console.log(zeroFuel(50, 25, 2)) //, true);
console.log(zeroFuel(100, 50, 1)) //, false)

// Codewars solutions
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return distanceToPump/mpg <= fuelLeft
  }
  