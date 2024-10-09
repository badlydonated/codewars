// In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, 
// lowercase, numbers and special characters (everything else), as follows.

// The order is: uppercase letters, lowercase letters, numbers and special characters.

// "*'&ABCDabcde12345" --> [ 4, 5, 5, 3 ]

// My attempt:
// P: take in a string containing letters, upper and lower, numbers, and special characters
// R: return the number of occurances for each category: upper case letters, lower case letters, numbers,
    // and special characters in that order
// E: see above 
// P: split string into array, loop through the string array to see what catagory the character falls into
    // if it's empty there needs to be zeros in each category.
    // push appropriate count into results array



function solve(s){
    let lowCase = 0
    let uppCase = 0
    let nums = 0
    let specChar = 0
    let result = [lowCase,uppCase,nums,specChar]
        
    for(let i = 0; i < s.length; i++){
        let char = s.charCodeAt(i)

        if(char >= 97 && char <= 122){
            lowCase += 1
        }
        if(char >= 65 && char <= 90){
            uppCase += 1
        }
        if(char >= 48 && char <= 57){
            nums += 1
        }
        if(
                !(char >= 65 && char <= 90) &&
                !(char >= 48 && char <= 57) &&
                !(char >= 97 && char <= 122)
                ){
                    specChar += 1
        }   
    }
    return result   
}


console.log(solve("")) //,[0,0,0,0]);
console.log(solve("aAbBcC")) //,[3,3,0,0]);
console.log(solve("Codewars@codewars123.com")) //,[1,18,3,2]);
console.log(solve("bgA5<1d-tOwUZTS8yQ")) //,[7,6,3,2]);
console.log(solve("P*K4%>mQUDaG$h=cx2?.Czt7!Zn16p@5H")) //,[9,9,6,9]);
console.log(solve("RYT'>s&gO-.CM9AKeH?,5317tWGpS<*x2ukXZD")) //,[15,8,6,9]);
console.log(solve("$Cnl)Sr<7bBW-&qLHI!mY41ODe")) //, [10,7,3,6])
console.log(solve("@mw>0=QD-iAx!rp9TaG?o&M%l$34L.nbft")) //, [7,13,4,10])

// Codewars solutions
const solve = (s) => {
    let result = [0, 0, 0, 0];
    for (let i = 0; i < s.length; i += 1) {
      if (s[i].toLowerCase() > s[i]) {
        result[0] += 1;
      } else if (s[i].toUpperCase() < s[i]) {
        result[1] += 1;
      } else if (s[i] >= 0 && s[i] <= 9) {
        result[2] += 1;
      } else {
        result[3] += 1;
      }
    }
    return result;
  };

// ------------------------------------------
function solve(s){
    let final = [0,0,0,0]
    let i = 0
    while (i<s.length){
       if(s.charCodeAt(i) >= 48 && s.charCodeAt(i) <= 57){
       final[2]++
       }else if(s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 122){
       final[1]++
       }else if(s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90){
       final[0]++
       }else {
       final[3]++
       }  
     i++
    }  
   return final
 }
 
// -------------------------------------- 
function solve(s){
    let a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let b = "abcdefghijklmnopqrstuvwxyz";
    let c = '1234567890';
    let up = 0;
    let low = 0;
    let num = 0;
    let char = 0;
    s = s.split('');
    for(let i = 0; i < s.length; i++){
      if(a.includes(s[i])){up++};
      if(b.includes(s[i])){low++};
      if(c.includes(s[i])){num++};
      if(!a.includes(s[i]) && !b.includes(s[i]) && !c.includes(s[i])){char++};
    }
    return [up,low,num,char];
  }