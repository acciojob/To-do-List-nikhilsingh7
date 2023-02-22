const inputField = document.querySelector('#todo-input');
const addButton = document.querySelector('#add-button');

addButton.addEventListener('click', () => {
  const todoText = inputField.value;

  const newItem = document.createElement('li');
  newItem.textContent = todoText;

  const todoList = document.querySelector('#todo-list');
  todoList.appendChild(newItem);

  inputField.value = '';
});


