// It's the academic year's end, fateful moment of your school report. 
// The averages must be calculated. 
// All the students come to you and entreat you to calculate their average for them. Easy ! 
// You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

// getAverage([2,2,2,2]),2)
// getAverage([1,2,3,4,5,]),3);
// getAverage([1,1,1,1,1,1,1,2]),1)

// My attempt
// P: take in an array of numbers
// R: return the average of the array rounded down to nearest int
// E: [2,2,2,2] -> 2
// P: to get the average we need to add all the numbers together
    // then divide the sum by the number of numbers in the array.
    // then round down to nearest int

function getAverage(grades){
    let sum = grades.reduce((pv,cv)=>(pv + cv))
    return Math.floor(sum/grades.length)
}    

console.log(getAverage([2,2,2,2])) //,2)
console.log(getAverage([1,2,3,4,5])) //,3);
console.log(getAverage([1,1,1,1,1,1,1,2])) //,1)