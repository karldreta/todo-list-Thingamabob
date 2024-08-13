import { projectsArray } from "./projectManager";

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
            ${Project.todos.map(todo => `<p class="eachTodos">${todo}</p>`).join('')}
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


// The Todo item Input dialog

const todoItemModal = document.querySelector('#todoItemModal');
let currentProject; // Variable to store the current project instance

export function addNewTodo(Project) {
    currentProject = Project; // Store the current project instance
    todoItemModal.showModal(); // Show the modal to add a new todo
}

const todoItemForm = document.querySelector('#todoItemForm'); 
todoItemForm.addEventListener('submit', e => {
    e.preventDefault();
    
    if (currentProject) { // Check if the current project is set
        const todoItemValue = document.querySelector('#todoItemInput').value;
        if (todoItemValue.trim() !== '') { // Ensure input is not empty
            currentProject.addTodo(todoItemValue);
            todoItemModal.close(); // Close the modal after adding the todo
            document.querySelector('#todoItemInput').value = ''; // Clear input field
        } else {
            console.error('Todo item cannot be empty.');
        }
    } else {
        console.error('No project selected.');
    }
});
