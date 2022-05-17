let salBruto = 3000;

let salLiq;

let aliqINSS;
let iNss;
let salBase;

let aliqIR;
let parcela;
let iR;



if (salBruto <= 1556.94){
    aliqINSS = 8;
    iNss = (salBruto * aliqINSS) / 100
}else if (salBruto >= 1556.95 && salBruto <= 2594.92){
    aliqINSS = 9;
    iNss = (salBruto * aliqINSS) / 100
}else if (salBruto >= 2594.93 && salBruto <= 5189.82){
    aliqINSS = 11;
    iNss = (salBruto * aliqINSS) / 100
}else if (salBruto > 5189.82){
    iNss = salBruto - 570.88;
}

salBase = salBruto - iNss;
if (salBase <= 1903.98){
    aliqIR = 0;
    iR = salBase
}else if (salBase >= 1903.99 && salBase <= 2826.65){
    aliqIR = 7.5;
    iR = ((salBase * aliqIR) / 100) - 142.80
}else if (salBase >= 2826.66 && salBase <= 3751.05){
    aliqIR = 15;
    iR = ((salBase * aliqIR) / 100) - 354.80
}else if (salBase >= 3751.06 && salBase <= 4664.68){
    aliqIR = 22.5;
    iR = ((salBase * aliqIR) / 100) - 636.13
}else if (salBase > 4664.68){
    aliqIR = 27.5;
    iR = ((salBase * aliqIR) / 100) - 869.36
}
salLiq = salBase - iR;


console.log(salLiq);