//toStick I
let novoIrmao = document.querySelector('#pai');

let newElement = document.createElement('div');
newElement.id = 'bastardinho';

novoIrmao.appendChild(newElement);

//toStick II
let novoFilhoOnde = document.querySelector('#elementoOndeVoceEsta');
let newElement2 = document.createElement('div');

newElement2.id = 'OndeEstouJr';

novoFilhoOnde.appendChild(newElement2);

//toStick III
let novoFilhoDoFilho = document.querySelector('#primeiroFilhoDoFilho');
let newElementJose = document.createElement('div');

newElementJose.id = 'Jose';

novoFilhoDoFilho.appendChild(newElementJose);

//toStick IV
document.querySelector('#Jose').parentNode.parentNode.nextElementSibling;