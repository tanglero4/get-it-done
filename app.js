const toDoInput = document.getElementById('toDo-input');
const addTaskBtn = document.getElementById('task-btn');
const toDoList = document.getElementById('toDo-list');

const addTask = ()=>{
    const userInput = toDoInput.value.trim();

    if (userInput !==''){
        const taskText = createTaskText(userInput);
        toDoList.appendChild(taskText);
        toDoInput.value = '';
    }
}

const createTaskText = (userInput)=>{
    const taskText = document.createElement('li');
    taskText.className= "toDo-item";    

    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.classList.add('checkbox');

    const userInputSpan = document.createElement('span');
    userInputSpan.textContent=userInput;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete');
    deleteBtn.addEventListener('click', deleteInput);

    taskText.appendChild(checkbox);
    taskText.appendChild(userInputSpan);
    taskText.appendChild(deleteBtn);

    return taskText;
};
const deleteInput = (event) =>{
    const taskText = event.target.parentNode;
    toDoList.removeChild(taskText);
};

addTaskBtn.addEventListener('click', addTask);
toDoInput.addEventListener('keydown', function (event){
    if(event.key === 'Enter'){
        addTask();
    }
})