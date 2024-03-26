document.addEventListener("DOMContentLoaded", function () {
    const addTodoForm = document.getElementById("add-todo-form");
    const todoList = document.getElementById("todo-list");
    const newTodoTextField = document.getElementById("new-todo-text-field");

    addTodoForm.addEventListener("submit", function (e) {
        e.preventDefault();

        let newTodoText = newTodoTextField.value.trim();
        newTodoTextField.classList.remove("invalid");

        if (newTodoText.length === 0) {
            newTodoTextField.classList.add("invalid");
            return;
        }

        const newTodo = document.createElement("li");
        newTodo.classList.add("todo-item");

        function setViewMode() {
            newTodo.innerHTML = '<span class = "todo-item-text"></span>' +
                '<button class = "delete-button" type="button">Удалить</button>' +
                '<button class = "edit-button" type="button">Редактировать</button>';

            newTodo.querySelector(".todo-item-text").textContent = newTodoText;

            newTodo.querySelector(".delete-button").addEventListener("click", function () {
                newTodo.remove();
            });

            newTodo.querySelector(".edit-button").addEventListener("click", function () {
                newTodo.innerHTML = '<input type="text" class = "edit-text-field">' +
                    '<button class = "cancel-button" type="button">Отменить</button>' +
                    '<button class = "save-button" type="button">Сохранить</button>';

                const editTextField = newTodo.querySelector(".edit-text-field");
                editTextField.value = newTodoText;

                newTodo.querySelector(".cancel-button").addEventListener("click", function () {
                    setViewMode();
                });

                newTodo.querySelector(".save-button").addEventListener("click", function () {
                    //TODO
                    const changedTodoText = editTextField.value.trim();
                    todoList.classList.remove("invalid2");

                    if (changedTodoText.length === 0) {
                        todoList.classList.add("invalid2");
                        return;
                    }

                    newTodoText = changedTodoText;
                    setViewMode();
                });
            });
        }

        setViewMode();

        todoList.append(newTodo);

        newTodoTextField.value = "";
    });
});