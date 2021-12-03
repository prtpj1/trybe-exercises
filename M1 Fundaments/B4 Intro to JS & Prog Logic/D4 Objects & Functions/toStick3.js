let nome = "João";

function bomDiaTryber(nome) {
  console.log("Bom dia, " + nome);
}

bomDiaTryber("Pedro");
bomDiaTryber("Maria");
bomDiaTryber("João");

let status = "Deslogado";

function logarDeslogar() {
  if (status === "Deslogado") {
    status = "Logado";
  } else {
    status = "Deslogado";
  }
}

console.log(status);

function maiorNum(num1, num2) {
  if (num1 > num2) {
    return num1 + " é maior do que " + num2;
  } else if (num2 > num1) {
      return num2 + " é maior do que " + num1;
  } else {
      return "Os números são iguais!"
  }
}

console.log(maiorNum(10, 20));
console.log(maiorNum(2, -5));
console.log(maiorNum(1, 1));
