// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, 
// such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).

// Example 1:
// Input: n = 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.

// Example 2:
// Input: n = 3
// Output: 2
// Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.

// Example 3:
// Input: n = 4
// Output: 3
// Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.


// prep
// fib -> 0,1, 0+1=1, 1+1=2, 2+1=3, 2+3=5, 5+3=8, 8+5=13 
// take in a number and return the last generated number in the sequence based on that number.  
// examples:
    // fib -> 0,1,1,2,3,5,8,13,21,34
    // f(3) ->2
    // f(4) ->3

function fib(position){
    let sequence = [0,1]
    for(let i = 2; i <= position; i++){
        let a = sequence[i-1]
        let b = sequence[i-2]
        sequence.push(a + b)
    }
    return sequence[position]
}

// the first time run i=2 so a =2-1 , b = 2-2. a=1, b=0
// sequence.push(a+b) = (1+0)=1. At the 1 position, 1 is the value so 1 is added to the end of the sequence array
// now i=3 so a = 3-1=2; b = 3-2=1
// sequence.push(a+b) = (2+1) = 3. At the 3 position, 2 is the value so 2 is added to the end of the sequence array
// the loop stops since i=4 which is greater than position(3)
// the function returns the value at the 3rd position which is 2
console.log(fib(3), '2')
console.log(fib(4), '3')

// ----------STANDARD FIBONACCI SEQUENCE GENERATOR (given 0 and 1) -------------------
function fibo(n) {
    if(  n < 2 ){
        return n
    }
    return fib(n-1) + fib(n-2)
}

// recursion EX
function countDown(n){
    if(n===0){
        console.log('DUNZO')
    }else{
        console.log(n)
        countDown(n-1)
    }
}

// memoization example
const memo = {}
function fib(n){
    if(n < 2){
        return n
    }else if(memo[n]){
        return memo[n]
    }else{
        let result = fib(n-1) + fib(n-2)
        memo[n] = result
        return result
    }
}

