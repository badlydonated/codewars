// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son 
// (or in how many years he will be twice as old). 
// The answer is always greater or equal to 0, 
// no matter if it was in the past or it is in the future.
//My attempt
//P: take in two numbers (ages)
//R: number of years it will take first num to be double the second number
    //or was double the number
//E: 55,30 --> 5; double 30 is 60, 60 - 5 is 5.
//P: if dads age is larger than the sons age doubled, then return dads age minus sons age.
    //if the dads age is less than or equal to the sons age doubled, then return sons age minus dads age.

function twiceAsOld(dadYearsOld, sonYearsOld) {
    let sonDbl = sonYearsOld * 2
    if(dadYearsOld > sonDbl){
        return dadYearsOld - sonDbl
    } else if(dadYearsOld <= sonDbl){
        return sonDbl - dadYearsOld
    }
  }

console.log(twiceAsOld(55,30)) // 5  
console.log(twiceAsOld(42,21)) // 0
console.log(twiceAsOld(36,7)) // 22

//codewars solutions
function twiceAsOld(dadYearsOld, sonYearsOld) {
    return Math.abs(dadYearsOld - 2 * sonYearsOld);
  }

//----------------------------------
const twiceAsOld = (d, s) => Math.abs(d - 2 * s);
