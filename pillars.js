// There are pillars near the road. 
// The distance between the pillars is the same and the width of the pillars is the same. 
// Your function accepts three arguments:

// number of pillars (≥ 1);
// distance between pillars (10 - 30 meters);
// width of the pillar (10 - 50 centimeters).
// Calculate the distance between the first and the last pillar in centimeters 
// (without the width of the first and last pillar).

// my attempt
// take in 3 parameters: number of pillars, the distance between pillars, and the width of the pillar
// return the distance between the first and last pillar

function pillars(numPill, dist, width) {
    let newNumPill = numPill - 2
    let distInCm = dist * 100
    let betweenNumPil = numPill - 1

    if(numPill <= 1){
        return 0
    } else
    return (newNumPill * width) + (betweenNumPil * distInCm)
}


console.log(pillars(1, 10, 10) , 0)
console.log(pillars(2, 20, 25) , 2000);
console.log(pillars(11, 15, 30) , 15270);

// Codewars solutions
function pillars(num_pill, dist, width) {
    return num_pill >1 ? (num_pill-1) * dist * 100 + (num_pill - 2) * width : 0;
  }

// ---------------------------------
function pillars(num_pill, dist, width) {
    if (num_pill < 2) return 0;
    const widthAllPillars = (num_pill - 2) * width;
    const distAll = (num_pill - 1) * (dist * 100);
    
    return distAll + widthAllPillars;
}