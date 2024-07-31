export const projectsArray = [];

export class MyProject {
    constructor (projectName, description, dueDate, priorityLvl) {
        this.projectName = projectName;
        this.description = description;
        this.dueDate = dueDate;
        this.priorityLvl = priorityLvl;
    }
}

export default function newProject(projectName, description, dueDate, priorityLvl) {
    const project = new MyProject(projectName, description, dueDate, priorityLvl);
    projectsArray.push(project);
}

newProject("James' Thesis", "Create a Thesis for my Finals", "March 12, 2025", "Urgent");