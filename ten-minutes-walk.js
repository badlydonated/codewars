
// You live in the city of Cartesia where all roads are laid out in a perfect grid. 
// You arrived ten minutes too early to an appointment, 
// so you decided to take the opportunity to go for a short walk. 
// The city provides its citizens with a Walk Generating App on their phones 
// -- everytime you press the button it sends you an array of one-letter strings 
// representing directions to walk (eg. ['n', 's', 'w', 'e']). 
// You always walk only a single block for each letter (direction) 
// and you know it takes you one minute to traverse one city block, 
// so create a function that will return true if the walk the app gives you will 
// take you exactly ten minutes (you don't want to be early or late!) 
// and will, of course, return you to your starting point. Return false otherwise.

//my attempt
//P: take in an array of strings n, s, e, w
//R: return true if less than 10min and returns to the same place
//E: see above
//P: 1min per letter. how to calc back to the same place

function isValidWalk(walk) {
    let result = walk.filter(dir =>{
        if(dir)
    })
  }
console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s'])) //'should return true'
console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e'])), //'should return false'
console.log(isValidWalk(['w'])), //'should return false'
console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s'])) //'should return false'

//codewars solutions
function isValidWalk(walk) {
    var dx = 0
    var dy = 0
    var dt = walk.length
    
    for (var i = 0; i < walk.length; i++) {
      switch (walk[i]) {
        case 'n': dy--; break
        case 's': dy++; break
        case 'w': dx--; break
        case 'e': dx++; break
      }
    }
    
    return dt === 10 && dx === 0 && dy === 0
  }

//-----------------------
function isValidWalk(walk) {
    function count(val) {
      return walk.filter(function(a){return a==val;}).length;
    }
    return walk.length==10 && count('n')==count('s') && count('w')==count('e');
  }