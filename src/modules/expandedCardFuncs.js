import { projectsArray } from "./projectManager";

const mainContent = document.querySelector('#content');
// const expandedContent = document.querySelector('#expandedContent');

// Unified function to handle expansion of cards and nav items
export function expandContent(Project) {
    mainContent.style.display = 'none';
    Project.expandedContent = document.querySelector('#expandedContent');
    expandedContent.style.display = 'flex';
    expandedContent.classList.add('expandedCard');

    expandedContent.innerHTML = `
        <div class="expandedNavBtns">
            <i class="fa-solid fa-arrow-left backToContent"></i>
            <i class="fa-solid fa-plus addTodo"></i>
            <i class="fa-solid fa-trash deleteCard"></i>
        </div>
        <h2>${Project.projectName}</h2>
        <hr>
        <p>"${Project.description}"</p>
        <div class="expandedPriorityLvlContainer">
            <span class="bold">${Project.priorityLvl}</span> | <p>${Project.dueDate}</p>
        </div>
    `;

    const editableContent = document.createElement('section');
    editableContent.classList.add('editableContent');
    expandedContent.appendChild(editableContent);


    // Attach listeners for the back-to-content button
    attachBackToContent(editableContent);

    // Attach delete listener to the delete button in the expanded view
    const deleteCardBtn = expandedContent.querySelector('.deleteCard');
    deleteCardBtn.addEventListener('click', function() {
        Project.deleteCard();
        expandedContent.style.display = 'none';
        mainContent.style.display = 'grid';
    });

    const addTodoBtn = document.querySelector('.addTodo');
    addTodoBtn.addEventListener('click', function () {
        Project.addTodo()
    })

}

// Function to attach back-to-content listeners, used to avoid duplication
function attachBackToContent(editableContent) {
    const backToContentBtn = document.querySelectorAll('.backToContent');
    backToContentBtn.forEach(icon => icon.addEventListener('click', () => {
        expandedContent.style.display = 'none';
        mainContent.style.display = 'grid';
        expandedContent.classList.remove('expandedCard');
    }));
}

export function deleteCard(Project) {
    const navProjects = document.querySelector('#navProjects');
    projectsArray.splice(Project.projectIndex, 1);

    const navProjectToRemove = Array.from(navProjects.querySelectorAll('.navigateToProject')).find(element => 
        element.dataset.projectIndex == Project.projectIndex
    );

    const cardToRemove = Array.from(mainContent.querySelectorAll('.projectContainer')).find(element => 
        element.dataset.projectIndex == Project.projectIndex
    );
    
    navProjects.removeChild(navProjectToRemove);
    mainContent.removeChild(cardToRemove);
}

export function addTodo(Project) {
    Project.editableContent = Project.expandedContent.querySelector('.editableContent');
    const editableText = document.createElement('div');
    editableText.classList.add('editableText');
    editableText.setAttribute('contenteditable', 'true');
    editableText.textContent = `Hello, Type your Todo here`;

    Project.editableContent.appendChild(editableText);
}