const biggerWord = (phrase) => {
	let arrWord = phrase.split(' ');
	let bigger = 0;
	let word = ' ';

	arrWord.forEach((wrd) => {
		if (bigger < wrd.length) {
			bigger = wrd.length;
			word = wrd;
		}
	});
	return word;
};
console.log(biggerWord('Antônio foi no banheiro e não sabemos o que aconteceu'));

