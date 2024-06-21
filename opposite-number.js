// Very simple, given a number (integer / decimal / both depending on the language), find its opposite (additive inverse).

// Examples:

// 1: -1
// 14: -14
// -34: 34

//my attempt
function opposite(number) {
    if(number === 0){
        return 0
    } else 
    return number * -1
  }

 
console.log(opposite(1)) //, -1)
console.log(opposite(0)) //, 0);
console.log(opposite(4.25)) //, -4.25);
console.log(opposite(3.3333333)) //, -3.3333333);
console.log(opposite(-12525220.3325)) //, 12525220.3325);


//codewars solutions
function opposite(number) {
    return(-number);
  }

  
