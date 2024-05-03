// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), 
// is part of the second quarter; and month 11 (November), is part of the fourth quarter.

// Constraint:

// 1 <= month <= 12

//my attempt
//P: take in a number representing a month of the year (1-12)
//R: return what quarter that month falls in (1-3)
//E: see above
//P: four quarters 1-3, 4-6, 7-9, 10-12 . 
// if the number falls in one of the quarters,
// it will return the number of the quarter.

const quarterOf = (month) => {
    if(month <= 3){
        return 1
    }else if(month >= 4 && month <= 6){
        return 2
    }else if (month >= 7 && month <= 9){
        return 3
    }else return 4    
  }

//codewars solutions
const quarterOf = m => Math.ceil(m/3); 