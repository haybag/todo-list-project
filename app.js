const inputBox = document.getElementById('input-box');
const addButton = document.getElementById('add-btn');
const removeButton = document.getElementById('remove-btn');
const listElement = document.getElementById('list-display');

let todoList = ['Do the dishes', 'Take the trash out'];
let todoListHTML = '';

loadFromStorage();

addButton.addEventListener('click', () => {
  if(inputBox.value != '') {
    addListItem();
  }
});

removeButton.addEventListener('click', () => {
  removeAllListItems();
});

// Saves current list to localStorage
function saveToStorage() {
  localStorage.setItem('todoList', JSON.stringify(todoList));
}

// Loads current list from localStorage
function loadFromStorage() {
  if(JSON.parse(localStorage.getItem('todoList') != null)) {
    todoList = JSON.parse(localStorage.getItem('todoList'));
  } else {
    todoList = [];
  }
  updateListHTML();
}

function updateListHTML() {
  todoListHTML = '';
  todoList.forEach((item) => {
    todoListHTML += `<li>
    <p>${item}</p>
    <button onclick='removeListItem(${todoList.indexOf(item)})'>&#10006</button>
    </li>`;
  });
  listElement.innerHTML = todoListHTML;

  saveToStorage();
}

function addListItem() {
  if(todoList.indexOf(inputBox.value) == -1 ){
    todoList.push(inputBox.value);
    updateListHTML();
  } else {
    alert('You\'ve already added this task to the list!');
  }
  inputBox.value = '';
}

function removeListItem(index) {
  todoList.splice(index, 1);
  updateListHTML();
}

function removeAllListItems() {
  todoList = [];
  updateListHTML();
  inputBox.value = '';
}
