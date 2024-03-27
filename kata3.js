// DESCRIPTION:
// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

//My solution
function betterThanAverage(classPoints, yourPoints) {
    let sum = 0
    classPoints = classPoints.concat(yourPoints)
    for(let i = 0; i < classPoints.length; i++){
      sum = (sum + classPoints[i])
    }  
      let avg = sum/classPoints.length
      if(yourPoints > avg){
        return true
          }else{
            return false
          }
  }
betterThanAverage([2,3],5)

//top codewars solution
function betterThanAverage(classPoints, yourPoints) {
    return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length; 
  }