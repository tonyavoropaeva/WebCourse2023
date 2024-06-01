document.addEventListener("DOMContentLoaded", function () {
    const getContactForm = document.getElementById("get-contact-form");
    const inputName = document.getElementById("input-name");
    const inputSurname = document.getElementById("input-surname");
    const inputNumber = document.getElementById("input-number");

    getContactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        let name = inputName.value.trim();
        let surname = inputSurname.value.trim();
        let number = inputNumber.value.trim();

        if (validation(getContactForm) === false) {
            return;
        }

        const tableRow = document.createElement("tr");

        const columnName = document.createElement("td");
        const columnSurname = document.createElement("td");
        const columnNumber = document.createElement("td");
        const columnEdit = document.createElement("td");

        tableRow.appendChild(columnName);
        tableRow.appendChild(columnSurname);
        tableRow.appendChild(columnNumber);
        tableRow.appendChild(columnEdit);

        const contactTable = document.getElementById("body-table");
        contactTable.append(tableRow)

        function setViewMode() {
            columnName.innerHTML = name;
            columnSurname.innerHTML = surname;
            columnNumber.innerHTML = number;
            columnEdit.innerHTML = '<button class="delete-button" type="button">Удалить</button>' +
                '<button class="edit-button" type="button">Изменить</button>';

            tableRow.querySelector(".delete-button").addEventListener("click", function () {
                tableRow.remove();
            });

            columnEdit.querySelector(".edit-button").addEventListener("click", function () {
                columnName.innerHTML = '<input type="text" class="edit-name" id="edit-name">';
                columnSurname.innerHTML = '<input type="text" class="edit-surname">';
                columnNumber.innerHTML = '<input type="number" class="edit-number">';
                columnEdit.innerHTML = '<button class="cancel-button" type="button">Отмена</button>' +
                    '<button class="save-button" type="button">Сохранить</button>';

                const editName = columnName.querySelector(".edit-name");
                editName.value = name;

                const editSurname = columnSurname.querySelector(".edit-surname");
                editSurname.value = surname;

                const editNumber = columnNumber.querySelector(".edit-number");
                editNumber.value = number;

                columnEdit.querySelector(".cancel-button").addEventListener("click", function () {
                    setViewMode();
                });

                columnEdit.querySelector(".save-button").addEventListener("click", function () {
                    const changedName = editName.value.trim();
                    const changedSurname = editSurname.value.trim();
                    const changedNumber = editNumber.value.trim();

                    if (validation(tableRow) === false) {
                        return;
                    }

                    name = changedName;
                    surname = changedSurname;
                    number = changedNumber;

                    setViewMode();
                })
            });
        }

        setViewMode();

        inputName.value = "";
        inputSurname.value = "";
        inputNumber.value = "";
    });
});

function validation(form) {
    const allInputs = form.querySelectorAll("input");
    let result = true;

    for (const input of allInputs) {
        input.classList.remove("invalid");

        if (input.value === "") {
            input.classList.add("invalid");
            result = false;
        }
    }

    return result;
}

//добавить сообщение о незаполненных полях
//порядковые номера
//цсс формы