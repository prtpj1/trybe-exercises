let novoIrmao = document.querySelector('#pai');
let novoElemento = document.createElement('div');
novoElemento.id = 'bastardinho';
novoIrmao.appendChild(novoElemento);

let novoFilhoOnde = document.querySelector('#elementoOndeVoceEsta');
let novoElemento2 = document.createElement('div');
novoElemento2.id = 'OndeEstouJr';
novoFilhoOnde.appendChild(novoElemento2);

let novoFilhoDoFilho = document.querySelector('#primeiroFilhoDoFilho');
let novoElementoJose = document.createElement('div');
novoElementoJose.id = 'Jose';
novoFilhoDoFilho.appendChild(novoElementoJose);

let pai = document.getElementById('pai');
let ondeEstou = document.getElementById('elementoOndeVoceEsta');
let filhoJose = document.getElementById('Jose');

for (let i = pai.childNodes.length - 1; i >= 0; i -= 1) {
  let filhoAtual = pai.childNodes[i];
  if (filhoAtual.id !== 'elementoOndeVoceEsta') {
    filhoAtual.remove();
  }
}
for (let i = ondeEstou.childNodes.length - 1; i >= 0; i -= 1) {
  let filhoAtual = ondeEstou.childNodes[i];
  if (filhoAtual.id !== 'primeiroFilhoDoFilho') {
    filhoAtual.remove();
  }
}
filhoJose.remove();
/* 
<main id='paiDoPai'>
        <section id='pai'>*
          <section id='primeiroFilho'></section>
          <section id='elementoOndeVoceEsta'>*
            <section id='primeiroFilhoDoFilho'></section>*
            <section id='segundoEUltimoFilhoDoFilho'></section>
          </section>
          Atenção!
          <section id='terceiroFilho'></section>
          <section id='quartoEUltimoFilho'></section>
        </section>
      </main>
 */