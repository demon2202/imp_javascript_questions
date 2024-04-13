function isArmstrong(number) {
	const digits = number.toString().split('');
	const order = digits.length;
	const sum = digits.reduce(
		(acc, digit) =>
			acc + Math.pow(parseInt(digit), order), 0);

	if (sum === number) {
		console.log(
			number + " is an Armstrong Number");
	}
	else {
		console.log
			(number + " is not an Armstrong Number");
	}
}

isArmstrong(9474);
isArmstrong(520);
