// A trick I learned in elementary school to determine whether or not a number was divisible by three is to add all of the integers in the number together and to divide the resulting sum by three. If there is no remainder from dividing the sum by three, then the original number is divisible by three as well.

// Given a series of digits as a string, determine if the number represented by the string is divisible by three.

// Example:

// "123"      -> true
// "8409"     -> true
// "100853"   -> false
// "33333333" -> true
// "7"        -> false

// My attempt 
function divisibleByThree(str){
    let tot = 0
    let strArr = str.split('')
    let numArr = strArr.map(Number)
    for(let i = 0; i<numArr.length;i++){
        tot += numArr[i]
    }
    let q = parseInt(tot/3)
    let p = q * 3
    if((tot - p) === 0){
        return true
    } else if((tot - p) === 1){
        return false
    } else if ((tot - p) === 'undefined'){
        return false
    }    
}

console.log(divisibleByThree('123')) //, true, "Should return true if the sum of the given digits is divisible by 3.")
console.log(divisibleByThree('19254')) //, true, "Should return true if the sum of the given digits is divisible by 3.")
console.log(divisibleByThree('88')) //, false, "Should return false if the sum of the given digits is not divisible by 3.")
console.log(divisibleByThree('1')) //, false, "Should return false if the sum of the given digits is not divisible by 3.")
console.log(divisibleByThree('91895586256003530754865351557283602976398200611845085987477566532346698139761377609022')) //, false, "Should return false if the sum of the given digits is not divisible by 3.")

// Codewars solutions
function divisibleByThree(str){
    return [...str].reduce((s,d)=>+d+s,0)%3===0;
  }

// -------------------------------
function divisibleByThree(str){
    return str.split('').reduce((a,b) => parseInt(a) + parseInt(b)) % 3 === 0
  }
  
// --------------------------------
function divisibleByThree(str) {
    let s = 0;
    for (const c of str)
      s += parseInt(c);
    return s % 3 == 0;
  }  