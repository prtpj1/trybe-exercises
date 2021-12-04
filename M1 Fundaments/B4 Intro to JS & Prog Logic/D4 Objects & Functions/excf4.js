function  maisCharacteres(str) {
  let char0 = str[0];
  let maisChar = '';
  let result = [];
  
  for (let i = 0; i < str.length; i+=1) {
    if(maisChar.length < str[i].length) {
      maisChar = str[i];
    }
    result = maisChar;
  }
  
  console.log(result);
}

maisCharacteres(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']);
