// Fix the function
// I created this function to add five to any number that was passed in to it and return the new value. 
// It doesn't throw any errors but it returns the wrong number.

// Can you help me fix the function?

//my attempt
function addFive(num) {
    var total = num + 5
    return total
  }

  console.log(addFive(5))

  //codewars solutions
  function addFive(num) {
    return num + 5;
  }

  //---------------
  const addFive = n => n + 5;