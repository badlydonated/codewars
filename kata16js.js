// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]
// My attempt that I copied from a website and didn't work
function digitize(n) {
    let digits = []
    let numStr = n.toString()

    for(let i = 0; i < n.length; i++){
        let digit = parseInt(numStr[i])
        digits.push(digit)
    }
    return digits
  }

  //This is the top codewars solution
  function digitize(n) {
    return String(n).split('').map(Number).reverse()
  }