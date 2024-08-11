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
            Hey guys, I'm on Todo list application where each project can be expanded to show detailed information, including a section for adding todos. The issue I’m encountering is that when I add todos and then navigate back to the main content view, the todos are lost when I return to the expanded view.
            Here’s an overview of what’s happening:

            Adding Todos: I have a function addTodo() that creates a new editable todo item and appends it to a section within the expanded view of a project.
            Navigating Views: When navigating from the expanded view back to the main content view, I use the attachBackToContent() function to hide the expanded view and show the main content.
            Problem: After navigating back to the main content and then returning to the expanded view, the previously added todos are no longer there.

            Questions:
            Why are the added todos disappearing when I navigate back to the expanded view?
            How can I make sure that the todos added to the expanded view stay across view transitions?

export function addTodo(Project) {
    Project.editableContent = Project.expandedContent.querySelector('.editableContent');
    const editableText = document.createElement('div');
    editableText.classList.add('editableText');
    editableText.setAttribute('contenteditable', 'true');
    editableText.textContent = `Hello, Type your Todo here`;

    Project.editableContent.appendChild(editableText);
}