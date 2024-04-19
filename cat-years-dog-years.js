// Kata Task
// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

//P: human years entered by user. 2 animals w/diff age rates. 
//R: return an array of 3 elements - humanYears, catYears, dogYears
//E: see above
//P: take in human years. find what range the animals fall in. add to an array.

var humanYearsCatYearsDogYears = function(humanYears) {
    let ageArr = []
    let catYears = 0
    let dogYears = 0
    
    if(humanYears > 2){
        catYears = 24 + ((humanYears - 2)*4)
        dogYears = 24 + ((humanYears -2)*5)
        ageArr.push(humanYears, catYears, dogYears)
        return ageArr
    }else if(humanYears == 2){
        catYears = 24
        dogYears = 24
        ageArr.push(humanYears, catYears, dogYears)
        return ageArr
    }else {
        catYears = 15
        dogYears = 15
        ageArr.push(humanYears, catYears, dogYears)
        return ageArr
    }
  }
  console.log(humanYearsCatYearsDogYears(10))

//codewars solutions
var humanYearsCatYearsDogYears = function(y) {
    if (y == 1) return [1, 15, 15]
    if (y == 2) return [2, 24, 24]
    return [y, (y-2) * 4 + 24, (y-2) * 5 + 24]
  }

//-----------------------------------------------
const humanYearsCatYearsDogYears = humanYears => [
    humanYears,
    ( humanYears - 1 ? 16 : 11 ) + 4 * humanYears,
    ( humanYears - 1 ? 14 : 10 ) + 5 * humanYears,
  ];

//---------------------------------------------
const humanYearsCatYearsDogYears = (humanYears) => {
    let catYears = 0;
    let dogYears = 0;
    
    for (let i = 1; i <= humanYears; i++) {
      if (i === 1) {
        catYears += 15;
        dogYears += 15;
      }
      else if (i === 2) {
        catYears += 9;
        dogYears += 9;
      }
      else {
        catYears += 4;
        dogYears += 5;
      }
    }
    return [humanYears,catYears,dogYears];
  }
    
  