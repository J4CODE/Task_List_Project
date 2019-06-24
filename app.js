// Defining all the UI variables
const form      = document.querySelector("#task-form");
const taskList  = document.querySelector(".collection");
const clearBtn  = document.querySelector(".clear-tasks");
const filter    = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

// Load All The Event Listeners
loadEventListeners();

// Load All The Event Listeners
function loadEventListeners() {
  // DOM Load event
  document.addEventListener("DOMContentLoaded", getTasks);

  // Add task event
  form.addEventListener("submit", addTask);

  // Remove task event
  taskList.addEventListener("click", removeTask);

  // Clear task event
  clearBtn.addEventListener("click", clearTasks);

  // Filter tasks event
  filter.addEventListener("keyup", filterTasks);
}
