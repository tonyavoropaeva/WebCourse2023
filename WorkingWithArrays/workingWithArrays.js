~function () {
// Создайте массив чисел
    let array = [3, 20, 11, 7, 15, 8, 41, 2, 9, 30, 17, 1];

// Отсортируйте его по убыванию
    const sortNumbersArrayInDescendingOrder = numbersArray =>
        numbersArray.sort(function (e1, e2) {
            return e2 - e1;
        });

    sortNumbersArrayInDescendingOrder(array);
    console.log("Отсортированный массив: " + array);

// Получите подмассив из первых 5 элементов
    const getFirstFiveElements = array => {
        return array.slice(0, 5);
    }

    console.log("Первые пять элементов массива: " + getFirstFiveElements(array));

// подмассив из последних 5 элементов
    const getLastFiveElements = array => {
        return array.slice(-5);
    }

    console.log("Последние пять элементов массива: " + getLastFiveElements(array));

// Найдите сумму элементов массива, которые являются
// четными числами
    const sumEvenNumbers = numbersArray => {
        return getEvenNumbers(numbersArray).reduce(function (total, amount) {
            return total + amount;
        }, 0);
    }

    console.log("Сумма четных элементов массива: " + sumEvenNumbers(array));

// Создайте массив чисел от 1 до 100, в таком порядке
    const hundredNumbersArray = [];

    for (let i = 0; i < 100; ++i) {
        hundredNumbersArray.push(i + 1);
    }

    console.log(hundredNumbersArray);

// Получите список квадратов четных чисел из этого массива
    const getEvenNumbersSquares = numbersArray => {
        return getEvenNumbers(numbersArray).map(x => x * x);
    }

    console.log(getEvenNumbersSquares(hundredNumbersArray));

    function getEvenNumbers(numbersArray) {
        return numbersArray.filter(function (number) {
            return number % 2 === 0;
        });
    }
}();