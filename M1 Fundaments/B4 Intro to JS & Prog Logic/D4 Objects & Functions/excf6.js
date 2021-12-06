function somatorio(inteiro) {
  let soma = 0;

  for (let i = 0; i <= inteiro; i += 1) {
    
    soma = soma + i;
  }

  console.log(soma);
}

somatorio(5);
