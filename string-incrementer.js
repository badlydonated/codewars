// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

//my attempt
//P: take in a string
//R: return a new string incrementing the string number by 1.
    //if there is no number, then the number 1 will be added.
    //if there are leading zeros, they must be preserved.
//E: see above
//P: 

// function incrementString (strng) {
//     let strArr = strng.split('')
//     for (let i = strArr.length - 1; i >= 0; i--) {
//         if(strArr[+i] == NaN){
//             return
//         } else {
//             return strArr[parseInt(i)]
//         }
//       }
//       return strArr
//   }


  console.log(incrementString("foobar000")) //, "foobar001");
  console.log(incrementString("foobar999")) //, "foobar1000");
  console.log(incrementString("foobar00999")) //, "foobar01000");
  console.log(incrementString("foo")) //, "foo1");
  console.log(incrementString("foobar001")) //, "foobar002");
  console.log(incrementString("foobar1")) //, "foobar2");
  console.log(incrementString("1")) //, "2");
  console.log(incrementString("009")) //, "010");
  console.log(incrementString("fo99obar99")) //, "fo99obar100")  

  //codewars solutions
  function incrementString(str){
	var c = str[str.length-1];
		switch(c){
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8': return str.substring(0, str.length-1) + (parseInt(c)+1);
            case '9': return incrementString(str.substring(0, str.length-1)) + 0;
            default: return str+"1";
                }
}

//-----------------------------------------
function incrementString (str) {
    str = str.split('');
    if (isNaN(str[str.length - 1]) === false) {
      for (var i = str.length - 1; i >= 0; --i) {
        if (isNaN(str[i]) === false) {
          var num = +str[i];
          if (num !== 9) {
            str.splice(i, 1, (++num).toString());
            break;
          }
          str.splice(i, 1, '0');
        } else if (isNaN(str[i + 1]) === false && str[i + 1] === '0') {
          str.splice(i + 1, 0, '1');
        } else {
          break;
        }
      }
    } else {
      str.push('1');
    }
    return str.join('');
  }

//--------------------------------------
function incrementString (string) {
    const value = string.split('')
  
    // if the last value of a given string is not a number
    // then we can just return back early with 1 at the end.
    if (isNaN(value[value.length - 1])) return `${string}1`
  
    let characterPosition = value.length - 1
    let character = value[characterPosition]
    let characterNumber = Number(character)
  
    // If the last value is less than or equal to 8, then
    // we only need to increase that value by one and
    // return the updated value.
    if (characterNumber <= 8) {
      value[characterPosition] = characterNumber + 1
      return value.join('')
    }
  
    let lastChangedValue = characterNumber
    value[characterPosition] = 0
  
    // iterate through  all  the  values in the  string from right
    // to left, as long as the  current value is a 9, increase and
    // carry the one. When the value is no longer a 9, then return
    // the response.
    //
    // If the last number  (first) is a 9, then splice in a 1 at
    // the next left position.
    while (true) {
      characterPosition -= 1
      character = value[characterPosition]
      characterNumber = Number(character)
  
      if (!isNaN(character) && characterNumber === 9) {
        lastChangedValue = characterNumber
        value[characterPosition] = 0
        continue
      }
  
      if (lastChangedValue === 9 && !isNaN(character) && characterNumber <= 8) {
        value[characterPosition] = characterNumber + 1
        return value.join('')
      }  