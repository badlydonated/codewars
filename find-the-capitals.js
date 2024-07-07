// Instructions
// Write a function that takes a single non-empty string of only lowercase and uppercase 
// ascii letters (word) as its argument, and returns an ordered list containing the indices 
// of all capital (uppercase) letters in the string.

// Example (Input --> Output)
// "CodEWaRs" --> [0,3,4,6]

//my attempt
//P: take in a string of upper and lower case letters
//R: return an array of the indices of the uppercase letters
//E: see above
//P: split the string into letters and into an array. test each letter for uppercase.

function capitals(word) {
	let indArr = []
    let letters = word.split('').filter((letter, index) =>{
        if(letter == letter.toUpperCase()){
            indArr.push(index)
        }
    })
    return indArr
}

console.log(capitals('CodEWaRs'))

//codewars solutions
var capitals = function (word) {
    var caps = [];
      for(var i = 0; i < word.length; i++) {
      if(word[i].toUpperCase() == word[i]) caps.push(i);
    }
    return caps;
  };

//---------------------------
var capitals = function (word) {
	return word.split('').reduce(function(memo, v, i) {
    return v === v.toUpperCase() ? memo.concat(i) : memo;
  }, []);
}  