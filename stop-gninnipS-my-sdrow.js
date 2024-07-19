// Write a function that takes in a string of one or more words, and returns the same string, 
// but with all words that have five or more letters reversed (Just like the name of this Kata). 
// Strings passed in will consist of only letters and spaces. 
// Spaces will be included only when more than one word is present.

// Examples:

// "Hey fellow warriors"  --> "Hey wollef sroirraw" 
// "This is a test        --> "This is a test" 
// "This is another test" --> "This is rehtona test"

//my attempt
//P: take in a string of words
//R: return the string with all words that are 5 letters or more reversed.
//E: see above
//P: split the string into an array. loop through the array to find the items that are 5 characters 
    //or more in length. If there are, then reverse them. join the strings back together. return.

function spinWords(string){
    let revChk = string.split(' ')
    let revEl = []
    for(let i = 0; i < revChk.length; i++){
        if(revChk[i].length >= 5){
            revEl.push(revChk[i].split('').reverse().join(''))
        }else {
            revEl.push(revChk[i])
        }
    }
    return revEl.join(' ')
  }



console.log(spinWords('Hey fellow warriors'))  
console.log(spinWords('This is a test'))  
console.log(spinWords('This is another test'))  

//codwars solutions
function spinWords(words){
    return words.split(' ').map(function (word) {
      return (word.length > 4) ? word.split('').reverse().join('') : word;
    }).join(' ');
  }

//---------------------------
function spinWords(str){
    return str.split(' ').map( w => w.length<5 ? w : w.split('').reverse().join('') ).join(' ');
  }

  