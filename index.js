const todoList = document.getElementById('todoList');

//* Create a new list item when clicking on the "Add" button
function addTodoItem() {
  const todoItem = document.createElement('li');
  const todoInput = document.getElementById('todoInput');

  if (todoInput.value === '') {
    return alert('You must write something!');
  }

  todoItem.textContent = todoInput.value;
  const closeBtn = document.createElement('SPAN');
  closeBtn.style.marginLeft = '1em';
  closeBtn.textContent = '\u00D7';
  closeBtn.onclick = function () {
    this.parentElement.remove();
  };
  todoItem.appendChild(closeBtn);
  todoList.appendChild(todoItem);
  todoInput.value = '';
}
