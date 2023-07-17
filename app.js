const toDoInput = document.getElementById('toDo-input');
const addTaskBtn = document.getElementById('task-btn');
const toDoList = document.getElementById('toDo-list');

const addTask = ()=>{
    const userInput = toDoInput.value.trim();

    if (userInput !==''){
        const taskText = createTaskText(userInput)
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
    document.classList.add('delete');
    deleteBtn.addEventListener('click', deleteInput);
}