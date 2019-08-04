const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
let counter = 0;

function addToDo(){
  // container
  var itemContainer = document.createElement("div");
  itemContainer.className = classNames.TODO_ITEM;
  // text
  var text = document.createTextNode(prompt());

  // Append 
  itemContainer.appendChild(text);
  list.appendChild(itemContainer);

  // Increment item counter
  counter++;
  itemCountSpan.innerHTML = counter;
}

function newTodo() {
  addToDo();
}
