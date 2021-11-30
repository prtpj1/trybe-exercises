let n = 5;
let aste = "*";
let espaco = " ";

for (let i = 1; i <= n; i += 1) {
  let buraco = n - i;
  console.log(espaco.repeat(buraco) + aste.repeat(i));
}
