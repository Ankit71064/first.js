const addButton = document.getElementById('add-btn');
const inputField = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

function addTodo() {
  const todoText = inputField.value.trim();
  if (todoText === '') return; 

  const todoItem = document.createElement('li');
  todoItem.innerHTML = `
    <span class="todo-text">${todoText}</span>
    <button class="mark-complete-btn">✔</button>
    <button class="delete-btn">🗑</button>
  `;

  
  const markCompleteButton = todoItem.querySelector('.mark-complete-btn');
  markCompleteButton.addEventListener('click', function() {
    todoItem.classList.toggle('completed');
  });


  const deleteButton = todoItem.querySelector('.delete-btn');
  deleteButton.addEventListener('click', function() {
    todoList.removeChild(todoItem);
  });

  todoList.appendChild(todoItem);

  inputField.value = '';
}

addButton.addEventListener('click', addTodo);

inputField.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    addTodo();
  }
});