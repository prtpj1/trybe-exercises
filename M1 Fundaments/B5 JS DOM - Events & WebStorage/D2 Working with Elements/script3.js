let novoIrmao = document.querySelector('#pai');
let newElement = document.createElement('div');
newElement.id = 'bastardinho';
novoIrmao.appendChild(newElement);


let novoFilhoOnde = document.querySelector('#elementoOndeVoceEsta');
let newElement2 = document.createElement('div');
newElement2.id = 'OndeEstouJr';
novoFilhoOnde.appendChild(newElement2);


let novoFilhoDoFilho = document.querySelector('#primeiroFilhoDoFilho');
let newElementJose = document.createElement('div');
newElementJose.id = 'Jose';
novoFilhoDoFilho.appendChild(newElementJose);

let filhos = document.querySelector('#paiDoPai').firstElementChild.children;
// 

for(i = 0; i < filhos.length; i+=1){
    let classFilhos = filhos[i];
    classFilhos.className = 'familia';
}

let papai = document.querySelectorAll('.familia');

for (i = 0; i < papai.length; i+=1){
    let elimina = papai[i];
    
    if(elimina.innerHTML.includes('elementoOndeVoceEsta')) {
        papai.removeChild(elimina);
    }
}





/*

<main id="paiDoPai">
        <section id="pai">*
          <section id="primeiroFilho"></section>
          <section id="elementoOndeVoceEsta">*
            <section id="primeiroFilhoDoFilho"></section>*
            <section id="segundoEUltimoFilhoDoFilho"></section>
          </section>
          Atenção!
          <section id="terceiroFilho"></section>
          <section id="quartoEUltimoFilho"></section>
        </section>
      </main>

let novoIrmao = document.querySelector('#pai');

let newElement = document.createElement('div');
newElement.id = 'bastardinho';

novoIrmao.appendChild(newElement);


let novoFilhoOnde = document.querySelector('#elementoOndeVoceEsta');
let newElement2 = document.createElement('div');

newElement2.id = 'OndeEstouJr';

novoFilhoOnde.appendChild(newElement2);


let novoFilhoDoFilho = document.querySelector('#primeiroFilhoDoFilho');
let newElementJose = document.createElement('div');

newElementJose.id = 'Jose';

novoFilhoDoFilho.appendChild(newElementJose);


document.querySelector('#Jose').parentNode.parentNode.nextElementSibling; */