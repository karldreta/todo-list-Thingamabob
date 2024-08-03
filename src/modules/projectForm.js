// This is a module for creating the <dialog> and the <form> inside it.
// Included here: is the Validation, the opening/closing of the <dialog>.


import addProject, {projectsArray} from './projectManager.js';
const projectInputDialog = document.querySelector('#projectInputDialog');


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
      console.log({ProjectName: projectNameVal, projectDescription:projectDescriptionVal, projectDueDate: projectDueDateVal, projectPriority: priorityLvl});
      console.log(projectsArray);
  
      addProject(projectNameVal, projectDescriptionVal, projectDueDateVal, priorityLvl);
  
  
      return {ProjectName: projectNameVal, projectDescription:projectDescriptionVal, projectDueDate: projectDueDateVal, projectPriority: priorityLvl};

    }

  });


// Closing the form
  document.querySelector('#cancelForm').addEventListener('click', e => {
    e.preventDefault();
    projectForm.reset();
    projectInputDialog.close();
  });


  projectInputDialog.addEventListener("click", e => {
        const dialogDimensions = projectInputDialog.getBoundingClientRect();
        if (
          e.clientX < dialogDimensions.left ||
          e.clientX > dialogDimensions.right ||
          e.clientY < dialogDimensions.top ||
          e.clientY > dialogDimensions.bottom
        ) {
          projectForm.reset();
          projectInputDialog.close();
        }
      });

// Below: Validation

function validateInputs(projectNameVal, projectDescriptionVal, projectDueDateVal, priorityLvl) {
    const projectName = document.querySelector('#projectName');
    const projectDescription = document.querySelector('#projectDescription');
    const projectDueDate = document.querySelector('#projectDueDate');

        let isValid = true;

        if (projectNameVal === "") {
          displayError(projectName, "Required");
          isValid = false;
        } else if (projectNameVal.length > 30) {
          displayError(projectName, "Project Name too long");
          isValid = false;
        } else {
          displaySuccess(projectName);
        }

        if (projectDescriptionVal === "") {
          displayError(projectDescription, "Required");
          isValid = false;
        } else {
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