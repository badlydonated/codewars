// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

//My attempt
function abbrevName(name){
    let newArr = name.toUpperCase().split(' ')
    let splitArr = newArr.slice(0,1) 
    let splitArrChars = splitArr.split('')
    console.log(splitArrChars)
    } 
    
abbrevName('john johnson')

//codewars solution
function abbrevName(name){

    var nameArray = name.split(" ");
    return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
  }

//-----------------------------
function abbrevName(name){

    return name.split(' ').map(i => i[0].toUpperCase()).join('.')

}  

//-----------------------------
function abbrevName(name){
    return name.split(' ').map(x => x.substr(0, 1).toUpperCase()).join('.');
  }