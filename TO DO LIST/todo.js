let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskContainer = document.getElementById("taskContainer");

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function displayTasks() {
    taskContainer.innerHTML = "";

    tasks.forEach((task, index) => {

        const taskItem = document.createElement("p");
        taskItem.classList.add("task");

        taskItem.textContent = task.text;

        if (task.completed) {
            taskItem.classList.add("completed");
        }

        taskItem.addEventListener("click", () => {
            task.completed = !task.completed;

            saveTasks();
            displayTasks();
        });

        const deleteButton = document.createElement("button");

        deleteButton.textContent = "Delete";

        deleteButton.addEventListener("click", (event) => {

            event.stopPropagation();

            tasks.splice(index, 1);

            saveTasks();
            displayTasks();
        });

        taskItem.appendChild(deleteButton);

        taskContainer.appendChild(taskItem);
    });
}

addButton.addEventListener("click", () => {

    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const newTask = {
        text: taskText,
        completed: false
    };

    tasks.push(newTask);

    saveTasks();

    taskInput.value = "";

    displayTasks();
});

displayTasks();