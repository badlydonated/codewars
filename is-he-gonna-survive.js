// A hero is on his way to the castle to complete his mission. 
// However, he's been told that the castle is surrounded with a couple of powerful dragons! 
// each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. 
// Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

// Return true if yes, false otherwise :)

// My attempt
// P: take in two pos int. one is the number of bullets, the other is the number of dragons
// R: return true if there are enough bullets to kill the dragons. False if not.
// E: 10 bullets, 5 dragons -> true
    // 7 bullets, 4 dragons -> false
// P: Since each dragon takes 2 bullets to be killed
    // the number of dragons should be multiplied by two
    // and if the bullets are equal to or greater, the outcome is true

function hero(bullets, dragons){
    return bullets >= dragons * 2 ? true: false
}


console.log(hero(10, 5)) //, true);
console.log(hero(7, 4)) //, false);
console.log(hero(4, 5)) //, false);
console.log(hero(100, 40)) //, true);
console.log(hero(1500, 751)) //, false);
console.log(hero(0, 1)) //, false);

// Codewars solutions
function hero(bullets, dragons){
    return bullets >= dragons * 2
  }

// ----------------------------
const hero = (bullets, dragons) => dragons * 2 <= bullets;  