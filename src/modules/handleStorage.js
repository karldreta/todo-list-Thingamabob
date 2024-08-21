// This is a Module for functions that handle setting and getting from local storage.
import addDataToContainer from "./uiUtils";
import { rehydrateProject } from './projectManager.js'; // Import the rehydrateProject function

export function storeInLocal(Project) {
  // Call the projectListArr if it exists...
  let projectListArr = JSON.parse(localStorage.getItem("projectList"));
  // else create an array for it
  if (!Array.isArray(projectListArr)) {
    projectListArr = [];
  }

  projectListArr.push(Project);

  // Store the updated array back in localStorage
  localStorage.setItem("projectList", JSON.stringify(projectListArr));

  // Fetch the updated projects from localStorage
  const updatedProjectList = JSON.parse(localStorage.getItem("projectList"));

  // Loop through the updated list and pass each project to addDataToContainer after rehydrating
  updatedProjectList.forEach(projectData => {
    const rehydratedProject = rehydrateProject(projectData); // Convert plain object to MyProject instance
    addDataToContainer(rehydratedProject);
  });
}


localStorage.clear()