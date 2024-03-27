function disemvowel(str) {
    return str.replaceAll('a','')
  }
console.log(disemvowel('happy'))

//Didn't get this one.  Lots of regex solutions. 
//Here are the non regex solutions.
const disemvowel = (str) => {
	const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
	let newStr = '';
	for (let i = 0; i <= str.length; i++) {
		let char = str.charAt(i);
		if (vowels.indexOf(char) == -1) {
			newStr += char;
		}
	}
		return newStr;
		
	
}

const vowels = 'aeiou';

function disemvowel(str) {
  return str
    .split('')
    .filter(letter => !vowels.includes(letter.toLowerCase()))
    .join('');
}