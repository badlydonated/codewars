// Your task is to write function factorial.

// take in a positive integer
// return the factorial of that integer
// 5! = 5 * 4! = 4 * 3 * 2 * 1
// n! = n * (n - 1) * (n - 2) * (n - 3)...
// 0! = 1


function factorial(n){
    if(n === 0){
        return 1
    }
    else {
        return (n *factorial(n - 1))
    }
  }

console.log(factorial(5))

// using a for loop
function factorializer(num){
    if(num === 0){
        return 1
    }
    for(let i = num - 1; i >= 1; i--){
        num *= i
    }
    return num
}

// Codewars solution
const factorial = n => n ? factorial(n - 1) * n : 1;
