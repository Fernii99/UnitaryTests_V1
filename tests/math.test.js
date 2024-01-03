const { calculatePrice, celsiusToFahrenheit, fahrenheitToCelsius } = require("../Math");

test('should calculate the total price', () =>{
    const total = calculatePrice(10, 21);
    expect(total).toBe(12.1);
})

test('should calculate the total price with the default VAT', () =>{
    const total = calculatePrice(10);
    expect(total).toBe(12.1);
})

test('Should convert 48.2F to 9 C', () => {
    const temp = fahrenheitToCelsius(48.2)
    expect(temp).toBeCloseTo(9, 2) 
});

test('Should convert 27C to 80.6C', () => {
    const temp = celsiusToFahrenheit(27)
    expect(temp).toBe(80.6) 
});