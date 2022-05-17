const upperCase = (word, callback) => {
    setTimeout(() => {
       callback(word.toUpperCase()); 
    }, 500);
};

it('UpperCase "trybe" to "TRYBE"', (done) => {
    upperCase('trybe', (word) => {
        try {
            expect(word).toBe('TRYBE');
            done();
        } catch (error) {
            done(error);
        }
    })
})