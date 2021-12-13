//Part I
let h1 = document.createElement('h1');
h1.innerText = 'Exercicio 5.2 - Javascript DOM';
document.body.appendChild(h1);

//Part II
let main = document.createElement('main');
main.className = 'main-content';
document.body.appendChild(main);

//Part III
let sectionCenter = document.createElement('section');
sectionCenter.className = 'center-content';
main.appendChild(sectionCenter);

//Part IV
let p = document.createElement('p');
p.innerHTML = 'Algum texto';
sectionCenter.appendChild(p);

//Part V
let sectionLeft = document.createElement('section');
sectionLeft.className = ('left-content');
main.appendChild('sectionLeft');

//Part VI
let sectionRight = document.createElement('section');
sectionRight.className = ('right-content');
main.appendChild = (sectionRight);

