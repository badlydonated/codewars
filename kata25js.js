//I didn't even try to attempt this.  
//I don't understand objects or classes and what to do with them. 
String.prototype.toJadenCase = function () {
    
  };

  //codewars solution
  String.prototype.toJadenCase = function () { 
    return this.split(" ").map(function(word){
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
  }

//I don't even know how to test if this works 