(function (index) {
    const persons = [
        {
            name: "Andrey",
            age: 23
        },
        {
            name: "Nisa",
            age: 14
        },
        {
            name: "Jenny",
            age: 27
        },
        {
            name: "Jenny",
            age: 27
        },
        {
            name: "Lida",
            age: 32
        },
        {
            name: "Pedro",
            age: 24
        },
        {
            name: "Joe",
            age: 24
        },
        {
            name: "Burcu",
            age: 23
        },
        {
            name: "Tony",
            age: 26
        },
        {
            name: "Alex",
            age: 47
        }, {
            name: "Patricia",
            age: 35
        },

    ]

// Посчитать средний возраст всех людей
    function getAverageAge(persons) {
        return  _.chain(persons)
            .pluck("age")
            .reduce((AgesSum, age) => AgesSum + age, 0) / persons.length;
    }

    getAverageAge(persons);

// Получить список людей с возрастом от 20 до 30
// включительно, отсортировать их по возрастанию
// возраста
    function getPersonsFromTwentyToThirtyAgeInAscending(persons) {
        return  _.chain(persons)
            .filter(p => p.age >= 20 && p.age <= 30)
            .sortBy("age");
    }

    getPersonsFromTwentyToThirtyAgeInAscending(persons);

// Получить список уникальных имен людей с возрастом
// от 20 до 30 включительно, отсортировать его по
// убыванию
    function getUniqueNamesFromTwentyToThirtyAgeInDescending(persons) {
        return  _.chain(persons)
            .filter(p => p.age >= 20 && p.age <= 30)
            .pluck("name")
            .uniq()
            .sortBy(function (letter) { //или invert
                return letter.charCodeAt(index) * -1;
            })
            .value();
    }

    getUniqueNamesFromTwentyToThirtyAgeInDescending(persons);

// Получить объект, в котором ключами будут имена
// людей, а значениями – количество людей с этим
// именем
    function getNamesAndTheirNumber(persons) {
        const names = _.chain(persons)
            .pluck("name")
            .sortBy()
            .value();

        const occurrencesNumber = [];
        let count = 1;

        for (let i = 0; i < names.length; ++i) {
            if (names[i] === names[i + 1]) {
                count++;
            } else {
                occurrencesNumber.push(count);
                count = 1;
            }
        }

        return _.object(_.uniq(names), occurrencesNumber);
    }

    getNamesAndTheirNumber(persons);
})();