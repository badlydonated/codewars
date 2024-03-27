// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

//turn string into an array
//check array for vowels
//add one to 'count' for every vowel
//return count

function getCount(str) {
    let count = 0
    for(let i = 0; i < str.length; i++){
        if(str.charAt(i) === 'a' || str.charAt(i) === 'e' || str.charAt(i) === 'i' || str.charAt(i) === 'o' || str.charAt(i) === 'u'){
            count ++
        }
    }
    return count
}
 
console.log(getCount('a brown lazy dog jumped over the moon'))

//alternate solutions from codewars
function getCount(str) {
    var vowelsCount = 0;
    var vowels = ["a","e","i","o","u"];
    for(var i = 0;i < str.length;i++){
      for(var j=0;j<vowels.length;j++){
        if(str[i] === vowels[j]){
          vowelsCount++;
        }
      }
    }
    
    return vowelsCount;
  }


  function getCount(str) {
    return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
   }

   function getCount(str) {
    var vowelsCount = 0;
    str.split("").forEach(function(x){
      if(x == "a" | x == "e" | x == "i" | x == "o" | x == "u"){
        vowelsCount += 1;
      }
    });  
    return vowelsCount;
  }

  