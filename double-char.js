//Double Char
// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "


//My attempt
function doubleChar(str) {
    let splitArr = str.split("")
    let dblArr = []
    for(let i = 0; i < splitArr.length; i++){
        dblArr.push(splitArr[i] + splitArr[i])
    }
    return dblArr.join('')
}

//codewars solutions
function doubleChar(str) {
	var word = '';
  for (var i = 0; i < str.length; i++){
  	word = word + str[i] + str[i];
  };
  return word;
};

//----------------
function doubleChar(str) {
    return str.split("").map(function (c) {
      return c + c;
    }).join("");
  }

//----------------
function doubleChar(str) {
    return [...str].map(v=>v+v).join('');
  }  

//----------------  
  function doubleChar(str) {
    // Your code here
    
    // lets first declare our string
    var newString = "";
    
    // Iterate through the string adding the current character twice
    for(var current = 0; current < str.length; current++)
    {
      newString += str[current] + str[current]; 
    }
    // return our new string 
    return newString  
  }