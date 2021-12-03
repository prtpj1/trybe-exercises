let array = ["java", "javascript", "python", "html", "css"];

let maior = " ";
let menor = array[0];

for (let i = 0; i < array.length; i += 1) {
  if (maior.length < array[i].length) {
    maior = array[i];
  }
}

for (let i = 0; i < array.length; i += 1) {
  if (menor.length > array[i].length) {
    menor = array[i];
  }
}
console.log(maior);
console.log(menor);
