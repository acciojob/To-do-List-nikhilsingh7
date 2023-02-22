let inputField = document.querySelector('#newTodoInput');
let addButton = document.querySelector('#addTodoBtn');

addButton.addEventListener('click', () => {
  let todoText = inputField.value;

  let newItem = document.createElement('ol');
  newItem.textContent = todoText;

  let todoList = document.querySelector('#todoList');
  todoList.appendChild(newItem);

  inputField.value = '';
});


