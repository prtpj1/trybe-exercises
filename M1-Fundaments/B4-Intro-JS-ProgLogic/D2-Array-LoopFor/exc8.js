let array = [];

for (let i = 0; i < 25; i += 1) {
  
  array[i] = array.push(i);
  console.log(array[i]);
}
