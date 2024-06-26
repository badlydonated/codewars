// The main idea is to count all the occurring characters in a string. 
// If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

//My attempt
//P: take in a string. no numbers. 
//R: return an object containing the occurrences of each character in the string
//E: see above
//P: 


function count(string) {
    let newObj = {}
    for(let i = 0; i < string.length; i++){
        let char = string.charAt(i)
        if(!newObj[char]){
            newObj[char] = 1
        }else {
            newObj[char] += 1
        }
    }return newObj    
  }

console.log(count(''))

//codewars solutions
function count (string) {  
    var count = {};
    string.split('').forEach(function(s) {
       count[s] ? count[s]++ : count[s] = 1;
    });
    return count;
  }

//---------------------------
function count (string) {
    return string.split('').reduce(function(counts,char){
      counts[char] = (counts[char]||0) + 1;
      return counts;
    },{});
  }