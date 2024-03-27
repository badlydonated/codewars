// Replace all vowels to exclamation mark in the sentence. aeiouAEIOU is vowel.

// Examples
// replace("Hi!") === "H!!"
// replace("!Hi! Hi!") === "!H!! H!!"
// replace("aeiou") === "!!!!!"
// replace("ABCDE") === "!BCD!"

function replace(s){
    let string = ''
    s.toLowerCase()
    for(let i = 0; i < s.length; i++){
        if(i === 'a' || i==='e' || i==='i' ||i==='o' || i==='u'){
            s.replace('!')
        } else 
    }
    
  }
// I gave up.
//codewars solution
function replace(s){
    let a = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    let arr = s.split('')
    for(let i = 0; i < arr.length; i++){
        if(a.includes(arr[i])){
             arr[i] = '!'
        }
    }
    return arr.join('')
  }