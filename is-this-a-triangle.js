// Implement a function that accepts 3 integer values a, b, c. 
// The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

// Examples:

// Input -> Output
// 1,2,2 -> true
// 4,2,3 -> true
// 2,2,2 -> true
// 1,2,3 -> false
// -5,1,3 -> false
// 0,2,3 -> false
// 1,2,9 -> false 

//My attempt
//P: take in 3 interger values. all triangles must have surface greater than 0 to be accepted
//R: return true if triangle can be built with the sides of given lengths or false otherwise
//E: see above
//P: numbers must be greater than 0.  test for triangle using formula and conditionals.
    // a + b > c; a + c > b; and b + c > a
    
function isTriangle(a,b,c){       
    if(a + b > c && a + c > b && b + c > a){
        return true
    } else return false;
}    

console.log(isTriangle(-5,1,3))

//codewars solutions
function isTriangle(a,b,c)
{
   return a + b > c && a + c > b && c + b > a;
}

//-----------------------------
var isTriangle = (a,b,c) => Math.max(a,b,c)<(a+b+c)/2