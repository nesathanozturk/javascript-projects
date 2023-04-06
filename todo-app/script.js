// Elements:
const addTodoBtn = document.getElementById("addTodo");
const inputDOM = document.getElementById("todoInput");
const todosDOM = document.getElementById("todos");
const clearTodoBtn = document.getElementById("clearTodo");
const todoLength = document.getElementById("todo-length");
const todoLast = document.getElementsByClassName("todo-last");

let todos = JSON.parse(localStorage.getItem("todos")) || [];
let todoInput = "";

// Event Listeners:
addTodoBtn.addEventListener("click", addToDo);
clearTodoBtn.addEventListener("click", clearAllTodo);

// onChange
inputDOM.addEventListener("change", function (e) {
  todoInput = e.target.value;
});

// Add Todo:
function addToDo() {
  if (todoInput.trim() === "") {
    alert("Todo boş bırakılamaz!");
  } else {
    todos.push({
      title: todoInput,
      id: Math.floor(Math.random() * 100),
      isCompleted: false,
    });

    renderTodo();
    inputDOM.value = "";
    todoInput = "";
  }

  saveToLocalStorage();
}

// Render Todo:
function renderTodo() {
  let render = "";

  if (todos.length === 0) {
    todosDOM.innerHTML = `<p class="noTodo">There is no todo now.</p>`;
  } else {
    todos.forEach((item) => {
      render += `
        <li>${item.title}<button class="removeBtn" onclick="removeToDo(${item.id})"><i class="fa-solid fa-trash"></i></button>
        </li>
        `;
    });

    todosDOM.innerHTML = render;
  }
}

// Add to Local Storage:
function saveToLocalStorage() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

// Remove Todo:
function removeToDo(id) {
  todos = todos.filter((item) => item.id !== +id);
  renderTodo();
  saveToLocalStorage();
}

// Clear todo:
function clearAllTodo(id) {
  todos = todos.filter((todo) => todo.id === !id);
  renderTodo();
  saveToLocalStorage();
}

renderTodo();
