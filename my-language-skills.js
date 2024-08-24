// Task
// You are given a dictionary/hash/object containing some languages and your test results in the given languages. 
// Return the list of languages where your test score is at least 60, in descending order of the scores.

// Note: the scores will always be unique (so no duplicate values)

// Examples
// {"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
// {"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
// {"C++": 50, "ASM": 10, "Haskell": 20}     -->  []


// My attempt
function myLanguages(results) {
    let highScores = []
    for (let [key, value] of Object.entries(results)) {
        if(value >= 60){
            highScores.push(key)
        }
    }
    return highScores
}

console.log(myLanguages({"Java": 10, "Ruby": 80, "Python": 65})) //    -->  ["Ruby", "Python"]
console.log(myLanguages({"Hindi": 60, "Dutch" : 93, "Greek": 71})) // -->  ["Dutch", "Greek", "Hindi"]
console.log(myLanguages({"C++": 50, "ASM": 10, "Haskell": 20}))    // -->  []


// Codewars solutions
function myLanguages(results) {
    return Object.keys(results).filter(r => results[r] > 59).sort((a,b) => results[b] - results[a]);
  }

// -------------------------------------
const myLanguages = results => Object.entries(results)
  .filter(([name, points]) => points >= 60)
  .sort(([name1, points1], [name2, points2]) => points2 - points1)
  .map(([name, points]) => name);
  
// --------------------------------------
myLanguages = r => Object.keys(r).sort((a,b) => r[b]-r[a]).filter(k => r[k] >= 60)
