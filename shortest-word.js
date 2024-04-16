// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

//My attempt
function findShort(s){
    let strArr = s.split(' ')
    strArr.sort((a,b) => a.length-b.length)
    return strArr[0].length
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"))


//codewars solutions
function findShort(s){
    return Math.min(...s.split(" ").map (s => s.length));
}


