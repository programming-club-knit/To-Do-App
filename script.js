const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-task-btn'); 
const taskList = document.getElementById('task-list');
const themeToggle = document.getElementById('theme-toggle');

addBtn.addEventListener('click', addTask);

function addTask() {
    const taskText = taskInput.value;
     
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-btn">Delete</button>
    `;
    
    taskList.appendChild(li);
    taskInput.value = '';
    li.addEventListener('click',(e)=> {
        if(e.target.classList.contains("delete-btn")){
            taskList.removeChild(li);
        }
    })

}



