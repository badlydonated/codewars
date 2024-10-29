 
// Given a string of characters, return the character that appears the most often.

// describe("Max Character", () => {
//  it("Should return max character", () => {
//   assert.equal(max("Hello World!"), "l");
//  });
// });

// No String or Array Methods (well brute force it first, but then no methods)! 


// str -> no funny biz. at least one char. no empties. all unicode chars. There will always be a most often char.
// return char that appears most often. repeats the most.
// example: "Hello World!" -> 'l'
// 

function maxCharacter(str){
    // create map and count
    let charMap = {},
        count = 0,
        maxChar = null
    
    //map for chars in str + freq
    for(const char of str){
        charMap[char] = charMap[char] + 1 || 1
    }
    // loop and find most freq char
    for(const char in charMap){
        if(charMap[char] > count){
            count = charMap[char]
            maxChar = char
        }
    }
    // return max char
    return maxChar
}

console.log(maxCharacter('Hello World!')) // 'l'