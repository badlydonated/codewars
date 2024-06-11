// Take 2 strings s1 and s2 including only letters from a to z. 
// Return a new sorted string, the longest possible, 
// containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

//my attempt
//P: take in two strings
//R: return one string with unique letters from either string
//E: see above
//P: separate the strings and combine into one array? Then sort?

function longest(s1, s2) {
    let longStr = (s1 + s2).split('')
    let uniqueStr = longStr.filter((item,index) => longStr.indexOf(item) === index)
    return uniqueStr.sort().join('')
  }
console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq")) //"abcdefklmopqwxy"
console.log(longest("aretheyhere", "yestheyarehere")) //"aehrsty"
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding")) //"abcdefghilnoprstu"
console.log(longest("inmanylanguages", "theresapairoffunctions")) //"acefghilmnoprstuy"

//codewars solutions
const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')

//--------------------------------------
function longest(s1, s2) {
    return Array.from(new Set(s1 + s2)).sort().join('');
  }


