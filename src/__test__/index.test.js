const randomStrings = require('../index');

//Proof if test works
// test('Proof funcionality', () => {
//     expect(typeof (randomStrings())).toBe('string');
// });

describe('Proof fucntionalities of `RandomStrings`', () => {
    test('Proof funcionality', () => {
        expect(typeof (randomStrings())).toBe('string');
    });
    test('Check if not exists a city', () => {
        expect(randomStrings()).not.toMatch(/Cordoba/);
    });
});