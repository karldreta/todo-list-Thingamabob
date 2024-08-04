const mainContent = document.querySelector('#content');

export default function addToContent(projectName, description, dueDate, priorityLvl) {
    const main = document.querySelector('#content');
    const projectContainer = document.createElement('div');
    projectContainer.classList.add('projectContainer');
    projectContainer.innerHTML = `
        <p>${projectName}</p>
        <p>${description}</p>
        <p>${dueDate}</p>
        <p>${priorityLvl}</p>
    `
    main.appendChild(projectContainer);
}