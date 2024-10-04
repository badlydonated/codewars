// Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S 
// with all the even-indexed characters of S, this process should be repeated N times.

// Examples:

// encrypt("012345", 1)  =>  "135024"
// encrypt("012345", 2)  =>  "135024"  ->  "304152"
// encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

// encrypt("01234", 1)  =>  "13024"
// encrypt("01234", 2)  =>  "13024"  ->  "32104"
// encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
// Together with the encryption function, you should also implement a decryption function which reverses the process.

// If the string S is an empty value or the integer N is not positive, return the first argument without changes.

// My attempt 
// P: taking in a string and an integer (pos or neg)
// R: return the string with odd indexed characters concatonated with odd indexed characters
    // if the string param is empty or the integer is not positive, return the text argument as is.
// E: see above 
// P: 



function encrypt(text, n) {
    let result
    if(text === '' || n <= 0){
        return text
    } else if(n === 1){
        text = text.split('')
        let odds = text.filter((char,el) =>{
            return el % 2 === 1
        })
        let evens = text.filter((char,el)=>{
            return el % 2 === 0
        })
        return odds.concat(evens).join('')    
    } else {
        text = text.split('')
        let odds = text.filter((char,el) =>{
            return el % 2 === 1
        })
        let evens = text.filter((char,el)=>{
            return el % 2 === 0
        })
        result = odds.concat(evens)
        for(let i = 1; i < n; i++){
            let odds = result.filter((char,el)=>{
                return el % 2 === 1
            })
            let evens = result.filter((char,el)=>{
                return el % 2 === 0
            })
            result = odds.concat(evens)
        }
        return result.join('')
    }

}


function decrypt(encryptedText, n) {
    let result = []
    if(encryptedText === '' || n <= 0){
        return encryptedText
    } else if(n === 1){
        encryptedText = encryptedText.split('')
        let odds = encryptedText.slice(0,8)
        let evens = encryptedText.slice(8)
        let maxLength = Math.max(odds.length, evens.length)
        for(let i = 0; i < maxLength; i++){
            if(i < odds.length){
                result.push(odds[i])
            }
            if(i < evens.length){
                result.push(evens[i])
            }
            return result
        }    
    } else {
        encryptedText = encryptedText.split('')
        let odds = encryptedText.filter((char,el) =>{
            return el % 2 === 1
        })
        let evens = encryptedText.filter((char,el)=>{
            return el % 2 === 0
        })
        result = odds.concat(evens)
        for(let i = 0; i < n; i++){
            let odds = result.filter((char,el)=>{
                return el % 2 === 1
            })
            let evens = result.filter((char,el)=>{
                return el % 2 === 0
            })
            result = odds.concat(evens)
        }
        return result.join('')
    }      
}

['s','','e','T','','a','s','h','i','','t','i','s','t','!']


   
// console.log(encrypt("This is a test!", 0)) //, "This is a test!");
// console.log(encrypt("This is a test!", 1)) //, "hsi  etTi sats!");
// console.log(encrypt("This is a test!", 2)) //, "s eT ashi tist!");
// console.log(encrypt("This is a test!", 3)) //, " Tah itse sits!");
// console.log(encrypt("This is a test!", 4)) //, "This is a test!");
// console.log(encrypt("This is a test!", -1)) //, "This is a test!");
// console.log(encrypt("This kata is very interesting!", 1)) //, "hskt svr neetn!Ti aai eyitrsig");

console.log(decrypt("This is a test!", 0)) //, "This is a test!");
console.log(decrypt("hsi  etTi sats!", 1)) //, "This is a test!");
console.log(decrypt("s eT ashi tist!", 2)) //, "This is a test!");
console.log(decrypt(" Tah itse sits!", 3)) //, "This is a test!");
console.log(decrypt("This is a test!", 4)) //, "This is a test!");
console.log(decrypt("This is a test!", -1)) //, "This is a test!");
console.log(decrypt("hskt svr neetn!Ti aai eyitrsig", 1)) //, "This kata is very interesting!");   

console.log(encrypt("", 0)) //, "");
console.log(decrypt("", 0)) //, "");
console.log(encrypt(null, 0)) //, null);
console.log(decrypt(null, 0)) //, null);


// Codewars solutions
function encrypt(text, n) {
    console.log(text, n);
    if (!text || n <= 0) return text; 
    while (n--) {
      let ans = '';
      for (let i = 1; i < text.length; i += 2) {
        ans += text[i];
      }
      for (let i = 0; i < text.length; i += 2) {
        ans += text[i];
      }
      text = ans;
    }
    return text;
  }
  
  function decrypt(encryptedText, n) {
    if (!encryptedText || n <= 0) return encryptedText;
    const ans = new Array(encryptedText.length);
    while (n--) {
      let j = 0;
      for (let i = 1; i < ans.length; i += 2) {
        ans[i] = encryptedText[j++];
      }
      for (let i = 0; i < ans.length; i += 2) {
        ans[i] = encryptedText[j++];
      }
      encryptedText = ans.join('');
    }
    return encryptedText;
  }
 
// ------------------------------------------------
function encrypt(text, n) {
    if (!text || !text.length || n <= 0)
      {
          return text;
      }
  
      var res = "";
      var oth = "";
  
      for (var i = 0; i < text.length; ++i)
      {
          if (i % 2 == 0)
          {
              oth += text[i];
          }
          else
          {
              res += text[i];
          }
      }
  
      return encrypt(res + oth, --n);
  }
  
  function decrypt(encryptedText, n) {
      if (!encryptedText || !encryptedText.length || n <= 0)
      {
          return encryptedText;
      }
  
      var first = encryptedText.slice(0, encryptedText.length / 2);
      var second = encryptedText.slice(encryptedText.length / 2);
      
      var res = "";
    var i = 0;
    var j = 0;
  
      while (res.length < encryptedText.length)
      {
          if (res.length % 2 == 0)
          {
              res += second[i];
        i++;
          }
          else
          {
              res += first[j];
        j++;
          }
      }
  
      return decrypt(res, --n);
  }  