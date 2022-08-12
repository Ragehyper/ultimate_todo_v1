const todoList = document.getElementById("todoList")

function addItem() {
    const todoInput = document.getElementById('todoInput')
   const todoItem = document.createElement("li")
   const closeBtn = document.createElement("span")
todoItem.textContent = todoInput.value 
todoList.appendChild(todoItem)
closeBtn.style.marginLeft = '1em';
  closeBtn.textContent = '\u00D7';
  closeBtn.onclick = function () {
    this.parentElement.remove();
  };
  todoItem.appendChild(closeBtn)

}
