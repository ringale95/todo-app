import Subject from "../subject/Subject.js";
import Todo from "./Todo.js";

class TodoList extends Subject {
    constructor() {
        super();
        this.todos = [];
    }

    createTodo(title, priority) {
        const newTodo = new Todo(title, priority);
        this.todos.push(newTodo);
        this.notify();
    }

    markTodoAsCompleted(title) {
        this.todos.forEach(todo => {
            if (todo.title == title)
                todo.completed = true;
        });
        this.notify();
    }
}

export default TodoList;