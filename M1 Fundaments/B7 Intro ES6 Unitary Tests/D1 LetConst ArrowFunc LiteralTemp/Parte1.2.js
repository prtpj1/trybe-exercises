const oddsAndEvens = [13, 3, 4, 10, 7, 2];

oddsAndEvens.sort((n1, n2) => {
	return n1 - n2;
});

console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉
