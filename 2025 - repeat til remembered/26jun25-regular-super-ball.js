// Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.

// If no arguments are given, ball objects should instantiate with a "ball type" of "regular."

// ball1 = new Ball();
// ball2 = new Ball("super");

// ball1.ballType     //=> "regular"
// ball2.ballType     //=> "super"

// my attempt
const Ball = class {
    constructor(ballType = 'regular'){
        this.type = ballType
    }
}

// codewars solutions
const Ball1 = function(ballType){
    this.ballType = ballType || 'regular'
}

class Ball2 {
    constructor(ballType = 'regular'){
        this.ballType = ballType
    }
}



