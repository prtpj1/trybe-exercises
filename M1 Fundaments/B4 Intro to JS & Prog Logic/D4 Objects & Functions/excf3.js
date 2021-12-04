function  menorValor(numb) {
  let n1 = numb[0];
  let nMenor = [];
  let mValor = [];
  for (let i = 0; i < numb.length; i+=1) {
    if(n1 > numb[i]) {
      nMenor = numb[i];
    }
  }
  mValor = numb.indexOf(nMenor);
  console.log(mValor);
}

menorValor([2, 4, 6, 7, 10, 0, -3]);
