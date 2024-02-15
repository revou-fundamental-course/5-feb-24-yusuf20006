function convertTemperature() {
    const temperatureInput = document.getElementById('temperatureInput').value;
    const unitSelect = document.getElementById('unitSelect');
    const selectedUnit = unitSelect.options[unitSelect.selectedIndex].value;

    if (selectedUnit === 'celsius') {
        const fahrenheit = (temperatureInput * 9/5) + 32;
        displayResult(`The temperature in Fahrenheit is ${fahrenheit}°F.`);
    } else if (selectedUnit === 'fahrenheit') {
        const celsius = (temperatureInput - 32) * 5/9;
        displayResult(`The temperature in Celsius is ${celsius}°C.`);
    }
}

function displayResult(result) {
    const resultContainer = document.getElementById('resultContainer');
    const resultExplanation = document.getElementById('resultExplanation');
    
    resultExplanation.textContent = result;
    resultContainer.style.display = 'block';
}
