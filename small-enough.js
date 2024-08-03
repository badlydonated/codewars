// You will be given an array and a limit value. 
// You must check that all values in the array are below or equal to the limit value. 
// If they are, return true. Else, return false.

// You can assume all values in the array are numbers.

//my attempt
function smallEnough(a, limit){
    let boolArr = a.map((num) =>{
        if(num <= limit){
            return true
        } else return false
    })
    if(boolArr.includes(false)){
        return false
    } else return true
}

console.log(smallEnough([66, 101], 200)) //, true);
console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100)) //, false);
console.log(smallEnough([101, 45, 75, 105, 99, 107], 107)) //, true);
console.log(smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120)) //, true)

// Codewars solutions
function smallEnough(a, limit){
    return Math.max(...a) <= limit
  }

//------------------------------
smallEnough = (a, l) => a.every(e => e <= l)

//------------------------------
function smallEnough(a, limit){
    return a.every(x => x <= limit);
  }
  