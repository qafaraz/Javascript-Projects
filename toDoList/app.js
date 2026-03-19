const todoForm = document.querySelector("#todoForm");
const todoInput = document.querySelector("#todoInput");
const todoList = document.querySelector("#todoList");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

function createTodoElement(todo) {
    const li = document.createElement("li");
    li.className = `todo-item${todo.completed ? " completed" : ""}`;
    li.dataset.id = todo.id;

    const text = document.createElement("span");
    text.className = "todo-text";
    text.textContent = todo.text;

    const actions = document.createElement("div");
    actions.className = "todo-actions";

    const completeBtn = document.createElement("button");
    completeBtn.className = "icon-btn complete-btn";
    completeBtn.type = "button";
    completeBtn.textContent = "✓";

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "icon-btn delete-btn";
    deleteBtn.type = "button";
    deleteBtn.textContent = "🗑";

    actions.append(completeBtn, deleteBtn);
    li.append(text, actions);
    return li;
}

function renderTodos() {
    todoList.innerHTML = "";
    todos.forEach((todo) => {
        todoList.append(createTodoElement(todo));
    });
}

todoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const value = todoInput.value.trim();
    if (!value) {
        return;
    }
    todos.unshift({
        id: Date.now(),
        text: value,
        completed: false
    });
    saveTodos();
    renderTodos();
    todoForm.reset();
});

todoList.addEventListener("click", (event) => {
    const target = event.target;
    const item = target.closest(".todo-item");
    if (!item) {
        return;
    }
    const id = Number(item.dataset.id);

    if (target.classList.contains("complete-btn")) {
        todos = todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed };
            }
            return todo;
        });
    }

    if (target.classList.contains("delete-btn")) {
        todos = todos.filter((todo) => todo.id !== id);
    }

    saveTodos();
    renderTodos();
});

renderTodos();
