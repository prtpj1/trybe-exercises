const myFizzBuzz = require('./part3');

describe('Test the function `myFizzBuzz`', () => {
  it('Test if return "fizzbuzz"', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
  it('Test if return "fizz"', () => {
    expect(myFizzBuzz(6)).toBe('fizz');
  });
  it('Test if return "buzz"', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
  });
  it('Test if return the same value, if the value cant be divided for 3 or 5', () => {
    expect(myFizzBuzz(11)).toBe(11);
  });
  it('Test if return "false" when the parameter isnt a number', () => {
    expect(myFizzBuzz('15')).toBe(false);
  });
});
