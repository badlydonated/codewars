// The Fibonacci numbers are the numbers in the following integer sequence 
// (Fn): 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...

// such that:
// F(0) = 1 
// F(1) = 1
// F(n) = F(n−1) + F(n−2)

// Given a number, say product, we search two Fibonacci numbers F(n) and F(n+1) verifying:
// F(n) ∗ F(n+1) = product

// Your function takes an integer (prod) and returns an array 
// if F(n) * F(n+1) = product:
//     (F(n), F(n+1), true)

// If you do not find two consecutive F(n) verifying F(n) * F(n+1) = product:
// (F(n), F(n+1), false)

// where F(n) is the smallest one such as F(n) * F(n+1) > product.

// Examples:
// 714 ---> (21, 34, true) --> since F(8) = 21, F(9) = 34 and 714 = 21 * 34

// 800 --->  (34, 55, false) --> since F(8) = 21, F(9) = 34, F(10) = 55 and 21 * 34 < 800 < 34 * 55 

// My attempt
// take in an integer
// return the two numbers whose product equals 'product'
// examples above
// test numbers to see if product equals product
// make a memo object to store the results?


function productFib(product){
    let memo = {}

    
}


console.log(productFib(4895), [55, 89, true])
console.log(productFib(5895), [89, 144, false])
console.log(productFib(74049690), [6765, 10946, true])
console.log(productFib(84049690), [10946, 17711, false])
console.log(productFib(193864606), [10946, 17711, true])
console.log(productFib(447577), [610, 987, false])
console.log(productFib(602070), [610, 987, true])

// Codewars solution
function fibProduct(product){
    let n = 0
    let nPlusOne = 1

    while (n * nPlusOne < product) {
        nPlusOne = n + nPlusOne
        n = nPlusOne - n
    }
    return [n, nPlusOne, n * nPlusOne === product]
}