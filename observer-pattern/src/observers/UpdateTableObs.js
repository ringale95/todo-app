class UpdateTableObs {

    constructor(subject) {
        this.subject = subject;
    }

    update() {
        this.subject.todos.forEach(todo => console.log(todo));
    }

}
export default UpdateTableObs;