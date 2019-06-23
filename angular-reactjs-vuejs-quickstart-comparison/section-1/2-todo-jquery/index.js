var inputEl = $('input');
var buttonEl = $('button');
var ulEl = $('ul');
var todos = [];

buttonEl.click(addTodo);

function addTodo() {
    var userInput = inputEl.val();
    if (userInput.trim() == '') return;

    var todo = { id: Math.random(), value: userInput };
    todos.push(todo);
    console.log(todos);

    $('<li>'+ userInput +'</li>')
        .appendTo(ulEl)
        .attr('dataset-id', todo.id)
        .click(removeTodo);
}

function removeTodo(event) {
    var liEl = $(this);

    for (var i = 0; i < todos.length; i++) {
        var todo = todos[i];
        if (todo.id == liEl.attr('dataset-id')) {
            todos.splice(i, 1);
            break;
        }
    }
    console.log(todos);

    liEl.remove();
}