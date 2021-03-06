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

input.addEventListener('input', function (event) {
  let classTech = document.querySelector('.tech');
  classTech.innerText = event.target.value;
});

myWebpage.addEventListener('dblclick', doubleC);
myWebpage.addEventListener('mouseover', overColor);

function doubleC () {
  window.open('https://prtpj1.github.io/');
}

function overColor (event) {
  event.target.style.color = 'cyan';
}



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
