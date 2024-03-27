// In this little assignment you are given a string of space separated numbers, 
// and have to return the highest and lowest number.

function highAndLow(numbers){
    let tempArr = numbers.split(' ').map(Number)
        
        let minVal = Math.min(...tempArr)
        let maxVal = Math.max(...tempArr)
    
        let minmax = [maxVal,minVal]

        let highLow = minmax.join(' ')
        
        return highLow
     
  }
  console.log(highAndLow('1 2 -3 4 5'))

  //codewars solutions
  function highAndLow(numbers){
    numbers = numbers.split(' ');
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
  }


  function highAndLow(numbers){
    numbers = numbers.split(' ').map(Number);
    return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
  } 

  function highAndLow(numbers){
    let arr = numbers.split(' ').map(Number);  
    return Math.max(...arr) + ' ' + Math.min(...arr);
  }