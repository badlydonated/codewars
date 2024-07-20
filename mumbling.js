// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

//my attempt
//P: take in a string of letters
//R: return a new string with each letter of the original string capitalized and starting its own string but with a duplicate letters
    //adding one for each index.
//E: see above
//P: first capitalize each letter in the string
    //split the letters into an array
    //loop through and add the dupe letters 

function accum(s) {
	let letterArr = s.toLowerCase().split('')
    let dupesArr = []
    letterArr.forEach((el,ind) =>{
        dupesArr.push(el.repeat(ind +1))
    })
    let capDupes = dupesArr.map(word => word.charAt(0).toUpperCase() + word.slice(1)) 
    return capDupes.join('-')
}

    console.log(accum("ZpglnRxqenU")) //, "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu");
	console.log(accum("NyffsGeyylB")) //, "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb");
	console.log(accum("MjtkuBovqrU")) //, "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu");
	console.log(accum("EvidjUnokmM")) //, "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm");
	console.log(accum("HbideVbxncC")) //, "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc");

//codewars solutions
function accum(s) {
	return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}

//--------------------
function accum(s) {
	return s.split('').map((x,index) => x.toUpperCase()+Array(index+1).join(x.toLowerCase())).join('-');
}