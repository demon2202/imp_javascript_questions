function palindromeCheck(num) { 
	let numStr = num.toString(); 
	let result = numStr.split('').reverse().join(''); 
	return numStr === result; 
} 

console.log(palindromeCheck(121)); // true 
console.log(palindromeCheck(123)); // false
