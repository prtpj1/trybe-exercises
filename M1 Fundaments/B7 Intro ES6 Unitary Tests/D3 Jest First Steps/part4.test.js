const { encode, decode } = require('./part4');

describe('Test the functions "encode" and "decode"', () => {
  it('Test if encode and decode are functions', () => {
    expect(typeof encode).toEqual('function');
    expect(typeof decode).toEqual('function');
  });
  it('Test if encode converts the vowels to "1, 2, 3, 4 e 5" respectively', () => {
    expect(encode('a, e, i, o, u')).toBe('1, 2, 3, 4, 5');
  });
  it('Test if decode converts the numbers 1 to 5 into "a, e, i, o, u" recpectively', () => {
    expect(decode('1, 2, 3, 4, 5')).toBe('a, e, i, o, u');
  });
  it('Test if the consonants are not converted into numbers and the inverse', () => {
    expect(encode('a big bed without a good pillow')).toBe(
      '1 b3g b2d w3th45t 1 g44d p3ll4w',
    );
    expect(decode('1 b3g b2d w3th45t 1 g44d p3ll4w')).toBe(
      'a big bed without a good pillow',
    );
  });
  it('Test if encode and decode return the same numbers of characters passed as parameters', () => {
    expect(encode('spider-man').length).toEqual(10);
    expect(decode('I am BATMAN').length).toEqual(11);
  });
});
