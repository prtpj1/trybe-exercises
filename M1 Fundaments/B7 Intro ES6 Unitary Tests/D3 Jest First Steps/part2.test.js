const myRemove = require('./part2');

describe('Testing the function myRemove', () => {
  it('Test if return the array without the chosen value', ()=> {
	  expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
	  expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
  it('Test if doesnt return the expected array with the chosen value', ()=> {
	  expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
});
