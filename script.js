const task = document.querySelector('.task');
const listTask = document.querySelector('.task_myself');
const input = document.querySelector('#input');
const form = document.querySelector('#form');

form.addEventListener('submit', function() {
   event.preventDefault()

    //new const
    const taskText = input.value;
    const listTask = document.querySelector('.task_myself');
    const newListElement = document.createElement('li');
    const deleteBtn = document.createElement('button');

    //delete li and button 'delete'
    deleteBtn.addEventListener('click', function() {
        newListElement.remove();
        deleteBtn.remove();
    });

    deleteBtn.setAttribute('role', 'button');
    deleteBtn.innerText = 'Delete';
    newListElement.innerText = taskText.replace(taskText[0], taskText[0].toUpperCase());
    listTask.append(newListElement);
    listTask.append(deleteBtn);
    input.value = '';
});


