var inputEl = document.querySelector('input');
var buttonEl = document.querySelector('button');
var ulEl = document.querySelector('ul');
var todos = [];

buttonEl.addEventListener('click', addTodo);

function addTodo() {
    var userInput = inputEl.value;
    if (userInput.trim() == '') return;

    var todo = { id: Math.random(), value: userInput };
    todos.push(todo);
    console.log(todos);

    var liEl = document.createElement('li');
    liEl.textContent = userInput;
    liEl.addEventListener('click', removeTodo);
    liEl.dataset.id = todo.id;
    ulEl.appendChild(liEl);
}

function removeTodo(event) {
    var liEl = event.target;

    for (var i = 0; i < todos.length; i++) {
        var todo = todos[i];
        if (todo.id == liEl.dataset.id) {
            todos.splice(i, 1);
            break;
        }
    }
    console.log(todos);

    liEl.parentNode.removeChild(liEl);
}