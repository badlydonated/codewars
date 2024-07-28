// Write a method that takes one argument as name and then greets that name, 
// capitalized and ends with an exclamation point.

// Example:

// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"


var greet = function(name) {
    let reset = name.toLowerCase()
    let cap = name.charAt(0).toUpperCase() + reset.slice(1)
    return (`Hello ${cap}!`)
}

console.log(greet('riley'))

//codewars solutions
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
}
var greet = function(name) {
    return "Hello " + name.capitalize() + "!";
    }

//----------------------
var greet = function(name) {
    return "Hello " + name.charAt(0).toUpperCase() + name.slice(1).toLowerCase() + "!";
  }