document.addEventListener("DOMContentLoaded", function () {
    const addTodoForm = document.getElementById("add-todo-form");
    const todoList = document.getElementById("todo-list");
    const newTodoTextField = document.getElementById("new-todo-text-field");


    addTodoForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const newTodoText = newTodoTextField.value.trim();

        if (newTodoText.length === 0) {
            return;
        }

        const newTodo = document.createElement("li");
        newTodo.textContent = newTodoText;
        todoList.append(newTodo);

        newTodoTextField.value = "";
    });
});