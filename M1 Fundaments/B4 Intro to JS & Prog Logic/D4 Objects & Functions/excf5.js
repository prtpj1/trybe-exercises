function maisRepete(inteiro) {
  let repetido = inteiro[0];
  let result;

  for (let i = 0; i < inteiro.length; i += 1) {
    if (repetido == inteiro[i]) {
      result = repetido;
    }
  }

  console.log(result);
}

maisRepete([2, 3, 2, 5, 8, 2, 3, 5, 5, 5]);
