const firstLi = document.getElementById("first-li");
const secondLi = document.getElementById("second-li");
const thirdLi = document.getElementById("third-li");
const input = document.getElementById("input");
const myWebpage = document.getElementById("my-spotrybefy");

let clickTech = document.getElementsByTagName("li");

firstLi.addEventListener("click", function () {
  for (let i = 0; i < clickTech.length; i += 1) {
    clickTech[i].classList.remove("tech");
  }
  firstLi.classList.add("tech");
});

secondLi.addEventListener("click", function () {
  for (let i = 0; i < clickTech.length; i += 1) {
    clickTech[i].classList.remove("tech");
  }
  secondLi.classList.add("tech");
});

thirdLi.addEventListener("click", function () {
  for (let i = 0; i < clickTech.length; i += 1) {
    clickTech[i].classList.remove("tech");
  }
  thirdLi.classList.add("tech");
});

// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portifólio?

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

// Segue abaixo um exemplo do uso de event.target:

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = "Opção reiniciada";
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener("dblclick", resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.
