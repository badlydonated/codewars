// Complete the function howManydays. 
// It accepts 1 parameter month, which means the month of the year. 
// Different months have a different number of days as shown in the table below. 
// Return the number of days that are in month. 
// There is no need for input validation: month will always be greater than 0 and less than or equal to 12.

// +---------------+-------------+
// |    month      |    days     |
// +---------------+-------------+
// |1,3,5,7,8,10,12|     31      |
// +---------------+-------------+
// |4,6,9,11       |     30      |
// +---------------+-------------+
// |2              |     28      |  (Do not consider the leap year)
// +---------------+-------------+

// Tip: Using default for most of the cases can reduce your work.
//P: one parameter, an integer representing one of the 12 months of the year
//R: return the number of days in the given month
//E: see above
//P: need the number for the month
    //since multiple months share the same number of days
    //will try to use several cases at once using the break statement.



function howManydays(month){
  let days;
  switch (month){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        days = 31
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        days = 30
        break;
    case 2:
        days = 28
        break;
  }
  return days;
}

console.log(howManydays(1),31);
console.log(howManydays(1),31);
console.log(howManydays(2),28);
console.log(howManydays(3),31);
console.log(howManydays(4),30);
console.log(howManydays(12),31);

// Codewars solutions

// function howManydays(month){
//   switch (month){
//      case 2: return 28
//      case 4:
//      case 6:
//      case 9:
//      case 11: return 30
//   }
//   return 31
// }

