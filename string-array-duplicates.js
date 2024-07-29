// In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters 
// from each string in the array.

// For example:

// dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

// dup(["kelless","keenness"]) = ["keles","kenes"].

// Strings will be lowercase only, no spaces. See test cases for more examples.

//my attempt
function dup(s) {
    let str = ''
    if (s.length == 0)
        return s
    let loop = s.forEach((word) =>{
        for (let i = 0; i < s.length - 1; i++) {
            if (s[i] != s[i + 1]) {
                str += s[i];
            }
        }
    })
    return str
}


console.log(dup(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"])) //,['codewars','picaniny','hubububo']);
console.log(dup(["abracadabra","allottee","assessee"])) //,['abracadabra','alote','asese']);
console.log(dup(["kelless","keenness"])) //, ['keles','kenes']);
console.log(dup(["Woolloomooloo","flooddoorroommoonlighters","chuchchi"])) //, ['Wolomolo','flodoromonlighters','chuchchi']);
console.log(dup(["adanac","soonness","toolless","ppellee"])) //, ['adanac','sones','toles','pele']);
console.log(dup(["callalloo","feelless","heelless"])) //, ['calalo','feles','heles']);
console.log(dup(["putteellinen","keenness"])) //, ['putelinen','kenes']);
console.log(dup(["kelless","voorraaddoosspullen","achcha"])) //, ['keles','voradospulen','achcha']);

//codewars solutions
function dup(s) {
	return s.map(w => {
		return w.split('').filter((c, i, arr) => {
			return c !== arr[i - 1];
		}).join('');
	});
}

//-----------------------------
function dup(array) {
    return array.map(word => word.split('').filter( (letter, index) => letter !== word[index + 1]).join(''))
    }

//-----------------------------
const dup = (s) =>
    s.map((str) =>
      str
        .split('')
        .filter((c, i) => c !== str[i - 1])
        .join('')
    )