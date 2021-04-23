// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7,3))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)

/* Mi codigo */
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}
/* Convertimos un dolar a yen */
/* const fromDollarToYen = (dolares) =>{

    return convercionAYen
} */

/* Convertimos un euro a dolar */

const fromDollarToYen = (dollar_amount) =>  {
    return (dollar_amount * oneEuroIs.JPY);
}

const fromEuroToDollar = (euro_amount) => {
    return (euro_amount * oneEuroIs.USD);
}

const fromYanToPound = (yan_amount) => {
    return (yan_amount * oneEuroIs.GBP);
}
module.exports = { sum , fromDollarToYen, fromEuroToDollar, fromYanToPound };