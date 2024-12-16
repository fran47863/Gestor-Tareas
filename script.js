const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
const resetBtn = document.getElementById('reset-btn');

taskForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const taskText = taskInput.value;
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskText}</span>
        <div>
            <button class = "complete-btn">:D</button>
            <button class = "delete-btn">:C</button>
        </div>
    `;

    taskList.appendChild(li);
    taskInput.value = '';
});

taskList.addEventListener('click', function(event){
    if (event.target.classList.contains('complet-btn')){
        const li = event.target.parentElement.parentElement;
        li.querySelector('span').classList.toggle('completed');
    } else if (event.target.classList.contains('delete-btn')) {
        const li = event.target.parentElement.parentElement;
        taskList.removeChild(li);
    }
});

resetBtn.addEventListener('click', function(event){
    taskList.innerHTML = '';
});

