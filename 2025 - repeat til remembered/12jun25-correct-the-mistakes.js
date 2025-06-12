// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

//p: a string will be the parameter
//r: return the string with corrected mistakes
//e: L0ND0N should be LONDON
//p: convert string to an array,
    //loop through array
    //then check for 0, 5, or 1
    //

// 1st attempt:
// function correct(string){
// 	let strArr = string.split('')
//     strArr.forEach(element => {
//         if(element === 0){
//             strArr.splice(strArr[element], 1, 'O')
//         }else if(element === 5){
//             strArr.splice(strArr[element], 1, 'S')
//         }else if(element === 1){
//             strArr.splice(strArr[element], 1, 'I')
//         }
//     });
//     return strArr.join('')
// }    

// 2nd attempt
function correct(string){
	let strArr = string.split('')
    for(let i = 0; i < strArr.length; i++){
        if(strArr[i] === '0'){
            strArr.splice([i], 1, 'O')
        }else if(strArr[i] === '5'){
            strArr.splice([i], 1, 'S')
        }else if(strArr[i] === '1'){
            strArr.splice([i], 1, 'I')
        }
    }
    return strArr.join('')
}

console.log(correct("L0ND0N"),"LONDON");
console.log(correct("DUBL1N"),"DUBLIN");
console.log(correct("51NGAP0RE"),"SINGAPORE");
console.log(correct("BUDAPE5T"),"BUDAPEST");
console.log(correct("PAR15"),"PARIS");

// CODEWARS solutions (without regex)
function correct(string){
  return string.replaceAll('0', 'O').replaceAll('1', 'I').replaceAll('5', 'S');
}

