// Создайте массив чисел
let array = [3, 20, 11, 7, 15, 8, 41, 2, 9, 30, 17, 1];

// Отсортируйте его по убыванию
function sortArrayInDescendingOrder(array) {
    let result;

    result = array.sort(function (e1, e2) {
        return e1 - e2;
    });

    return result;
}

console.log("Отсортированный массив: " + sortArrayInDescendingOrder(array));

// Получите подмассив из первых 5 элементов
function subarrayOfTheFirstFiveElements(array) {
    return array.slice(0, 5);
}

console.log("Первые пять елементов массива: " + subarrayOfTheFirstFiveElements(array));

// подмассив из последних 5 элементов
function subarrayOfTheLastFiveElements(array) {
    return array.slice(array.length - 5);
}

console.log("Последние пять елементов массива: " + subarrayOfTheLastFiveElements(array));


// Найдите сумму элементов массива, которые являются
// четными числами
function evenArrayElementsSum(array) {
    let evenNumbersArray = evenArrayElements(array);

    return evenNumbersArray.reduce(function (a, b) {
        return a + b;
    }, 0);
}

console.log("Сумма четных элементов массива: " + evenArrayElementsSum(array));

// Создайте массив чисел от 1 до 100, в таком порядке
let arrayOneHundred = [...Array(100)].map((_, i) => i + 1);

console.log(arrayOneHundred);

// Получите список квадратов четных чисел из этого массива
function evenNumbersInArraySquaresList(array) {
    let evenNumbersArray = evenArrayElements(array);
    return evenNumbersArray.map((x) => x * 2);
}

console.log(evenNumbersInArraySquaresList(arrayOneHundred));

function evenArrayElements(array) {
    return array.filter(function (number) {
        return number % 2 === 0;
    });
}