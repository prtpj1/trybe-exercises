const fatorial = (number) => {
	let counter = [1];
	for (let i = number; i > 1; i -= 1) {
		counter *= i;
	}
	return counter;
}

console.log(fatorial(4));
