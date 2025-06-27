// Create a combat function that takes the player's current health and the amount of damage received, 
// and returns the player's new health. Health can't be less than 0.

// take in two numbers - health, damage
// if health is <= 0 - error
// else return health - damage

function combat(health, damage) {
    let result = health - damage
    if (result <= 0){
        return 0
    }else return result
}


console.log(combat(100, 5), 95);
console.log(combat(92, 8), 84);
console.log(combat(20, 30), 0);

// Codewars solutions
function combat(health, damage) {
	return health < damage ? 0 : health - damage
}

// -----------------------
function combat(health, damage) {
	return health < damage ? 0 : health - damage
}