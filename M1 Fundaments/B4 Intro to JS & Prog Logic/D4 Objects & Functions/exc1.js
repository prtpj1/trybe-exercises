//Part I
let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  note: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

console.log("Bem-vinda, " + info.personagem);

//Part II
info["recorrente"] = "Sim";
console.log(info);

//Part III
for (let i in info) {
  console.log(i);
}

//Part IV
for (let i in info) {
  console.log(info);
}

//Part V
let info2 = {
  personagem1: {
    nome: "Margarida",
    origem: "Pato Donald",
    note: "Namorada do personagem principal nos quadrinhos do Pato Donald",
    recorrente: "sim",
  },
  personagem2: {
    nome: "Tio Patinhas",
    origem: "Christmas on Bear Mountain",
    note: "Dell's Four Color Comics #178 e O último MacPatinhas",
    recorrente: "sim",
  },
};

console.log(info2.personagem1.nome + " e ", info2.personagem2.nome);
console.log(info2.personagem1.origem + " e ", info2.personagem2.origem);
console.log(info2.personagem1.note + " e ", info2.personagem2.note);

let pers1 = info2.personagem1.recorrente;
let pers2 = info2.personagem2.recorrente;

for (let index in info2.personagem1) {
  if (index === "recorrente" && pers1 === "sim" && pers2 === "sim") {
    console.log("Ambos recorrentes");
  }
}


