$(function () {
    const addTodoForm = $("#add-todo-form");
    const todoList = $("#todo-list");
    const newTodoTextField = $("#new-todo-text-field");

    addTodoForm.submit(function (e) {
        e.preventDefault();

        let newTodoText = newTodoTextField.val().trim();
        newTodoTextField.removeClass("invalid");

        if (newTodoText.length === 0) {
            newTodoTextField.addClass("invalid");
            return;
        }

        const newTodo = $("<li>").addClass("todo-item");

        function setViewMode() {
            newTodo.html('<output class="todo-item-text"></output>' +
                '<button class="delete-button" type="button"></button>' +
                '<button class="edit-button" type="button"></button>');

            newTodo.find(".todo-item-text").text(newTodoText);

            newTodo.find(".delete-button").click(function () {
                newTodo.remove();
            });

            newTodo.find(".edit-button").click(function () {
                newTodo.html('<input type="text" class="edit-text-field">' +
                    '<button class="cancel-button" type="button"></button>' +
                    '<button class="save-button" type="button"></button>');

                const editTextField = newTodo.find(".edit-text-field");

                editTextField.val(newTodoText);

                newTodo.find(".cancel-button").click(function () {
                    setViewMode();
                });

                newTodo.find(".edit-text-field").keypress(function (f) {
                    if (f.keyCode === 13) {
                        f.preventDefault();

                        newTodo.find(".save-button").trigger("click");
                    }
                });

                newTodo.find(".save-button").click(function () {
                    const changedTodoText = editTextField.val().trim();

                    if (changedTodoText.length === 0) {
                        const errorMessage = $("<div>").text("Необходимо указать текст");

                        errorMessage.className = "error-message-for-todo-input";
                        newTodo.append(errorMessage);

                        $(errorMessage).toggle(newTodo.childNodes.length === 3)

                        return;
                    }

                    newTodoText = changedTodoText;
                    setViewMode();
                });
            });
        }

        setViewMode();

        todoList.append(newTodo);

        newTodoTextField.val("");
    });
});