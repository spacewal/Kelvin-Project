// Kelvin stays constant at 293

const kelvin = 293;

//Subtract 273 from kelvin

var celsius = kelvin - 273;

// Convert celsius to Fahrenheit
// Math.floor to round down the total

var fahrenheit = Math.floor(celsius * (9 / 5) + 32);


console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

var newton = Math.floor(celsius * (33 / 100));

console.log(`${celsius} degrees Celsius is ${newton} N`);

// Kelvin at 0 is -460
