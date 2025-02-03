class Subject {

    constructor() {
        this.observers = [];
    }

    subscribe(observer) {
        this.observers.push(observer);
    }

    unsubscribe(observer) {
        this.observers = this.observers.filter(obs => obs != observer);
    }

    notify() {
        this.observers.forEach(obs => obs.update());
    }
}

export default Subject;