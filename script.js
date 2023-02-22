const inputField = document.querySelector('#newTodoInput');
const addButton = document.querySelector('#addTodoBtn');

addButton.addEventListener('click', () => {
  const todoText = inputField.value;

  const newItem = document.createElement('ol');
  newItem.textContent = todoText;

  const todoList = document.querySelector('#todoList');
  todoList.appendChild(newItem);

  inputField.value = '';
});

