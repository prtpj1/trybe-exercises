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
    {
      titulo: "Harry Potter e o Prisioneiro de Azkaban",
      autor: "JK Rowling",
      editor: "Rocco",
    },
  ],
};


let favorito1 = leitor.livrosFavoritos[0];
let favorito2 = leitor.livrosFavoritos[1];
let favs = leitor.livrosFavoritos[0];

let fav1 = favorito1["titulo"];
let fav2 = favorito2["titulo"];

for (let index in favs) {
  if (index === "titulo" && fav1 !== " " && fav2 !== " ") {
    console.log(leitor.nome + " tem 2 livros favoritos");
  }
}



