// You need to write a function that reverses the words in a given string. Words are always separated by a single space.

// As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

// Example (Input --> Output)

// "Hello World" --> "World Hello"
// "Hi There." --> "There. Hi"

// My attempt
// P: take in a string where words are sep by a single space
// R: return a string with the words reversed
// E: "Hello World" --> "World Hello"
    // "Hi There." --> "There. Hi"
// P: split the string into an array? then use reverse. then join


function reverse(string){
    return string.split(' ').reverse().join(' ')
}

console.log(reverse('I am an expert at this')) // , 'this at expert an am I');
console.log(reverse('This is so easy')) // , 'easy so is This');
console.log(reverse('no one cares')) // , 'cares one no');
console.log(reverse('')) // , '');
console.log(reverse('CodeWars')) // , 'CodeWars')
