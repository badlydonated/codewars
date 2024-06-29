// There is a queue for the self-checkout tills at the supermarket. 
// Your task is write a function to calculate the total time required for all the customers to check out!

// input
// customers: an array of positive integers representing the queue. 
// Each integer represents a customer, and its value is the amount of time they require to check out.
// n: a positive integer, the number of checkout tills.
// output
// The function should return an integer, the total time required.

// Important
// Please look at the examples and clarifications below, to ensure you understand the task correctly :)

// Examples
// queueTime([5,3,4], 1)
// // should return 12
// // because when there is 1 till, the total time is just the sum of the times

// queueTime([10,2,3,3], 2)
// // should return 10
// // because here n=2 and the 2nd, 3rd, and 4th people in the 
// // queue finish before the 1st person has finished.

// queueTime([2,3,10], 2)
// // should return 12
// Clarifications
// There is only ONE queue serving many tills, and
// The order of the queue NEVER changes, and
// The front person in the queue (i.e. the first element in the array/list) 
// proceeds to a till as soon as it becomes free.

//my attempt
//P: 
//R: 
//E: 
//P: 

function queueTime(customers, n) {
    if(customers = []){
        return 0
    } else if(n === 1 && customers.length > 0){
        return customers.reduce((acc, cv) => acc + cv)
    } else if(n >= customers.length){
        return Math.max(...customers)
    } else if(n < customers.length){

    }
  }

  

  console.log(queueTime([], 1)) //, 0);
  console.log(queueTime([1,2,3,4], 1)) //, 10);
  console.log(queueTime([2,2,3,3,4,4], 2)) //, 9);
  console.log(queueTime([1,2,3,4,5], 100)) //, 5)

//codewars solutions
  function queueTime(customers, n) {
    let tills = Array(n).fill(0);
    
    customers.forEach((customer) => {
      let nextTill = tills.indexOf(Math.min(...tills))
      tills[nextTill] += customer;
    });
  
    return Math.max(...tills);
  }

//--------------------------------------------
function queueTime(customers, n) {
    // creates an array of length n representing the tills
    // Each till is given a value of 0 to represent initial waitTime before the queue begins.
    const tills = new Array(n).fill(0);
    // goes through the queue of customer waitTimes
    for (let waitTime of customers) {
      // finds the till with the least wait time on it, adds the next customer's time to it
      const lowestWaitTill = tills.indexOf(Math.min(...tills));
      tills[lowestWaitTill] += waitTime;
    }
    // end result is that the waitTimes (load) on the tills are distributed optimally. 
    // The waitTime of the till with the heaviest load represents the total time taken
    return Math.max(...tills);
  }

//----------------------------------------------
function queueTime(customers, n) {
    /**
     * ------------------ EXAMPLE:
     * if customers --> [2, 3, 10]
     * and if n --> 2
     */
  
    let queueArr = Array(n).fill(0);
    // EXAMPLE: queueArr --> [0, 0];
  
    customers.forEach((customer) => {
      queueArr[0] += customer;
      /**
       * ------------------ EXAMPLE:
       * 1 iteration queueArr --> [2, 0];
       * 2 iteration queueArr --> [3, 2];
       * 3 iteration queueArr --> [12, 3];
       */
  
      queueArr.sort((a, b) => a - b);
      /**
       * ------------------ EXAMPLE:
       * 1 iteration queueArr --> [0, 2];
       * 2 iteration queueArr --> [2, 3];
       * 3 iteration queueArr --> [3, 12];
       */
    });
  
    return queueArr[queueArr.length - 1]; // EXAMPLE: last num in queueArr --> 12
  }
