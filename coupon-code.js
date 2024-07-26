// Story
// Your online store likes to give out coupons for special occasions. 
// Some customers try to cheat the system by entering invalid codes or using expired coupons.

// Task
// Your mission:
// Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

// A coupon is no more valid on the day AFTER the expiration date. 
// All dates will be passed as strings in this format: "MONTH DATE, YEAR".

// Examples:
// checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
// checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false

//my attempt
//P: take in 4 parameters, strings. 
//R: return true or false
//E: see above
//P: if cc does not = ed OR if cd is > ed then false
    // if cc = ec AND cd is <= ed then true

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    let cD = new Date(currentDate)
    let eD = new Date(expirationDate)
    if(correctCode === enteredCode && cD <= eD){
    return true
  } else return false
}


console.log(checkCoupon("123", "123", "July 9, 2015", "July 9, 2015"))  //===  true
console.log(checkCoupon("123", "123", "July 9, 2015", "July 2, 2015"))  //===  false
console.log(checkCoupon('123','123','September 5, 2014','October 1, 2014')) //, true);
console.log(checkCoupon('123a','123','September 5, 2014','October 1, 2014')) //, false)

//codewars solutions
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    return enteredCode === correctCode && Date.parse(expirationDate) >= Date.parse(currentDate)
  }

//-------------------
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    return enteredCode===correctCode && new Date(currentDate) <= new Date(expirationDate);
  }  
  