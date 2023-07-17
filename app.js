const toDoInput = document.getElementById('toDo-input');
const addTaskBtn = document.getElementById('task-btn');
const toDoList = document.getElementById('toDo-list');

const addTask = ()=>{
    const userInput = toDoInput.ariaValueMax.trim();

    if (userInput !==''){
        const taskText = createTaskText(userInput)
    }
}