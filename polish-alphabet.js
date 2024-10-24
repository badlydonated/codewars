// There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

// Your task is to change the letters with diacritics:

// ą -> a,
// ć -> c,
// ę -> e,
// ł -> l,
// ń -> n,
// ó -> o,
// ś -> s,
// ź -> z,
// ż -> z
// and print out the string without the use of the Polish letters.

// For example:

// "Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"

// my attempt
// P: taking a string with diacritic characters
// R: return the string replacing the diacritic characters 
//  with english alphabet characters
// E: "Jędrzej Błądziński" -> Jedrzej Bladzinski
// P: 


function solve(str){
    const pArr = [ą,ć,ę,ł,ń,ó,ś,ź,ż]
    for(let i = 0; i < str.length; i++){
        if(pArr.includes(i)){
            i
        }
    }
}


console.log(solve('Jędrzej Błądziński')) // Jedrzej Bladzinski
console.log(solve("Lech Wałęsa")) // Jedrzej Bladzinski
console.log(solve("Maria Skłodowska-Curie")) // Maria Sklodowska-Curie


// codewars solutions
var polishLetters = {
    "ą": "a",
    "ć": "c",
    "ę": "e",
    "ł": "l",
    "ń": "n",
    "ó": "o",
    "ś": "s",
    "ź": "z",
    "ż": "z",
};

function correctPolishLetters (string) {
  return string.split('').map((c) => polishLetters[c] || c).join("");
}