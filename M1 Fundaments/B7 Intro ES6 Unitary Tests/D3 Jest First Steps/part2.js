function myRemove(arr, item) {
	let newArr = [];
	for (let index = 0; index < arr.length; index += 1) {
	  if (item !== arr[index]) {
		newArr.push(arr[index]);
	  }
	}
	console.log(newArr);
	return newArr;
	
  }
  myRemove([1, 2, 3, 4], 5);
  
module.exports = myRemove;