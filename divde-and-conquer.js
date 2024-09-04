// Given a mixed array of number and string representations of integers, 
// add up the non-string integers and subtract the total of the string integers.

// Return as a number.

//My attempt
function divCon(x){
    let nums = 0
    let str = 0
    let ops =  x.forEach(el =>{
        if(typeof el === 'number'){
            nums = nums + elg
        }else if (typeof el === 'string'){
            str += Number(el)
        }
    })
    return nums - str
}


console.log(divCon([9, 3, '7', '3'])) //, 2);
console.log(divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7])) //, 14); 
console.log(divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0'])) //, 13); 

// codewars solutions
function divCon(x){
    return x.reduce((acc, cur) => typeof cur === 'number'? acc + cur : acc - Number(cur),0)
  }

// ----------------------
function divCon(x){
    let numValue = 0;
    let strValue = 0;
    
    for(let i = 0; i < x.length; i++) {
      if(typeof(x[i]) === 'string' ) {
        strValue += parseFloat(x[i]);
      } else if(typeof(x[i]) === 'number' ) {
        numValue += x[i];
      }
    }
    return numValue - strValue;
  }  