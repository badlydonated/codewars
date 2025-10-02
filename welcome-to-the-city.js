// Create a method that takes as input a name, city, and state to welcome a person. 
// Note that name will be an array consisting of one or more values that should be joined together with one space between each, 
// and the length of the name array in test cases will vary.

// Example:

// ['John', 'Smith'], 'Phoenix', 'Arizona'
// This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!

// P - take in an array containing strings separated by commas - names
    // and two strings city and state
// R - return the names, city and state in a phrase as follows:
    // 'Hello, name name name! Welcome to city, state!'
// E - see above
// P - I thought I could use the join method in a template literal but it didn't like it. 
    // so I assigned the joined names to a new variable and then placed them in template literals
    // apparently you CAN use the join method in the template literal.



// my attempt
// function sayHello( name, city, state ) {
//     let names = name.join(' ')
//     return `Hello ${names}! Welcome to ${city}, ${state}!`
// }

// console.log(sayHello(['Mike', 'Smith'], 'foo', 'bar'))

// using join in the template literal
 function sayHello( name, city, state ) {
    return `Hello ${name.join(' ')}! Welcome to ${city}, ${state}!`
}

console.log(sayHello(['Mike', 'Smith'], 'Los Angeles', 'California'))