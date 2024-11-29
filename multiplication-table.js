// Your task, is to create N×N multiplication table, of size provided in parameter.

// For example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// For the given example, the return value should be:

// [[1,2,3],[2,4,6],[3,6,9]]

// My attempt
// take in a number
// return an array of multiplication tables arrays 
// 

multiplicationTable = function(size) {
    let obj = {}
    for(let i = 1; i <= size; i++){
        let count = 1
        while (count <= size){
            let table = i * count
            if(obj[table]){
                obj[table].push(i) 
            }else {
                obj[table] = [i]
            }
            count++
        }
    }
    return Object.values(obj)
} 

console.log(multiplicationTable(3))

// Codewars solution
multiplicationTable = function(size) {
    var result = [];
  
    for (var i = 0; i < size; i++) {
      result[i] = [];
      for(var j = 0; j < size; j++) {
        result[i][j] = (i + 1) * (j + 1);
      }
    }
    
    return result
  }