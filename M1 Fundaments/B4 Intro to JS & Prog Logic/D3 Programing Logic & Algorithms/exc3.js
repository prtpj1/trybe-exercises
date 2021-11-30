let n = 5;
let aste = "*";
let espaco = " ";

for (let i = 1; i <= n; i += 1) {
  console.log(espaco.repeat(n - i) + aste.repeat(i));
}
