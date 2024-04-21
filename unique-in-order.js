// Implement the function unique_in_order which takes as argument a sequence 
// and returns a list of items without any elements with the same value next to each other 
// and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

//P: takes in a string or set of numbers
//R: return an array containing only the unique characters from the given string or number set
//E: see above
//P: find dupes, separate characters, remove dupes keeping one, return new array 

//my attempt
var uniqueInOrder=function(iterable){
    newArr = iterable.split('')
    let uniqueArr = []
    newArr.map(function(val){
        if(val[0] === val[1]){
            uniqueArr.push(val)
        }   
    })
  }
  console.log(uniqueInOrder('AAAABBBCCDAABBB'))


//codewars solutions
function uniqueInOrder(it) {
    var result = []
    var last
    
    for (var i = 0; i < it.length; i++) {
      if (it[i] !== last) {
        result.push(last = it[i])
      }
    }
    
    return result
  }
  
//-----------------------------------------
var uniqueInOrder=function(iterable){
    var res = [];
    for (var i = 0; i < iterable.length; i++) {
      if (iterable[i] != iterable[i+1]) res.push(iterable[i]);
    }
    return res;
  }  

//-----------------------------------------
var uniqueInOrder = function (iterable)
{
	return [].filter.call(iterable, (function (a, i) { return iterable[i - 1] !== a }));
}

//-----------------------------------------
var uniqueInOrder=function(iterable){
    return [...iterable].filter((a, i) => a !== iterable[i-1])
}

