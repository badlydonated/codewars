// Given two numbers and an arithmetic operator (the name of it, as a string), 
// return the result of the two numbers having that operator used on them.

// a and b will both be positive integers, 
// and a will always be the first number in the operation, 
// and b always the second.

// The four operators are "add", "subtract", "divide", "multiply".

// A few examples:(Input1, Input2, Input3 --> Output)

// 5, 2, "add"      --> 7
// 5, 2, "subtract" --> 3
// 5, 2, "multiply" --> 10
// 5, 2, "divide"   --> 2.5
// Try to do it without using if statements!

//P: taking in 3 inputs. two of the inputs are pos int. the other is a string. 
//R: Need to return the value from the arithmetic operation specified in the argument.
//E: see above
//P: need to assign the string a math operator corresponding with the word (see above)

//my attempt
function arithmetic(a, b, operator){
    switch(operator){
        case 'add': 
            return a + b
            break
        case 'subtract':
            return a - b
            break
        case 'multiply':
            return a * b
            break
        case 'divide':
            return a / b
            break        
    }
  }

  console.log(arithmetic(5,2,'add'))
  console.log(arithmetic(5, 2, "subtract"))
  console.log(arithmetic(5, 2, "multiply"))
  console.log(arithmetic(5, 2, "divide"))

//codewars solutions
const arithmetic = (a, b, operator) => ({
    'add'     : a + b,
    'subtract': a - b,
    'multiply': a * b,
    'divide'  : a / b
  }[operator]);

//-------------------------
const arithmetic = (a, b, operator) => {
    return  ( 
      operator === "add" ? a + b : operator === "subtract" ? a - b : operator === "multiply" ? a * b : a / b
    )
   }  