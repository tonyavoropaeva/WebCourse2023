document.addEventListener("DOMContentLoaded", function () {
    const textField = document.getElementById("text-field");
    const addForm = document.getElementById("form");

    addForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const celsiusTemperature = textField.value.trim();

        if (celsiusTemperature.length === 0) {
            return;
        }

        const kelvin = document.getElementById("kelvin-output");
        const fahrenheit = document.getElementById("fahrenheit-output");

        kelvin.value = 0;
        fahrenheit.value = 0;

        document.getElementById("kelvin-output").value = celsiusTemperature * 1 + 273.15;
        document.getElementById("fahrenheit-output").value = celsiusTemperature * 9 / 5 + 32;
    });
});