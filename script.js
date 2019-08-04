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
 
  // append and create checkbox
  itemContainer.appendChild(createNewCheckboxt('theName', 'theID')); //Create and append checkbox
  itemContainer.appendChild(text);
  list.appendChild(itemContainer);
  // Increment item counter
  counter++;
  itemCountSpan.innerHTML = counter;
}

// Create Checkbox
function createNewCheckboxt(name, id){
  var checkbox = document.createElement('input'); 
  checkbox.type= 'checkbox';
  checkbox.name = name;
  checkbox.id = id;
  return checkbox;
}


function newTodo() {
  addToDo();
}
