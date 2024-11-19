// A child is playing with a ball on the nth floor of a tall building. 
// The height of this floor above ground level, h, is known.

// He drops the ball out of the window. 
// The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).

// His mother looks out of a window 1.5 meters from the ground.

// How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing)?

// Three conditions must be met for a valid experiment:
// Float parameter "h" in meters must be greater than 0
// Float parameter "bounce" must be greater than 0 and less than 1
// Float parameter "window" must be less than h.
// If all three conditions above are fulfilled, return a positive integer, otherwise return -1.

// Note:
// The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.

// Examples:
// - h = 3, bounce = 0.66, window = 1.5, result is 3

// - h = 3, bounce = 1, window = 1.5, result is -1 

// (Condition 2) not fulfilled).

// My attempt
// take in 3 floats params. h = height from which ball is dropped. b = height of the first bounce. 
    // window = height of the window from the ground. 

function bouncingBall(h,b,window){
    // return pos integer if all conditions are met, if not, return -1
    // h > 0
    // bounce > 0 && < 1
    // window < h
    let seeCount = 1
    if(h > 0 && b > 0 && b < 1 && window < h){
        let nh = (h * .66)
        while(nh >= window){
            seeCount++
        }
        return seeCount
    }
    else return -1

}


console.log(bouncingBall(3.0, 0.66, 1.5), 3);
console.log(bouncingBall(30.0, 0.66, 1.5), 15);  
console.log(bouncingBall(3.0, 1.0, 1.5), -1);

// Codewars solutions
function bouncingBall(h,  bounce,  window) {
    if(h <= 0 || bounce <= 0 || bounce >= 1 || window >= h){
      return -1;
    }
  
    var newHeight = h * bounce;
    return bouncingBall(newHeight, bounce, window) + 2;
  }

//------------------------------
function bouncingBall(h,  bounce,  window) {
    if( h <= 0 || bounce >= 1 || bounce <= 0 || window >= h) return -1
    let seen = 0;
    
    while(h > window){
      seen += 1
      h *= bounce
      if(h > window) seen += 1
    }
    
    return seen;
  }  