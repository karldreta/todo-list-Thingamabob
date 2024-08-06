const mainContent = document.querySelector('#content');

export default function addToContent(projectName, description, dueDate, priorityLvl) {
    const main = document.querySelector('#content');
    const projectContainer = document.createElement('div');
    projectContainer.classList.add('projectContainer');
    projectContainer.innerHTML = `
        <p class="todoName">Todo: ${projectName}</p>
        <p class="todoDescription">"${description}"</p>
        <p class="todoDueDate"><span>Due Date:</span>${dueDate}</p>
        <p class="todoPriority"><span>Priority:</span>${priorityLvl}</p>
    `
    main.appendChild(projectContainer);
}