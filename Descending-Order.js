// Your task is to make a function that can take any non-negative integer as an argument and return it 
// with its digits in descending order. 
// Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

//My attempt
function descendingOrder(n){
    return Number(n.toString().split('').sort((a,b) => b - a).join(''))
  }
console.log(descendingOrder(42145))


//Codewars solutions
function descendingOrder(n){
    return parseInt(String(n).split('').sort().reverse().join(''))
  }

//--------------------------
function descendingOrder(n){
    return +(n + '').split('').sort(function(a,b){ return b - a }).join('');
  }

//--------------------------
function descendingOrder(n){
    return parseInt(n.toString().split('').sort().reverse().join(''), 10);
  }