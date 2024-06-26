// altERnaTIng cAsE <=> ALTerNAtiNG CaSe
// Define String.prototype.toAlternatingCase 
// (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase 
// in your selected language; see the initial solution for details) 
// such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. 
// For example:

// "hello world".toAlternatingCase() === "HELLO WORLD"
// "HELLO WORLD".toAlternatingCase() === "hello world"
// "hello WORLD".toAlternatingCase() === "HELLO world"
// "HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
// "12345".toAlternatingCase()       === "12345"        // Non-alphabetical characters are unaffected
// "1a2b3c4d5e".toAlternatingCase()  === "1A2B3C4D5E"
// "String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
// As usual, your function/method should be pure, i.e. it should not mutate the original string.

//my attempt
//P: take in a string
//R: return a new string where lowercase changes to uppercase and vice/versa from the original string
//E: see above
//P: loop through each character, test for upper or lowercase
    //if true for upper, change to lower. if false for upper, change to upper.
    
    
String.prototype.toAlternatingCase = function () {
    let strArr = this.split('')
    for(let i = 0; i < strArr.length; i++){
         if(strArr[i] === strArr[i].toLowerCase()){
             strArr[i] = strArr[i].toUpperCase()
         } else if(strArr[i] === strArr[i].toUpperCase()){
             strArr[i] = strArr[i].toLowerCase()
         }    
    }
    return strArr.join('')
}

 //codewars solutions
 String.prototype.toAlternatingCase = function () {
    return this.split("").map(a => a === a.toUpperCase()? a.toLowerCase(): a.toUpperCase()).join('')
}

//----------------------
const isLowerCase = (char) => char.toLowerCase() === char;
const swapCase = (char) => isLowerCase(char) ? char.toUpperCase() : char.toLowerCase();

String.prototype.toAlternatingCase = function() {
  return [...this].map(swapCase).join('');
};

