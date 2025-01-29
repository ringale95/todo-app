import TaskSubject from "../subjects/TaskSubject.js";
import { alertOnTask } from "../observers/alertObserver.js";

const taskSubject = new TaskSubject();
taskSubject.subscribe(alertOnTask);

export const handleFormSubmit = (form) => {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        taskSubject.notify(formData.get("todoInput"));
    });
};
