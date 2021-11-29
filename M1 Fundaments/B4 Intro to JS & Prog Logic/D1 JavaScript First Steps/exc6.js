let peca = "Rei";
let pecaL = peca.toLowerCase();

switch (pecaL) {
  case "cavalo":
    console.log("move em L");
    break;
    case "bispo":
    console.log("move em diagonal");
    break;
    case "torre":
    console.log("move em linha reta");
    break;
    case "peão":
    console.log("move para frente uma casa");
    break;
    case "rainha":
    console.log("move em qualquer direção");
    break;
    case "rei":
    console.log("move em qualquer direção uma casa");
    break;
  default:
    console.log("Peça inexistente");
}
