class TaskSubject {
    constructor() {
        this.observers = [];
    }
    subscribe(observer) {
        this.observers.push(observer);
    }
    unsubscribe(observer) {
        this.observers.filter(obs => obs != observer);
        this.observers = observers;
    }
    notify(data) {
        this.observers.forEach(observer => observer(data));
    }
}

/**
 * After Todo has been added logic
 */
const taskSubject = new TaskSubject();

const updateTodoContainer = (data) => {
    console.log(data);
}

taskSubject.subscribe(updateTodoContainer);

/**
 * On Todo add logic
 */
const form = document.getElementById('todo-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(form);

    // trigger subject
    taskSubject.notify(formData.get('todoInput'));

    // Clear form
    form.reset();
})