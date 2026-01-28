import {
  validateTitle,
  validatePriority,
  validateDueDate
} from "./validator.js";

const tasks = [];
let taskIdCounter = 1;

function addTask(title, priority, dueDate) {//Add a new task
  const titleCheck = validateTitle(title);
  if (titleCheck !== true) return titleCheck;

  const priorityCheck = validatePriority(priority);
  if (priorityCheck !== true) return priorityCheck;

  const dateCheck = validateDueDate(dueDate);
  if (dateCheck !== true) return dateCheck;

  const task = {
    id: taskIdCounter++,
    title,
    priority,
    dueDate,
    completed: false
  };

  tasks.push(task);
  return "Task added successfully";
}

function getAllTasks() {// Get all tasks
  return tasks;
}

function completeTask(taskId) {// Mark a task as complete
  const task = tasks.find(t => t.id === taskId);

  if (!task) {
    return "Task not found";
  }

  task.completed = true;
  return "Task marked as complete";
}

export { addTask, getAllTasks, completeTask };
