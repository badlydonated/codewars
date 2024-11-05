// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// taking in a string that can contain any characters
// returning a boolean
// must be case insensitive

function XO(str){
    let exes = 0
    let ohs = 0
    let lowerCase = str.toLowerCase()

    for (const char of lowerCase){
        if(char == 'x'){
            exes += 1
        }else if(char == 'o'){
            ohs += 1
        }  
    }
    if(exes === ohs){
        return true
    } else return false
}

console.log(XO('xo')) //,true);
console.log(XO("xxOo")) //,true);
console.log(XO("xxxm")) //,false);
console.log(XO("Oo")) //,false);
console.log(XO("ooom")) //,false);
console.log(XO('zpzpzpp')) //true

// codewars solutions
const XO = str => {
    str = str.toLowerCase().split('');
    return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
  }