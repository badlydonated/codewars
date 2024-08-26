// Write a function that returns the number of occurrences of an element in an array.

// This function will be defined as a property of Array with the help of the method Object.defineProperty, 
// which allows to define a new method directly on the object (more info about that you can find on MDN).

// Examples
// var arr = [0, 1, 2, 2, 3];
// arr.numberOfOccurrences(0) === 1;
// arr.numberOfOccurrences(4) === 0;
// arr.numberOfOccurrences(2) === 2;
// arr.numberOfOccurrences(3) === 1;

// My attempt
Object.defineProperty(Array.prototype, 'numberOfOccurrences',{ 
    value : function numberOfOccurrences(element) {
        let arr = [0,1,2,2,3]
        const counter = {};

        arr.forEach(ele => {
            if (counter[ele]) {
                counter[ele] += 1;
            } else {
                counter[ele] = 1;
            }
        })
    }
  });

// Codewars Solutions
Array.prototype.numberOfOccurrences = function(search) {
    return this.filter( function(num){ return search === num } ).length;
  }
  
// ---------------------
Array.prototype.numberOfOccurrences = function (element) {
    
    var counter = 0;
    for (var i = 0; i < this.length; i++)
    {
        if (this[i] == element) { counter++; }
    }
    
    return counter;
}

// ------------------------
Array.prototype.numberOfOccurrences = function (element) {
    
    var counter = 0;
    for (var i = 0; i < this.length; i++)
    {
        if (this[i] == element) { counter++; }
    }
    
    return counter;
}


