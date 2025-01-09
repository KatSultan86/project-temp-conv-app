// (°C → °F): F = (C * 9/5) + 32
// (°F → °C): C = (F - 32) * 5/9

export function celsiusToFahrenheit(celsius){
    const c = Number(celsius);
    return (c * 9/5) + 32;
}

export function fahrenheitToCelsius(fehrenheit){
    const f = Number(fehrenheit);
    return (f - 32) * 5/9;
}

