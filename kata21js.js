// An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
// Implement a function that determines whether a string that contains only letters is an isogram. 
// Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false
//My attempt didn't work
function isIsogram(str){
    let spltstr = str.toLowerCase()
    console.log(spltstr)
    for(let i = 0; i <= spltstr.length; i++){
        for(let j = i + 1; j <= spltstr.length; j++){
            if(str[j] == str[i]){
                return true
            }else {
            return false
            }
        }
    }
  }
  console.log(isIsogram('tEest'))

// codewars solutions
function isIsogram(str){
	return new Set(str.toUpperCase()).size == str.length;
}

function isIsogram(str){
    var i, j;
    str = str.toLowerCase();
    for(i = 0; i < str.length; ++i)
      for(j = i + 1; j < str.length; ++j)
        if(str[i] === str[j])
          return false;
    return true;
  }