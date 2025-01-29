/*Observer pattern */

class TaskSubject {
    constructor() {
        this.observers = [];
    }

    subscribe(observer) {
        this.observers.push(observer);
    }

    unsubscribe(observer) {
        this.observers = this.observers.filter(obs => obs != observer);
    }

    notify(data) {
        this.observers.forEach(observer => observer(data))
    }
}


export default TaskSubject;