// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

//my attempt
function high(x){
    let result = 0
    let words = x.split(' ').join(' ')
    
    for (let i = 0; i < words.length; i++){
        let chars = words.toUpperCase().charCodeAt(i)
            if(chars === 32) {
                result += ', '
            } else if (chars > 64 && chars < 91) result += (chars - 64) + ' ';
        }
return result
}

console.log(high('man i need a taxi up to ubud')) //, 'taxi');
console.log(high('what time are we climbing up the volcano')) //, 'volcano'); 
console.log(high('take me to semynak')) //, 'semynak');   
console.log(high('aa b')) //, 'aa');
console.log(high('b aa')) //, 'b');
console.log(high('bb d')) //, 'bb');
console.log(high('d bb')) //, 'd');
console.log(high('aaa b')) //, 'aaa')

//codewars solutions
function high(s){
    let as = s.split(' ').map(s=>[...s].reduce((a,b)=>a+b.charCodeAt(0)-96,0));
    return s.split(' ')[as.indexOf(Math.max(...as))];
  }

//--------------------------
function high(x){
    let alphabets = [
      'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
      'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ];
    
    let words = x.split(" ");
    let highestScore = 0;
    let highestScoreWord = "";
    
    for (let word of words) {
      let lettersSum = 0;
      
      for (let letter of word) {
        lettersSum += alphabets.indexOf(letter) + 1;
      }
      
      if (lettersSum > highestScore) {
        highestScore = lettersSum;
        highestScoreWord = word;
      }
    }
    
    return highestScoreWord;
  }
 
//------------------------------
function high(words) {

    const alpha = ' abcdefghijklmnopqrstuvwxyz';
    const score = word => word.split('').reduce((a, b) => a + alpha.indexOf(b), 0);
  
    return words
      .split(' ')
      .map((word, pos) => ({ word: word, pos: pos, score: score(word) }))
      .sort((a, b) => a.score - b.score || b.pos - a.pos)
      .pop()
      .word;
      
  }
    