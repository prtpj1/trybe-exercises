const custo = 100;
const venda = 150;
let imposto = (custo * 20) / 100;
let custoT = custo + imposto;
let lucro;
let lucro1K;

lucro = venda - custoT;
lucro1K = lucro * 1000;

if (custo > 0 || venda > 0) {
  console.log(lucro1K);
} else {
  console.log("valores de custo ou de venda inválidos");
}

//(100*20)/100 20% imposto
//erro de custo ou venda < 0
//lucro = venda - (custo + imposto)
//
