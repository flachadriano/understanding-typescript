new Vue({
    el: '#app',
    data: {
        userInput: '',
        todos: []
    },
    methods: {
        addTodo() {
            if (this.userInput.trim() == '') return;
        
            var todo = { id: _.uniqueId(), value: this.userInput };
            this.todos.push(todo);
            console.log(this.todos);
        },
        removeTodo(todo) {
            for (var i = 0; i < this.todos.length; i++) {
                var todo = this.todos[i];
                if (todo.id == todo.id) {
                    this.todos.splice(i, 1);
                    break;
                }
            }
            console.log(this.todos);
        }
    }
});
