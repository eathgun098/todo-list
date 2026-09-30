const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");


function addTask() {

    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Введите задачу!");
        return;
    }

    const li = document.createElement("li");

    li.className = "task";

    li.innerHTML = `
        <input type="checkbox">

        <span class="task-text">
            ${taskText}
        </span>

        <button class="delete-button">
            ×
        </button>
    `;

    taskList.appendChild(li);

    taskInput.value = "";


    const checkbox = li.querySelector("input");

    checkbox.addEventListener("change", function () {
        li.classList.toggle("completed");
    });


    const deleteButton = li.querySelector(".delete-button");

    deleteButton.addEventListener("click", function () {
        li.remove();
    });
}


addButton.addEventListener("click", addTask);


taskInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {
        addTask();
    }

});