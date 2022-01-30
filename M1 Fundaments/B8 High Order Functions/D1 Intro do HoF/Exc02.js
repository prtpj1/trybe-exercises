const numberCheck = (myNumber, number) =>  myNumber === number;

const result = (myNumber, callback) => {
	const number = Math.floor((Math.random()*5)+1);
	console.log(number);
	return callback(myNumber, number) ? 'Lucky day, you won!' : 'Try again!';
};

console.log(result(5, numberCheck));