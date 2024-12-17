// Your task is to write a function which returns the sum of a sequence of integers.

// The sequence is defined by 3 non-negative values: begin, end, step.

// If begin value is greater than the end, your function should return 0.
// If end is not the result of an integer number of steps, then don't add it to the sum. See the 4th example below.

// Examples

// 2,2,2 --> 2
// 2,6,2 --> 12 (2 + 4 + 6)
// 1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
// 1,5,3  --> 5 (1 + 4)
    // 1; 1 + 3 = 4, 4 + 3 = 7 

// My attempt
// take in 3 parameters, a start num, an end num, and a step num
// return the sum of the pattern results
// the pattern is adding the step number to the begin number until the end number is reached,
//  2,6,2 ---> begin with number 2 (2). Add the step. (2+2=4), (2,4). 4+2=6 (2,4,6) 2+4+6=12
// if begin > end return 0

const sequenceSum = (begin, end, step) => {
    let sequence = []
    
    if(begin > end){
        return 0
    }

    for(let i = begin; i <= end; i += step){
        sequence.push(i)
    }
    return sequence.reduce((acc,cv)=>acc+cv)
  }

  console.log(sequenceSum(1, 5, 1), 15)
  console.log(sequenceSum(2, 6, 2), 12)
  console.log(sequenceSum(1, 5, 3), 5)

  // codewars solutions
  const sequenceSuma = (begin, end, step) => {
    var sum = 0;
    for(var i=begin;i<=end;i+=step)
    {
      sum += i;
    }
    return sum;
  }

  //--------------------------
  const sequenceSumb = (begin, end, step) => {
    if (begin > end) {
      return 0;
    }
    return begin + sequenceSum(begin + step, end, step);
  };