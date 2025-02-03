import TodoList from "./model/TodoList.js";
import UpdateTableObs from "./observers/UpdateTableObs.js";

//link between subject and observers
const todoList = new TodoList();
const updateTable = new UpdateTableObs(todoList);
todoList.subscribe(updateTable);

// Create todo
todoList.createTodo("Test", 1);

// Update todo
todoList.markTodoAsCompleted("Test");

