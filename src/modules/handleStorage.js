// This is a Module for functions that handle setting and getting from local storage.

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
}
  

// localStorage.clear()