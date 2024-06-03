// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
// don't worry about uppercase vowels
// y is not considered a vowel for this kata

//my attempt

function shortcut (string) {
    let newArr = []
    let spltStr = string.split('')
    let result = spltStr.filter((ch)=>{
        if(ch !== 'a' && ch !=='e' && ch !=='i' && ch !=='o' && ch !=='u'){
            newArr.push(ch)
        }
    })
        return newArr.join('')
}

  console.log(shortcut('how are you today?')) //


//codewars solutions
function shortcut (string) {
    return string
      .split('')
      .filter(str => !'aeiou'.includes(str))
      .join('')
  }

//-----------------------------
function shortcut(str) {
    return str.split('').filter(function(e) {
      return ['a', 'e', 'i', 'o', 'u'].indexOf(e) == -1 
    }).join('')
  }  