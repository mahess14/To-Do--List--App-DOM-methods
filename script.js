// Get references to DOM elements
const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

// Function to create a new To-Do item
function createTodoItem(task) {
  const li = document.createElement("li");
  li.className = "todo-item";

  const input = document.createElement("input");
  input.type = "text";
  input.value = task;
  input.disabled = true;

  const editBtn = document.createElement("button");
  editBtn.innerText = "Edit";
  editBtn.onclick = () => {
    if (input.disabled) {
      input.disabled = false;
      editBtn.innerText = "Save";
    } else {
      input.disabled = true;
      editBtn.innerText = "Edit";
    }
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.onclick = () => {
    todoList.removeChild(li);
  };

  li.appendChild(input);
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);
  return li;
}

// Add button click event listener
addBtn.addEventListener("click", () => {
  const task = todoInput.value.trim();
  if (task) {
    const todoItem = createTodoItem(task);
    todoList.appendChild(todoItem);
    todoInput.value = ""; // Clear input field
  }
});
