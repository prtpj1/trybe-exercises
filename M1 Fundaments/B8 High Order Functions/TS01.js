// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'morango', 'uva'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['maçã', 'laranja', 'pera'];

const fruitSalad = (fruit, additional) => {
  const salada = [...specialFruit, ...additionalItens];
  return salada;
};

console.log(fruitSalad(specialFruit, additionalItens));