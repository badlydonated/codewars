// When provided with a number between 0-9, return it in words. Note that the input is guaranteed to be within the range of 0-9.

// Input: 1

// Output: "One".

// If your language supports it, try using a switch statement.

// My attempt
// P: take in a positive whole number between 0 and 9
// R: return the 'word' of the whole number given
// E: input 1 -> "One"
// P: switch statement for input

function switchItUp(number){
    switch (number) {
        case 0:
            return "Zero"
            break;
        case 1:
            return "One"
            break;
        case 2: 
            return "Two"
            break;
        case 3:
            return "Three"
            break;
        case 4:
            return "Four"
            break;
        case 5: 
            return "Five"
            break;
        case 6:
            return "Six"
            break;
        case 7: 
            return "Seven"
            break;
        case 8:
            return "Eight"
            break;
        case 9:
            return "Nine"
            break;    
    }
}


console.log(switchItUp(1)) // ,"One");
console.log(switchItUp(3)) // ,"Three");
console.log(switchItUp(5)) // ,"Five")

// Codewars solutions
switchItUp=n=>["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"][n]