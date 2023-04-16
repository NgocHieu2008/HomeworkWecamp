// Get the modal element and its close button
const createTaskModal = document.getElementById("create-task-modal");
const createTaskModalCloseBtn = createTaskModal.querySelector(".close");
// get the modal edit
const editTaskModal = document.getElementById("edit-task-modal");
const editTaskModalCloseBtn = editTaskModal.querySelector(".close");

// Get the task lists
const prioritizedList = document.querySelector(".prioritized .task-list");
const todoList = document.querySelector(".todo .task-list");
const doneList = document.querySelector(".done .task-list");

// Get the create task button and form
const createTaskBtn = document.getElementById("btn-add");
const createTaskForm = document.getElementById("create-task-form");

// Initialize task ID counter
let lastTaskId = 0;

//function to create a task element
function createTaskElement(taskName, taskDescription,taskType) {
    // Create the task element
    const taskEl = document.createElement("div");
    taskEl.classList.add("task");
    taskEl.setAttribute("draggable", "true");
    taskEl.setAttribute("data-task-id", lastTaskId);
    taskEl.innerHTML = `
        <div class="task-header">
            <div class="task-checkbox">
                <input type="checkbox" name="task-checkbox" id="task-checkbox-${lastTaskId}">
                <label for="task-checkbox-${lastTaskId}">${taskName}</label>
            </div>
        </div>
        <div class="task-body">
            <div class="task-description">${taskDescription}</div>
            <div class="btn-actions">
                <button class="btn btn-prioritize"><i class="fa-solid fa-star"></i></button>
                <button class="btn btn-edit"><i class="fa-solid fa-pen-to-square"></i></button>
                <button class="btn btn-delete"><i class="fa-solid fa-trash"></i></button>
                </div>
        </div>
    `;
    //done checkbox
    const doneCheckbox = taskEl.querySelector(".task-checkbox input");
    doneCheckbox.addEventListener("change", event => {
        if (doneCheckbox.checked) {
            doneList.appendChild(taskEl);
        } else {
            todoList.appendChild(taskEl);
        }
    });
    //delete button
    const deleteBtn = taskEl.querySelector(".btn-delete");
    deleteBtn.addEventListener("click", event => {
        taskEl.remove();
    });
    //edit button
    const editBtn = taskEl.querySelector(".btn-edit");
    editBtn.addEventListener("click", event => {
        // show the modal
        editTaskModal.style.display = "block";
        // get the task name and description
        const taskName = taskEl.querySelector(".task-checkbox label").innerText;
        const taskDescription = taskEl.querySelector(".task-description").innerText;
        // set the values of the form
        const editTaskForm = editTaskModal.querySelector("#edit-task-form");
        editTaskForm.querySelector("#task-name").value = taskName;
        editTaskForm.querySelector("#task-description").value = taskDescription;
        // add event listener to the form
        editTaskForm.addEventListener("submit", event => {
            event.preventDefault();
            const editTaskName = editTaskForm.querySelector("#task-name").value;
            const editTaskDescription = editTaskForm.querySelector("#task-description").value;
            taskEl.querySelector(".task-checkbox label").innerText = editTaskName;
            taskEl.querySelector(".task-description").innerText = editTaskDescription;
            editTaskModal.style.display = "none";
        });
        // add event listener to the close button
        editTaskModalCloseBtn.addEventListener("click", event => {
            editTaskModal.style.display = "none";
        });
    });
    //prioritize button
    const prioritizeBtn = taskEl.querySelector(".btn-prioritize");
    prioritizeBtn.addEventListener("click", event => {
        prioritizedList.appendChild(taskEl);
    });
    // task type
    if (taskType === "todo") {
        todoList.appendChild(taskEl);
        } else if (taskType === "done") {
        doneList.appendChild(taskEl);
        } else {
        prioritizedList.appendChild(taskEl);
        }
    lastTaskId++;

    return taskEl;
}



// Add event listeners for create task button and form
createTaskBtn.addEventListener("click", event => {
    createTaskForm.reset();
    createTaskModal.style.display = "block";
  });

  createTaskForm.addEventListener("submit", event => {
    event.preventDefault();
    const taskName = createTaskForm.querySelector("#task-name").value;
    const taskDescription = createTaskForm.querySelector("#task-description").value;
    const taskType = createTaskForm.querySelector("#task-type").value;
    const taskEl = createTaskElement(taskName, taskDescription, taskType);
    createTaskModal.style.display = "none";
  });
  createTaskModalCloseBtn.addEventListener("click", event => {
    createTaskModal.style.display = "none";
  });