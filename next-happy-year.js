// Scenario
// You're saying good-bye your best friend , See you next happy year .

// Happy Year is the year with only distinct digits , (e.g) 2018

// Task
// Given a year, Find The next happy year or The closest year You'll see your best friend!alt!alt

// Notes
// Year Of Course always Positive .
// Have no fear , It is guaranteed that the answer exists .
// It's not necessary that the year passed to the function is Happy one .
// Input Year with in range (1000 ≤ y ≤ 9000)

// Input >> Output Examples:
// nextHappyYear (7712) ==> return (7801)
// Explanation:
// As the Next closest year with only distinct digits is 7801 .

// nextHappyYear (8989) ==> return (9012)
// Explanation:
// As the Next closest year with only distinct digits is 9012 .

// nextHappyYear (1001) ==> return (1023)
// Explanation:
// As the Next closest year with only distinct digits is 1023 .

// My attempt
// P: given a 4 digit positive number (year) / the given year will be greater or equal to 1000 or less than or equal to 9000
// R: return the next highest 4 digit number where each digit is unique
// E: see above
// P: split number into digits by converting to string first.  using filter() and indexOf() test if the given numbers are uniqe. If false, join, and add one to number until no dupes are found
//    if true, join and return


function nextHappyYear(year){
    let splitArr = year.toString().split('')
    let uniqueTest = splitArr.filter((value, index, array) => array.indexOf(value) === index).length === splitArr.length
    
    for(let i = 0; i < splitArr.length; i++){
        if(uniqueTest === false){
        
        }
    }
}


console.log(nextHappyYear(1001)) //,1023);
console.log(nextHappyYear(1123)) //,1203);
console.log(nextHappyYear(2001)) //,2013);
console.log(nextHappyYear(2334)) //,2340);
console.log(nextHappyYear(3331)) //,3401);
console.log(nextHappyYear(1987)) //,2013);
console.log(nextHappyYear(5555)) //,5601);
console.log(nextHappyYear(7712)) //,7801);
console.log(nextHappyYear(8088)) //,8091);
console.log(nextHappyYear(8999)) //,9012);  

// Codewars solutions
function nextHappyYear(a){
    while(new Set([...++a+'']).size<4);
    return a;
  }

// ---------------------------------
function nextHappyYear(year){
    let newYear = year + 1
    let arr = newYear.toString().split('') 
    if(arr.join('') === Array.from(new Set(arr)).join('')) return newYear
    else return nextHappyYear(newYear)
  }