// Inspired by the development team at Vooza, write the function that
// accepts the name of a programmer, and
// returns the number of lightsabers owned by that person.
// The only person who owns lightsabers is Zach, by the way. 
// He owns 18, which is an awesome number of lightsabers. Anyone else owns 0.

// Note: your function should have a default parameter.

// For example(Input --> Output):

// "anyone else" --> 0
// "Zach" --> 18

// My attempt
// take in a name/string, default parameter
// return number of ls owned by the named parameter
// only 'Zach' owns ls. He owns 18
// 'anyone else' owns 0.

function howManyLightsabersDoYouOwn(name, ae = 0) {
    if (name === 'Zach'){
        return 18
    } else return ae
}

console.log( howManyLightsabersDoYouOwn(), 0 )
console.log( howManyLightsabersDoYouOwn("Zach"), 18 )
console.log( howManyLightsabersDoYouOwn("Adam"), 0 )

// Codewars solutions
function howManyLightsabersDoYouOwn(name) {
  return name === 'Zach' ? 18 : 0;
}