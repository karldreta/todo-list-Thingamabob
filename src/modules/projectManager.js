import addToContent from "./uiUtils";

export const projectsArray = [];

export class MyProject {
    constructor (projectName, description, dueDate, priorityLvl) {
        this.projectName = projectName;
        this.description = description;
        this.dueDate = dueDate;
        this.priorityLvl = priorityLvl;
    }
}

export default function addProject(projectName, description, dueDate, priorityLvl) {
    const project = new MyProject(projectName, description, dueDate, priorityLvl);
    projectsArray.push(project);
    addToContent();
}

