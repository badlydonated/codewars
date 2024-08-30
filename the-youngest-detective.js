// Jenny is 9 years old. She is the youngest detective in North America. 
// Jenny is a 3rd grader student, so when a new mission comes up, 
// she gets a code to decipher in a form of a sticker (with numbers) in her math notebook and a comment 
// (a sentence) in her writing notebook. All she needs to do is to figure out one word, 
// from there she already knows what to do. And here comes your role - you can help Jenny find out what the word is!

// In order to find out what the word is, you should use the sticker (array of 3 numbers) 
// to retrive 3 letters from the comment (string) that create the word.

// Each of the numbers in the array refers to the position of a letter in the string, in increasing order.
// Spaces are not places, you need the actual letters. No spaces.
// The returned word should be all lowercase letters.
// if you can't find one of the letters using the index numbers, return "No mission today". 
// Jenny would be very sad, but that's life... :(
// Example: input: [5, 0, 3], "I Love You" output: "ivy" (0 = "i", 3 = "v", 5 = "y")

// My attempt
function missingWord(nums, str) {
    let sortedNums = nums.sort((a,b)=>a-b)
    let strArr = str.split(' ').join('').split('')
    let secretWord = sortedNums.map(i =>{
        if(strArr[i] === undefined){
             'No mission today'
        }else return strArr[i]
    })
    return secretWord
}




  console.log(missingWord([5, 0, 3], "I love you")) //, "ivy")
  console.log(missingWord([29, 31, 8], "The quick brown fox jumps over the lazy dog")) //, "bay")
  console.log(missingWord([12, 4, 6], "Good Morning")) //, "No mission today")  

  // Codewars solutions
  function missingWord(nums, str) {
    var result = "";
    var string = str.split(" ").join("");
    nums.sort((a,b) => a - b);
    nums.forEach(function(x){ 
      if(string[x]){
        result += string[x].toLowerCase();
      }else{
        result = "No mission today";
      }
    });
    return result;
  }

// ----------------------------------
function missingWord(n, s) {
    let a = s.split(' ').join('').split('');
    let b = n.sort((z,x) => z - x);
    let c = [];
    for(let i = 0; i < b.length; i++)
      c.push(a[b[i]])
    return a.length < b[2] ? "No mission today" : c.join('').toLowerCase();
  }