const newProjectBtn = document.querySelector('#newProjectBtn');
newProjectBtn.addEventListener('click', addNewProject);
const body = document.querySelector('body');
const projectInputDialog = document.createElement('dialog');

export default function addNewProject () {
    projectInputDialog.innerHTML = `
        <h2>Create New Project</h2>
        <form action="#" id="projectForm">
            <label for="projectName">Project Name:</label>
            <input type="text" id="projectName">
            <div class="showError" id="nameError"></div>
        
            <label for="projectDescription">Description:</label>
            <input type="text" id="projectDescription">
            <div class="showError" id="descriptionError"></div>
        
            <label for="projectDueDate">Due Date:</label>
            <input type="datetime-local" id="projectDueDate">
            <div class="showError" id="dueDateError"></div>
        
            <fieldset>
                <legend>Priority Level:</legend>

                <input type="radio" id="priorityUrgent" name="projectPriority" value="urgent">
                <label for="priorityUrgent">Urgent</label>
                
                <input type="radio" id="priorityImportant" name="projectPriority" value="important">
                <label for="priorityImportant">Important</label>
                
                <input type="radio" id="priorityRelaxed" name="projectPriority" value="relaxed">
                <label for="priorityRelaxed">Relaxed</label>

                <div class="showError" id="priorityError"></div>
            </fieldset>
            <button type="submit">Submit</button>
        </form>
    `;

    body.appendChild(projectInputDialog);
    projectInputDialog.showModal();
}

projectInputDialog.addEventListener("click", e => {
      const dialogDimensions = projectInputDialog.getBoundingClientRect();
      if (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
      ) {
        projectInputDialog.close();
      }
    });

    