import { projectsArray } from "./projectManager";
import { addNewTodo } from "./projectForm";

const mainContent = document.querySelector('#content');

// Unified function to handle expansion of cards and nav items
export function expandContent(Project) {
    mainContent.style.display = 'none';
    const expandedContent = document.querySelector('#expandedContent');
    expandedContent.style.display = 'flex';
    expandedContent.classList.add('expandedCard');

    // Build the HTML content including todos
    expandedContent.innerHTML = `
        <div class="expandedNavBtns">
            <i class="fa-solid fa-arrow-left backToContent"></i>
            <i class="fa-solid fa-plus addNewTodo"></i>
            <i class="fa-solid fa-trash deleteCard"></i>
        </div>
        <h2>${Project.projectName}</h2>
        <hr>
        <p>"${Project.description}"</p>
        <div class="expandedPriorityLvlContainer">
            <span class="bold">${Project.priorityLvl}</span> | <p>${Project.dueDate}</p>
        </div>
        <div class="todoList">
            <ul>
            ${Project.todos.map(todo => `<li class="eachTodos">${todo}</li>`).join('')}
            </ul>
        </div>
    `;

    // Attach listeners for the back-to-content button
    attachBackToContent(expandedContent);

    // Attach delete listener to the delete button in the expanded view
    const deleteCardBtn = expandedContent.querySelector('.deleteCard');
    deleteCardBtn.addEventListener('click', function() {
        Project.deleteCard();
        expandedContent.style.display = 'none';
        mainContent.style.display = 'grid';
    });

    const addTodoBtn = document.querySelector('.addNewTodo');
    addTodoBtn.addEventListener('click', function () {
        addNewTodo(Project);
    });
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