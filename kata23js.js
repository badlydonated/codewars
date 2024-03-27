//gave up another one :(
//that's 3 in a row. I don't know what I'm doing.
function nbYear(p0, percent, aug, p) {
    let firstYear = Math.floor((p0 +(p0 * (percent/100) +aug)))
    let totYears = 0
    totPop = 0

   while(totPop >= p){
       totPop =  Math.floor((firstYear +(firstYear * (percent/100) +aug)))
        totYears++
   }  
    return totYears
}
nbYear(1500,5,100,5000)

//codewars answers
function nbYear(p0, percent, aug, p) {
    
    for (var years = 0; p0 < p; years++) {
      p0 = Math.floor(p0 + p0 * percent / 100 + aug);
    }
    return years
  }


  
  function nbYear(p0, percent, aug, p) {
    var count = 0;
    while (p0 < p) {
      p0 = Math.floor((1 + percent / 100) * p0 + aug);
      count++
    } 
    return count;
  }