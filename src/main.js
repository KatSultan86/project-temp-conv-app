// Bootstrap’s CSS and JS Import
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
// Import converter
import {celsiusToFahrenheit, fahrenheitToCelsius} from './converter.js';

// DOM Elements 
const form = document.getElementById('converterForm');
const tempValue = document.getElementById('tempValue');
const tempType = document.getElementById('tempType');
const result = document.getElementById('result'); 

const C2F = 'c2f';

// Add listener to the form
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const currentTempValue = tempValue.value;
  const conversionType = tempType.value;

  let output;

  if(conversionType === C2F){
    // Logic of conversion
    const fehrenheit = celsiusToFahrenheit(currentTempValue);
    output = `${currentTempValue}°C = ${fehrenheit}°F`
  } else {
    // Logic of conversion
    const celsius = fahrenheitToCelsius(currentTempValue);
    output = `${currentTempValue}°F = ${celsius}°C`
  }

  result.textContent = output;
});


