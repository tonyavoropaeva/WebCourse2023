// Создайте массив объектов-стран (пусть будет несколько стран)
// У страны есть название и список городов (пусть будет по несколько городов)
// У города есть название и численность населения
const countries = [
    {
        name: "Spain", cities:
            [
                {name: "Barcelona", population: 1620000},
                {name: "Valencia", population: 791413},
                {name: "Malaga", population: 571026}
            ]
    },
    {
        name: "Turkey", cities:
            [
                {name: "Antalya", population: 2222562},
                {name: "Istanbul", population: 15460000},
                {name: "Bodrum", population: 175000},
                {name: "Adana", population: 1769000}
            ]
    },
    {
        name: "Germany", cities:
            [
                {name: "Berlin", population: 3645000},
                {name: "Gamburg", population: 1841000}
            ]
    },
    {
        name: "Argentina", cities:
            [
                {name: "Kordova", population: 325708},
                {name: "Salta", population: 640000},
                {name: "Mendosa", population: 1115041},
                {name: "Buenos Aires", population: 3150000},
                {name: "La Plata", population: 905035}
            ]
    }
]

// Найдите страну/страны с максимальным количеством городов
function maxCountCities(array) {
    let maxCities = 0;
    let maxCountry = "";

    array.forEach((country) => {
        let currentCountCities = country.cities.length;
        let currentCountry = country.name;

        if (currentCountCities > maxCities) {
            maxCities = currentCountCities;
            maxCountry = currentCountry;
            return;
        }

        if (currentCountCities === maxCities) {
            maxCountry = maxCountry + ", " + currentCountry;
        }
    });

    return maxCountry;
}

console.log(maxCountCities(countries));

// Получите объект с информацией по всем странам такого
// вида: ключ – название страны, значение – суммарная
// численность по стране
function getCountryPopulation(array) {
    let objectCountryPopulation = new Map();

    for (let i = 0; i < array.length; ++i) {
        let objCountry = array[i];
        let totalPopulation = 0;

        objCountry.cities.forEach((city) => {
            totalPopulation += city.population;
        });

        objectCountryPopulation.set(objCountry.name, totalPopulation);
    }

    objectCountryPopulation.forEach((value, key) => {
        console.log(`${key}: ${value}`);
    });
}

getCountryPopulation(countries);