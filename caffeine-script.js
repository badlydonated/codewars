// Complete the function which takes a non-zero integer as its argument.

// If the integer is divisible by 3, return the string "Java".

// If the integer is divisible by 3 and divisible by 4, return the string "Coffee"

// If one of the condition above is true and the integer is even, add "Script" to the end of the string.

// If none of the condition is true, return the string "mocha_missing!"

// Examples
// 1   -->  "mocha_missing!"
// 3   -->  "Java"
// 6   -->  "JavaScript"
// 12  -->  "CoffeeScript"

//my attempt
//P: take in an integer greater than 0
//R: return Java if int is div by 3 . Rtn coffee if int is div by 3 and 4.
    //rtn 
//E: 
//P: 

function caffeineBuzz(n){
    const coffee = (n % 3 == 0 && n % 4 == 0)
    const java = (n % 3 == 0)
    const even = (n % 2 == 0)
    
    if (coffee == true && even == true){
        return 'CoffeeScript'
    } else if (java == true && even == true){
        return 'JavaScript'
    } else if (coffee == true){
        return 'Coffee' 
    } else if (java == true){
        return 'Java'
    } else return 'mocha_missing!'
}


console.log(caffeineBuzz(1))
console.log(caffeineBuzz(3))
console.log(caffeineBuzz(6))
console.log(caffeineBuzz(12))

// codewars solutions
function caffeineBuzz(n){
    if (n % 12 === 0) return "CoffeeScript";
    if (n % 6 === 0) return "JavaScript";
    if (n % 3 === 0)  return "Java";
    return "mocha_missing!";
  }

  