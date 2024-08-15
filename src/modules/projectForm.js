// This is a module for creating the <dialog> and the <form> inside it.
// Included here: is the Validation, the opening/closing of the <dialog>.


import addProject from './projectManager.js';
const projectInputDialog = document.querySelector('#projectInputDialog');
const AllDialog = document.querySelectorAll('.modal');


export default function addNewProject () {
    projectInputDialog.showModal();
}

const projectForm = document.querySelector('#projectForm');
projectForm.addEventListener('submit', e => {
  e.preventDefault()
  const projectNameVal = document.querySelector('#projectName').value;
  const projectDescriptionVal = document.querySelector('#projectDescription').value;
  const projectDueDateVal = document.querySelector('#projectDueDate').value;
  const projectPriority = document.querySelectorAll('input[name="projectPriority"]');
  let priorityLvl = '';
    for (const radio of projectPriority) {
        if (radio.checked) {
            priorityLvl = radio.value;
            break;
        }
    }

    if (validateInputs(projectNameVal, projectDescriptionVal, projectDueDateVal, priorityLvl)) {
      projectInputDialog.close()

      addProject(projectNameVal, projectDescriptionVal, projectDueDateVal, priorityLvl);

      return {ProjectName: projectNameVal, projectDescription:projectDescriptionVal, projectDueDate: projectDueDateVal, projectPriority: priorityLvl};

    }

  });

// Below: Sample Projects For styling:
addProject('Synthesis Essay', 'Research and analyze philosophical themes.', '2024-08-31T03:00', 'Urgent');
addProject('Code Review', 'Review the latest code changes and prepare feedback.', '2024-09-15T10:00', 'Important');
addProject('Grocery Shopping', 'Buy groceries for the week.', '2024-08-15T16:00', 'Relaxed');
addProject('Project Proposal', 'Draft the project proposal for the new client.', '2025-01-10T09:00', 'Urgent');
addProject('Website Redesign', 'Complete the redesign of the company website.', '2024-12-01T12:00', 'Important');
addProject('Read Book', 'Finish reading the book on modern economics.', '2024-09-01T20:00', 'Relaxed');
addProject('Submit Tax Returns', 'Complete and submit tax returns for the year.', '2024-10-15T14:00', 'Urgent');
addProject('Organize Files', 'Organize and clean up digital files and folders.', '2024-08-22T11:00', 'Important');


// Below: Todo item Input dialog and Form

const todoItemModal = document.querySelector('#todoItemModal');
let currentProject; // Variable to store the current project instance, this is a way for us to reference what Project we are currently at inside the todoItemForm.

export function addNewTodo(Project) {
    currentProject = Project; // Store the current project instance
    todoItemModal.showModal(); // Show the modal to add a new todo
}

const todoItemForm = document.querySelector('#todoItemForm'); 
todoItemForm.addEventListener('submit', e => {
    e.preventDefault();
    const todoItem = document.querySelector('#todoItemInput');
    
    if (currentProject) { // Check if the current project is set
        const todoItemValue = document.querySelector('#todoItemInput').value;
        clearTodoInputError()
        if (todoItemValue.trim() !== '') { // Ensure input is not empty
            currentProject.addTodo(todoItemValue);
            todoItemModal.close();
            document.querySelector('#todoItemInput').value = '';
        } else {
          displayError(todoItem, "Cannot be empty");
        }
    }
});

// Closing the form
  document.querySelector('#cancelForm').addEventListener('click', e => {
    e.preventDefault();
    projectForm.reset();
    projectInputDialog.close();
  });

  AllDialog.forEach(modal => modal.addEventListener("click", e => {
    const dialogDimensions = modal.getBoundingClientRect();
    if (
      e.clientX < dialogDimensions.left ||
      e.clientX > dialogDimensions.right ||
      e.clientY < dialogDimensions.top ||
      e.clientY > dialogDimensions.bottom
    ) {
      modal.querySelector('input').value = '';
      modal.close();
    }
  }));

// Below: Validation

function validateInputs(projectNameVal, projectDescriptionVal, projectDueDateVal, priorityLvl) {
    const projectName = document.querySelector('#projectName');
    const projectDescription = document.querySelector('#projectDescription');
    const projectDueDate = document.querySelector('#projectDueDate');

        let isValid = true;

        if (projectNameVal === "") {
          displayError(projectName, "Required");
          isValid = false;
        } else if (projectNameVal.length > 40) {
          displayError(projectName, "Project Name too long");
          isValid = false;
        } else {
          displaySuccess(projectName);
        }

        if (projectDescriptionVal === "") {
          displayError(projectDescription, "Required");
          isValid = false;
        }  else {
          displaySuccess(projectDescription);
        }

        if (projectDueDateVal === "") {
          displayError(projectDueDate, "Required");
          isValid = false;
        } else {
          displaySuccess(projectDueDate);
        }

        if (!priorityLvl) {
          displayError(document.querySelector('fieldset'), "Required");
          isValid = false;
         } else {
          displaySuccess(document.querySelector('fieldset'));
        }

        return isValid;
}

// Function to clear previous error messages from the todo input
function clearTodoInputError() {
  const todoItemInput = document.querySelector('#todoItemInput');
  const errorElement = todoItemInput.closest('.inputContainer').querySelector('.showError');
  errorElement.textContent = "";
}

function displayError(element, message) {
  const inputContainer = element.closest('.inputContainer') || element.closest('fieldset');
  const showEffect = inputContainer.querySelector('.showError');
  showEffect.textContent = `*${message}`;
}

function displaySuccess(element) {
  const inputContainer = element.closest('.inputContainer') || element.closest('fieldset');
  const showEffect = inputContainer.querySelector('.showError');
  showEffect.textContent = "";
}