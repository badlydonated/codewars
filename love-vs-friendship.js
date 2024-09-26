// If　a = 1, b = 2, c = 3 ... z = 26

// Then l + o + v + e = 54

// and f + r + i + e + n + d + s + h + i + p = 108

// So friendship is twice as strong as love :-)

// Your task is to write a function which calculates the value of a word based off the sum of the alphabet positions of its characters.

// The input will always be made of only lowercase letters and will never be empty.

function wordsToMarks(string){
    const result = []
    
    for(let i = 0; i < string.length; i++){
        let charCode = string.charCodeAt(i) - 96 
        result.push(charCode)
    }
    return result.reduce((acc, cv)=> acc + cv)
}

console.log(wordsToMarks("attitude")) //, 100);
console.log(wordsToMarks("friends")) //, 75);
console.log(wordsToMarks("family")) //, 66);
console.log(wordsToMarks("selfness")) //, 99);
console.log(wordsToMarks("knowledge")) //, 96);

// Codewars solutions
const wordsToMarks = s => [...s].reduce((res, c) => res += c.charCodeAt() - 96, 0)

// -------------------------
function wordsToMarks(str)
{
  var sum = 0;
  for (let i = 0; i < str.length; i++)
    sum += str.charCodeAt(i) - 96;
  return sum;
}