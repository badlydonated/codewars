// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

//my attempt
//P: take in a whole number greater than 0
//R: return the number expressed as a string where the number is broken into its place values
//E: see above
//P: 

function expandedForm(num) {
    let expand = num.toString().split('')
    let result = expand.map(e =>{
        
    })
  }
  console.log(expandedForm(12))

// codewars solutions
const expandedForm = n => n.toString()
.split("")
.reverse()
.map( (a, i) => a * Math.pow(10, i))
.filter(a => a > 0)
.reverse()
.join(" + ");

//-------------------------------
function expandedForm(num) {
    return String(num)
            .split("")
            .map((num, index, arr) => num + "0".repeat(arr.length - index -1 ))
            .filter((num) => Number(num) != 0)
            .join(" + ")
  }


