const sum = require('./part1');

describe('1 - Testing the function `sum`', () => {
  it('Test if return the sum of the two values', () => {
    expect(sum(4, 5)).toBe(9);
    expect(sum(0, 0)).toBe(0);
  });
  it('Test if sum throw an error when one or both parameters are a string', () => {
	expect(function () {sum(4, '5')}).toThrowError();
    expect(function () {sum(4, '5')}).toThrowError(new Error('parameters must be numbers'));
	
  });
});

