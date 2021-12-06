function  menorValor(numb) {
  let nMenor = numb[0];
  for (let i = 0; i < numb.length; i += 1) {
    if (nMenor > numb[i]) {
      nMenor = numb[i];
    }
  }
  console.log(nMenor);
}

menorValor([2, 4, 6, 7, -10, 0, -3]);
