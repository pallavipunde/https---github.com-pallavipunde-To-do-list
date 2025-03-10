document.addEventListener('DOMContentLoaded', function() {
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskForm = document.getElementById('taskForm');
    const saveTaskBtn = document.getElementById('saveTaskBtn');
    const cancelTaskBtn = document.getElementById('cancelTaskBtn');
    const taskList = document.getElementById('taskList');
    const taskNameInput = document.getElementById('taskName');
    const taskDescriptionInput = document.getElementById('taskDescription');

    // Show the task form
    addTaskBtn.addEventListener('click', function() {
        taskForm.classList.remove('hidden');
    });

    // Hide the task form
    cancelTaskBtn.addEventListener('click', function() {
        taskForm.classList.add('hidden');
        clearForm();
    });

    // Save the task
    saveTaskBtn.addEventListener('click', function() {
        const taskName = taskNameInput.value;
        const taskDescription = taskDescriptionInput.value;

        if (taskName) {
            addTaskToList(taskName, taskDescription);
            taskForm.classList.add('hidden');
            clearForm();
        } else {
            alert('Task name is required!');
        }
    });

    // Add task to the list
    function addTaskToList(name, description) {
        const li = document.createElement('li');
        li.textContent = `${name} - ${description}`;
        taskList.appendChild(li);
    }

    // Clear the form inputs
    function clearForm() {
        taskNameInput.value = '';
        taskDescriptionInput.value = '';
    }
});
