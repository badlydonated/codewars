// You will be given a sequence of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Given the following input array:

// var list1 = [
//   { firstName: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 30, language: 'Java' },
//   { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 70, language: 'Python' },
// ];
// write a function that returns the average age of developers (rounded to the nearest integer). In the example above your function should return 50 (number).

// Notes:

// The input array will always be valid and formatted as in the example above.
// Age is represented by a number which can be any positive integer.

//my attempt
//P: take in an array of objects containing properties about attendees
//R: return the average age of attendees
//E: see above
//P: 

function getAverageAge(list) {
    let ages = list.map(prop => prop.age)
    let total = ages.reduce((acc, cv) => acc + cv)
    return Math.round(total/ages.length)
}
console.log(getAverageAge([
    {"firstName":"Harry","lastName":"K.","country":"Brazil","continent":"Americas","age":19,"language":"Python"}
]))
console.log(getAverageAge([
    {"firstName":"Kseniya","lastName":"T.","country":"Belarus","continent":"Europe","age":29,"language":"Ruby"},
    {"firstName":"Amar","lastName":"V.","country":"Bosnia and Herzegovina","continent":"Europe","age":32,"language":"Ruby"}
]))
console.log(getAverageAge([
    {"firstName":"Jayden","lastName":"P.","country":"Jamaica","continent":"Americas","age":42,"language":"JavaScript"},
    {"firstName":"Oliver","lastName":"Q.","country":"Australia","continent":"Oceania","age":69,"language":"PHP"},
    {"firstName":"Maria","lastName":"Y.","country":"Cyprus","continent":"Europe","age":30,"language":"Java"},
    {"firstName":"Maia","lastName":"S.","country":"Tahiti","continent":"Oceania","age":28,"language":"Clojure"},
    {"firstName":"Joshua","lastName":"O.","country":"Isle of Man","continent":"Europe","age":39,"language":"Clojure"},
    {"firstName":"Manuel","lastName":"C.","country":"Equatorial Guinea","continent":"Africa","age":22,"language":"Ruby"},
    {"firstName":"Noel","lastName":"O.","country":"Albania","continent":"Europe","age":23,"language":"Python"},
    {"firstName":"Daniel","lastName":"J.","country":"Aruba","continent":"Americas","age":42,"language":"JavaScript"},
    {"firstName":"Mia","lastName":"H.","country":"Germany","continent":"Europe","age":39,"language":"Ruby"},
    {"firstName":"Hugo","lastName":"K.","country":"Spain","continent":"Europe","age":39,"language":"Python"}
]))

// codewars solutions
function getAverageAge(list) {
    return Math.round(list.reduce((sum,obj) => sum + obj.age, 0) / list.length);
  }

//------------------------
const getAverageAge = ( $ ) => Math.round( $.reduce((a, b) => a + b.age, 0) / $.length )