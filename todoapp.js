import { addTask, getAllTasks, completeTask } from "./task.js";

console.log(addTask("Learn JavaScript", "high", "2026-12-31"));//Add new tasks
console.log(addTask("Buy groceries", "medium", "2026-10-10"));
console.log(addTask("Workout", "low", "2026-09-01"));

console.log("All Tasks:");// Display all tasks
console.log(getAllTasks());

console.log(completeTask(2)); 

console.log("Updated Tasks:");// Display updated tasks
console.log(getAllTasks());
