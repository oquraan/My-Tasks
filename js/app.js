const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addButton");
const viewTasksButton = document.getElementById("ViewButton");
addTaskButton.addEventListener("click", addTask);
const taskList = document.getElementById("TaskingList");

// viewTasksButton.addEventListener("click", updateTaskList);
let tasks = [];
var isHidden = true;

viewTasksButton.addEventListener("click", () => {
  // updateTaskList();
  // viewTasksButton.textContent = "Hide Tasks";
  //  const isHidden = taskList.classList.toggle("hidden");
  // if (isHidden) {
  // viewTasksButton.textContent = "View Tasks";

  // }
  //   updateTaskList();

  if (isHidden) {
    // If not hidden now, update and show tasks
    updateTaskList();
    viewTasksButton.textContent = "Hide Tasks";
    taskList.classList.remove("hidden");
    isHidden = false;
  } else {
    // If hidden now, just change the button text
    viewTasksButton.textContent = "View Tasks";
    taskList.classList.add("hidden");
    isHidden = true;
  }
});

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const task = {
    text: taskText,
    completed: false,
  };

  tasks.push(task);
  taskInput.value = "";
  if (isHidden) {
  } else {
    updateTaskList();
  }
}

function updateTaskList() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task.text;
    li.innerHTML = `
      <span>${task.text}</span>
              <button onclick="switchStatus(${index})">
          ${task.completed ? "Completed" : "Uncompleted"}
        </button>
      <button onclick="deleteItem(${index})">Delete</button>

    `;

    li.className = task.completed ? "completed" : "";
    taskList.appendChild(li);
  });
}
function deleteItem(index) {
  tasks.splice(index, 1);
  updateTaskList();
}

function switchStatus(index) {
  tasks[index].completed = !tasks[index].completed;
  updateTaskList();
}
