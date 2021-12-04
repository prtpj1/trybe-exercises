function  maiorValor(numb) {
  let n1 = numb[0];
  let nMaior = [];
  let mValor = [];
  for (let i = 0; i < numb.length; i+=1) {
    if(n1 < numb[i]) {
      nMaior = numb[i];
    }
  }
  mValor = numb.indexOf(nMaior);
  console.log(mValor);
}

maiorValor([2, 3, 6, 7, 10, 1]);
