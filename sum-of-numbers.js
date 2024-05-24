// Given two integers a and b, which can be positive or negative, 
// find the sum of all the integers between and including them and return it. 
// If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
// Your function should only return a number, not the explanation about how you get that number.

//my attempt
//P: take in two integers, pos or neg
//R: return sum of all numbers inbetween the two int, including the two int
//E: see above
//P: need a loop to run through all numbers between the two int
    //then add them up, if the int are the same, return a or b

function getSum(a, b){
    let arr = [a,b]
    let newArr = []
    let hn = Math.max(...arr)
    let ln = Math.min(...arr)
   if(a == b){
    return a
   } else{
    for(let i = ln; i <= hn; i++){
        newArr.push(i)
    }
    return newArr.reduce((acc,cv)=>{
        return acc + cv
    })  
   }
}


console.log(getSum(1, 0)) //1
console.log(getSum(1, 2)) //3
console.log(getSum(0, 1)) //1
console.log(getSum(1, 1)) //1
console.log(getSum(-1, 0))//-1
console.log(getSum(-1, 2))//2

//codewars solutions
const GetSum = (a, b) => {
    let min = Math.min(a, b),
        max = Math.max(a, b);
    return (max - min + 1) * (min + max) / 2;
  }