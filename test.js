// importar la función sum del archivo app.js
const { sum } = require('./app.js');

// comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

/* Mi CODIGO */

test("One euro should be 1.206 dollars", function(){
    const { fromEuroToDollar } = require('./app.js')
    const dollars = fromEuroToDollar(3.5)
    const expected = 3.5 * 1.2; 
    expect(expected).toBe(dollars);
})
test("One dollar should be 127.9 Japan YEN", function(){
const { fromDollarToYen } = require('./app.js')
    //import the function from app.js
    const yen = fromDollarToYen(3.5)
    const expected = 3.5 * 127.9; 
    expect(expected).toBe(yen);
})

test("One YEN should be 0.8 England Pound", function(){
    const { fromYanToPound } = require('./app.js')
    const Pound = fromYanToPound(3.5)
    const expected = 3.5 * 0.8; 
    expect(expected).toBe(Pound);
})
