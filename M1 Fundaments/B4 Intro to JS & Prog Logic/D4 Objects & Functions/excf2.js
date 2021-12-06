function maiorValor(numb) {
  let nMaior = numb[0];
  for (let i = 0; i < numb.length; i += 1) {
    if (nMaior < numb[i]) {
      nMaior = numb[i];
    }
  }
  console.log(nMaior);
}
maiorValor([2, 33, 6, 7, 10, 11]);
