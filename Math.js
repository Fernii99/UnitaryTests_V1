const calculatePrice = (price, VAT = 21) => { return price + price * VAT / 100 };

const fahrenheitToCelsius = (temp) => { return (temp - 32) / 1.8 }
const celsiusToFahrenheit = temp => { return (temp * 1.8 ) + 32 }

module.exports = {
    calculatePrice,
    fahrenheitToCelsius,
    celsiusToFahrenheit,
}