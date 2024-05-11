// Complete the solution so that it returns true 
// if the first argument(string) passed in 
// ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false
//my attempt
//P: take in two strings. 
//R: return true if the last character in the first 
    //string, matches the last character in the second string.
    //return false otherwise
//E: see above
//P: 

function solution(str, ending){
    for (let i = str.length - 1; i >= 0; i--){
        for (let j = ending.length - 1; j >= 0; j--) {
            if(str[i] === ending[j]){
                return true
            }else return false
                
        }
    }
     
}

  console.log(solution('sumo', 'omo'))
  
  //codewars solutions
  function solution(str, ending){
    return str.endsWith(ending);
  }

  //-------------------------------
  const solution = (str, ending) => str.endsWith(ending);
  