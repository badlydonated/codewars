// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

// result = 61000

//my attempt
function past(h, m, s){
    let min =  (h * 60) + m
    let sec = (min * 60) + s
    return sec * 1000
  }




console.log(past(0,1,1)) //61000
console.log(past(1,1,1)) //3661000
console.log(past(0,0,0)) //0
console.log(past(1,0,1)) //3601000
console.log(past(1,0,0)) //3600000

//codewars solutions
function past(h, m, s){
    return ((h*3600)+(m*60)+s)*1000;
  }

//--------------------
const past = (h,m,s) => 1000 * (3600 * h + 60 * m + s);  