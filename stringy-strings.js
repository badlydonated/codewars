// write me a function stringy that takes a size and returns a string of alternating 1s and 0s.

// the string should start with a 1.

// a string with size 6 should return :'101010'.

// with size 4 should return : '1010'.

// with size 12 should return : '101010101010'.

// The size will always be positive and will only use whole numbers.

//my attempt
function stringy(size) {
    let binArr = []
    for(let i = 1; i <= size; i++){
        if(i == 1){
            binArr.push('1')
        } else if(i % 2 === 0){
            binArr.push('0')
        } else binArr.push('1')
    }
    return binArr.join('')   
  }

  console.log(stringy(1))
  console.log(stringy(4))
  console.log(stringy(6))
  console.log(stringy(12))

  //codewars solutions
  function stringy(size) {
    var str='';
    for( var i=1; i<=size; i++ )
      str+=i%2;
    return str;
  }

//-----------------------------
const stringy = x => ''.padStart(x,'10');

//-----------------------------
const stringy = size => "10".repeat(size).slice(0,size);
