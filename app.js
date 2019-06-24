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

// Get Tasks from LS
function getTasks() {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.forEach(function(task) {
    // Create an li element
    const li = document.createElement("li");

    // Add a class
    li.className = "collection-item";

    // Create a text node and append to li
    li.appendChild(document.createTextNode(task));

    //Create a new link element
    const link = document.createElement("a");

    // Add a class
    link.className = "delete-item secondary-content";

    // Add an icon HTML
    link.innerHTML = '<i class="fa fa-remove"></i>';

    // Append the link to li
    li.appendChild(link);

    // Append li to ul
    taskList.appendChild(li);
  });
}

// Add a task
function addTask(e) {
  if (taskInput.value === "") {
    alert("Add a task");
  }

  // Create an li element
  const li = document.createElement("li");

  // Add a class
  li.className = "collection-item";

  // Create a text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));

  //Create a new link element
  const link = document.createElement("a");

  // Add a class
  link.className = "delete-item secondary-content";

  // Add an icon HTML
  link.innerHTML = '<i class="fa fa-remove"></i>';

  // Append the link to li
  li.appendChild(link);

  // Append li to ul
  taskList.appendChild(li);

  // Store in LS
  storeTaskInLocalStorage(taskInput.value);

  // Clear Input
  taskInput.value = "";

  e.preventDefault();
}
