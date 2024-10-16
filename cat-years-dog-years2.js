// Kata Task
// I have a cat and a dog which I got as kitten / puppy.

// I forget when that was, but I do know their current ages as catYears and dogYears.

// Find how long I have owned each of my pets and return as a list [ownedCat, ownedDog]

// NOTES:

// Results are truncated whole numbers of "human" years

// Cat Years
// 15 cat years for first year            1 year = 15
// +9 cat years for second year           2 years = 24
// +4 cat years for each year after that  3 years = 28, 4 years = 32
// Dog Years
// 15 dog years for first year            1 year = 15
// +9 dog years for second year           2 years = 24
// +5 dog years for each year after that  3 years = 29, 4 years = 34, 5 years = 39 44 49 54 59 64 69

// My attempt
// P: take in two parameters representing the animals' ages in respective animal years
// R: return array of two integers representing the animals' ages in human years
// E: (15,15) => [1,1]
// P: 

var ownedCatAndDog = function(catYears, dogYears) {
    let result = []
    if(catYears === 15){
        result[0] = 1
    }else if(catYears === 24){
        result[0] = 2
    } else if(catYears >= 28 && catYears % 4 === 0)
        result[0] = 2 + (catYears % 4)
    if(dogYears === 15){
        result[1] = 1
    } else if(dogYears === 24){
        result[1] = 2
    } else if(dogYears )
  }


console.log(ownedCatAndDog(15,15)) //, [1,1]);
console.log(ownedCatAndDog(24,24)) // [2,2]
console.log(ownedCatAndDog(56,64)) //, [10,10]);  

// Codewars solutions
const ownedCatAndDog = (catYears, dogYears) => 
    [(catYears < 24)? catYears / 15 : (catYears - 16) / 4,
    (dogYears < 24)? dogYears / 15 : (dogYears - 14) / 5].map(Math.floor);

// -----------------------------
const ownedCatAndDog = (...pets) => pets.map((petYears, i) => { 
    if (petYears < 15) return 0;
    if (petYears < 24) return 1;
      
    return 2 + Math.floor((petYears - 24) / (4 + i));
});

// ---------------------------
var ownedCatAndDog = function(catYears, dogYears) {
    var ownedCat = catYears < 15 ? 0 : catYears < 24 ? 1 : 2 + Math.floor((catYears-24)/4)
    var ownedDog = dogYears < 15 ? 0 : dogYears < 24 ? 1 : 2 + Math.floor((dogYears-24)/5)
    return [ownedCat, ownedDog]
  }
  