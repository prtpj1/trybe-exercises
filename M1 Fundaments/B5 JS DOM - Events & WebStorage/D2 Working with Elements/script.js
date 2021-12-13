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
sectionLeft.className = 'left-content';
main.appendChild(sectionLeft);

//Part VI
let sectionRight = document.createElement('section');
sectionRight.className = 'right-content';
main.appendChild(sectionRight);

//Part VII
let imgElement = document.createElement('img');
imgElement.className = 'small-image';
imgElement.src = 'https://picsum.photos/200';
sectionLeft.appendChild(imgElement);


//Part VIII
let ui = document.createElement('ul');
sectionRight.appendChild(ui);
let numbers = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis',
'Sete', 'Oito', 'Nove', 'Dez'];
for (let i in numbers) {
    let li = document.createElement('li');
    li.innerHTML = numbers[i];
    ui.appendChild(li);
}

//Part IX
for (let i = 0; i < 3; i+=1){
    let h3 = document.createElement('h3');
    h3.innerHTML = 'Show ' + i;
    main.appendChild(h3);
}

//Part X
let title = document.querySelector('h1');
title.className = 'title';
