// Well met with Fibonacci bigger brother, AKA Tribonacci.

// As the name may already reveal, it works basically like a Fibonacci, 
// but summing the last 3 (instead of 2) numbers of the sequence to generate the next. 

// if we are to start our Tribonacci sequence with [1, 1, 1] 
// as a starting input (AKA signature), we have this sequence:

// [1, 1 ,1, 3, 5, 9, 17, 31, ...]
// But what if we started with [0, 0, 1] as a signature? 

// [0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
// you need to create a fibonacci function that given a signature array/list, 
// returns the first n elements - signature included of the so seeded sequence.

// Signature will always contain 3 numbers; 
// n will always be a non-negative number; 
// if n == 0, then return an empty array

//My attempt
//P: given a 'signature' array composed of 3 number elements, returns an array of n elements using the signature. 
//R: return a new array with n elements following the pattern
//E: ([ [1,1,1], 10])
//P: using indexes? [0] + [1] + [2] = [3]; [1] + [2] + [3] = [4]; [2] + [3] + [4] = [5]; etc. 
//  how do i get the original array elements into the new array? map method?

function tribonacci(signature,n){
    let tribArr = []
    for(let i = 0; i < n; i++){
        i[0] + i[1] + i[2]
   }
  }

  console.log(tribonacci([ [1,1,1], 10]))
  ([ [0,0,1], 10])
  ([ [0,1,1], 10])
  ([ [1,0,0], 10])
  ([ [0,0,0], 10])
  ([ [1,2,3], 10])
  ([ [3,2,1], 10])
  ([ [1,1,1],  1])
  ([[300,200,100], 0])

  //codewars solutions
  function tribonacci(signature,n){
    while (signature.length < n) {
      signature.push(signature.slice(-3).reduce((a, b) => a + b));
    }
    return signature.slice(0, n);
  }

  //------------------------
  function tribonacci(signature,n){  
    for (var i = 0; i < n-3; i++) { // iterate n times
      signature.push(signature[i] + signature[i+1] + signature[i+2]); // add last 3 array items and push to trib
    }
    return signature.slice(0, n); //return trib - length of n
  }