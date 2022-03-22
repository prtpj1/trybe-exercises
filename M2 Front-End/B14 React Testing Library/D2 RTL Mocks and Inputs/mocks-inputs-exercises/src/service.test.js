const service = require('./service');

describe('Testing functions in mock and input exercise', () => {
  it('Testing if the func was called, which number was returned and how many times have been called', () => {
    service.randomNumber = jest.fn().mockReturnValue(10);

    expect(service.randomNumber()).toBe(10);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
  });

  it('Testing if the function receive 2 parameters and return the division between first and second. This should happens only once', () => {
    service.randomNumber = jest.fn().mockImplementationOnce((a, b) => a / b);

    expect(service.randomNumber(4, 2)).toBe(2);
    expect(service.randomNumber).toHaveBeenCalled();

    expect(service.randomNumber).toHaveBeenCalledTimes(1);
  });

  it('Testing if the function receive 3 parameters and return the multiplication between the three numbers.', () => {
    service.randomNumber = jest.fn().mockImplementation((a, b, c) =>  a * b * c);

    expect(service.randomNumber(4, 2, 1)).toBe(8);
    expect(service.randomNumber).toHaveBeenCalled();
  });
  it('Testing if the function was reseted, receive only 1 parameter and return the double', () => {
    service.randomNumber.mockReset();

    service.randomNumber.mockImplementation(a => a * 2);

    expect(service.randomNumber(4)).toBe(8);
    expect(service.randomNumber).toHaveBeenCalled();
  });
});
