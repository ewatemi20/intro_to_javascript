//convert degree celsius to fahrenheit

function degreecelsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

const celsius = 40; 
const fahrenheit = degreecelsiusToFahrenheit(celsius);

alert(`${celsius}°C is equal to ${fahrenheit}°F`);

console.log(`${celsius}°C is equal to ${fahrenheit}°F`);