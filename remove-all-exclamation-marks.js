// Description:
// Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. 
// For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.

// Examples
// "Hi!"     ---> "Hi!"
// "Hi!!!"   ---> "Hi!"
// "!Hi"     ---> "Hi!"
// "!Hi!"    ---> "Hi!"
// "Hi! Hi!" ---> "Hi Hi!"
// "Hi"      ---> "Hi!"


// function remove (string) {
//     let cleanString = Array.from(new Set(string.split('')))
//     return cleanString;  
//   }


  console.log(remove("Hi!")) , "Hi!"
  console.log(remove("Hi!!!")), "Hi!"
  console.log(remove("!Hi")), "Hi!"
  console.log(remove("!Hi!")), "Hi!"
  console.log(remove("Hi! Hi!")), "Hi Hi!"
  console.log(remove("Hi")), "Hi!"

  //codewars solution
  function remove(s){
    return s.split("!").join("") + "!"
  }