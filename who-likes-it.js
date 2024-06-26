// You probably know the "like" system from Facebook and other pages. 
// People can "like" blog posts, pictures or other items. 
// We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

// Note: For 4 or more names, the number in "and 2 others" simply increases.
//My attempt
//P: function takes in an array of names. empty array = no one likes this. 
//  more than one less than 3 = name and name like this. 
//  more than two less than 4 = name , name and name like this.
//  4 or more = name , name and (2 or however many to equate to total number of names) others like this.
//R: return the display text as shown above
//E: see above
//P: conditional to determine text format. loop through array to get number of names and names themselves.  

function likes(names) {
    if(names.length == 0){
        return "no one likes this"
    } else if(names.length == 1){
        return `${names[0]} likes this`
    } else if(names.length == 2){
        return `${names[0]} and ${names[1]} like this`
    } else if(names.length == 3){
        return `${names[0]}, ${names[1]} and ${names[2]} like this`
    } else if(names.length >= 4){
        return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
    }
}  
//console.log(likes([]))  
//console.log(likes(["peter"]))
//console.log(likes(["Jacob", "Alex"]))
//console.log(likes(["Max", "John", "Mark"]))
 console.log(likes(["Alex", "Jacob", "Mark", "Max"]))

//codewars solutions
function likes(names) {
    names = names || [];
    switch(names.length){
      case 0: return 'no one likes this'; break;
      case 1: return names[0] + ' likes this'; break;
      case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
      case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
      default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
    }
  }

//-----------------------------
function likes(names) {
    return {
      0: 'no one likes this',
      1: `${names[0]} likes this`, 
      2: `${names[0]} and ${names[1]} like this`, 
      3: `${names[0]}, ${names[1]} and ${names[2]} like this`, 
      4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`, 
    }[Math.min(4, names.length)]
  }
