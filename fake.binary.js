// Given a string of digits, you should replace any digit below 5 with '0' 
// and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

//my attempt
function fakeBin(x){
    let splitStr =  x.split('')
    let result = splitStr.map((el) => {
        if(el < 5){
            return 0
        } else if (el >= 5){
            return 1
        }
    })
    return result.join('')
}

console.log(fakeBin('45385593107843568'))
console.log(fakeBin('509321967506747'))
console.log(fakeBin('366058562030849490134388085'))

//codewars solutions
function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}