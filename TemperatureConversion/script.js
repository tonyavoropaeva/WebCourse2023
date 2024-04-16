document.addEventListener("DOMContentLoaded", function () {
    const inputFieldCelsius = document.getElementById("text-field");
    const form = document.getElementById("form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const celsiusTemperature = inputFieldCelsius.value.trim();

        if (celsiusTemperature.length === 0) {
            return;
        }

        const outputFieldKelvin = document.getElementById("kelvin-output");
        const outputFieldFahrenheit = document.getElementById("fahrenheit-output");

        outputFieldKelvin.value = celsiusTemperature * 1 + 273.15;
        outputFieldFahrenheit.value = celsiusTemperature * 9 / 5 + 32;
    });
});