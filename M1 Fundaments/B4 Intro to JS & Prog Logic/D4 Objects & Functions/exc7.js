let leitor = {
  nome: "Julia",
  sobrenome: "Pessoa",
  idade: 21,
  livrosFavoritos: [
    {
      titulo: "O Pior Dia de Todos",
      autor: "Daniela Kopsch",
      editora: "Tordesilhas",
    },
  ],
};

let nomeC = leitor.nome + " " + leitor.sobrenome;
let livro = leitor.livrosFavoritos[0];

console.log("O livro favorito de " + nomeC + " se chama " + livro["titulo"]);
