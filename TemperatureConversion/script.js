document.addEventListener("DOMContentLoaded", function () {
    const newTextField = document.getElementById("new-text-field");
    const addForm = document.getElementById("new-form");

    addForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const temperature = newTextField.value.trim();

        if (temperature.length === 0) {
            return;
        }

        const kelvin = document.getElementById("Kelvin");
        const fahrenheit = document.getElementById("Fahrenheit");

        kelvin.value = 0;
        fahrenheit.value = 0;

        document.getElementById("Kelvin").innerHTML = temperature * 1 + 273.15;
        document.getElementById("Fahrenheit").innerHTML = temperature * 9 / 5 + 32;
    });
});