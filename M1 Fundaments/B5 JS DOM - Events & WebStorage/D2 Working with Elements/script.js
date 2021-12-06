//toStick I
document.getElementById('elementoOndeVoceEsta');

//toStick II
document.querySelector('#elementoOndeVoceEsta').parentNode.parentNode.style.color = 'red';

//toStick III
document.querySelector('#elementoOndeVoceEsta').children.primeiroFilhoDoFilho.innerText = "Filho do Filho";

//toStick IV
document.querySelector('#pai').firstElementChild;

//toStick V
document.querySelector('#elementoOndeVoceEsta').previousElementSibling;

//toStick VI
document.querySelector('#elementoOndeVoceEsta').nextSibling

//toStick VII
document.querySelector('#elementoOndeVoceEsta').nextElementSibling

//toStick VIII
document.querySelector('#pai').lastElementChild.previousElementSibling