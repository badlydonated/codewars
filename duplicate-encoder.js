// The goal of this exercise is to convert a string to a new string where each character in the new string 
// is "(" if that character appears only once in the original string, 
// or ")" if that character appears more than once in the original string. 
// Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
// Notes
// Assertion messages may be unclear about what they display in some languages. 
// If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

//my attempt
//P: take in a string
//R: return a new string which replaces each character with '(' 
    //if it appears only once in the string
    //if it appears more than once, replace it with ')'
//E: see above
//P: set all to lowercase. split into array. find dupes. if dupe is true 

function duplicateEncode(word){
    const result = []
    let duplicates = []
    let ltrArr = word.toLowerCase().split('')

    ltrArr.forEach(function (value, index, array) {
        if (array.indexOf(value, index + 1) !== -1
            && duplicates.indexOf(value) === -1) {
            duplicates.push(value);
            result.push(')')
        } else result.push('(')
    })   
    return result    
}    

console.log(duplicateEncode('din'))    // (((
console.log(duplicateEncode('recede')) // ()()()
console.log(duplicateEncode('success'))// )())())
console.log(duplicateEncode('(( @'))   // ))((

//codewars solutions
function duplicateEncode(word){
    return word
      .toLowerCase()
      .split('')
      .map( function (a, i, w) {
        return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
      })
      .join('');
  }

//-------------------------------------
function duplicateEncode(word){
   
    var unique='';
    word = word.toLowerCase();
    for(var i=0; i<word.length; i++){
        if(word.lastIndexOf(word[i]) == word.indexOf(word[i])){
            unique += '(';
        }
        else{
            unique += ')';
        }
    }
    return unique;

}  


// Leon's solution add to anki
// PREP:
    // str -> ingore caps
    // str -> '(' only once and ')'is more than once

function encodeDupes(str){
    // toLowerCase to take care of capitalization
    // since i have to go through each letter, need to split into an array
    // change to '(' or ')'  ->map()
    // check for repeats
    // join() -> str
    return str.toLowerCase()
            .split('')
            .map((c, i, a) => a.indexOf(c) === a.lastIndexOf(c) ? '(' : ')')
            .join('')
}

console.log(encodeDupes('din')) // "((("
console.log(encodeDupes('recede')) // "()()()"
console.log(encodeDupes('Success')) // ")())())"
console.log(encodeDupes('Success')) // ")())())"
console.log(encodeDupes('(( @'))   // ))((

