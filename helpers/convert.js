
const convertTemperature = (temp, unit) => {
    
    const lowerUnit = unit.toLowerCase();

    if (lowerUnit === 'c') {
        
        const fahrenheit = (temp * 9/5) + 32;
        
        return `${temp}°C es ${fahrenheit.toFixed(2)}°F`;
    }

    if (lowerUnit === 'f') {
        
        const celsius = (temp - 32) * 5/9;
        return `${temp}°F es ${celsius.toFixed(2)}°C`;
    }

    
    throw new Error(`Unidad inválida: "${unit}". Debe ser 'c' (Celsius) o 'f' (Fahrenheit).`);
};

export {convertTemperature};