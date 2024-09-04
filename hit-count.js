// Task
// As a step towards achieving this; you have decided to create a function that will produce a multi-dimensional array out of the hit count value. 
// Each inner dimension of the array represents an individual digit in the hit count, and will include all numbers that come before it, going back to 0.

// Rules
// The function will take one argument which will be a four character string representing hit count
// The function must return a multi-dimensional array containing four inner arrays
// The final value in each inner array must be the actual value to be displayed
// Values returned in the array must be of the type number
// Examples

// counterEffect("1250") // [[0,1],[0,1,2],[0,1,2,3,4,5],[0]] 
// counterEffect("0050") // [[0],[0],[0,1,2,3,4,5],[0]] 
// counterEffect("0000") // [[0],[0],[0],[0]]

// My attempt
function counterEffect(hitCount) {
    let numCount = []
    let numArr =  hitCount.split('')
    numArr.forEach(el =>{
        if(el === 0){
            numCount.push([el])
        }else {
            for(let i = 0; i < el.length; i++){
                numCount.push(i,el)
            }
        }
    })
    return numCount
}

console.log(counterEffect("1250")) //, [[0,1],[0,1,2],[0,1,2,3,4,5],[0]]);
console.log(counterEffect("0050")) //, [[0],[0],[0,1,2,3,4,5],[0]]);
console.log(counterEffect("0000")) //, [[0],[0],[0],[0]]);   

// Codewars solutions
function counterEffect(str) {
	var output = [];
	for (var i = 0; i < str.length; i++) {
		var temp = [];
		for (var j = 0; j <= Number(str[i]); j++) {
			temp.push(j);
		} output.push(temp);
	} return output;
}