// Your task is to add a new property usersAnswer to every object in the array questions. 
// The value of usersAnswer should be set to null. The solution should work for array of any length.


// My attempt
let questions = [{
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0
}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0
}];
function addProperty(questions){
    let propAdder = questions.forEach((el)=>{
        el.userAnswer = null
    })
    return questions
}

console.log(addProperty(questions))