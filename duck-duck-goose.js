// The objective of Duck, duck, goose is to walk in a circle, tapping on each player's head until one is chosen.

// Task: Given an array of Player objects and an index (1-based), 
// return the name of the chosen Player(name is a property of Player objects, e.g Player.name)

// Example:

// duck_duck_goose([a, b, c, d], 1) should return a.name
// duck_duck_goose([a, b, c, d], 5) should return a.name
// duck_duck_goose([a, b, c, d], 4) should return d.name

// My attempt
class Player {
    constructor(name) {
        this.name = name;
    }
  }
let ex_names = ["a", "b", "c", "d", "c", "e", "f", "g", "h", "z"];
let players = ex_names.map((n) => new Player(n));

 function duckDuckGoose(players, goose) {
//     let index = goose -1
//     let obj = players.at(index)
//     return obj    
        for(let i = 0; i < goose-1; i++){
             return players[i]
        }
        
 }

   console.log(duckDuckGoose(players, 20)) //, "z");

// Codewars solutions
function duckDuckGoose(players, goose) {
  
    return players[(goose-1)%players.length].name
  }