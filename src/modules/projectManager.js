import { deleteCard, expandContent} from './expandedCardFuncs.js';
import { format, parseISO} from 'date-fns';
import { storeInLocal } from "./handleStorage.js";


export const projectsArray = [];

export class MyProject {
    constructor(projectName, description, dueDate, priorityLvl) {
        this.projectName = projectName;
        this.description = description;
        this.dueDate = dueDate; // Store as ISO date string
        this.priorityLvl = priorityLvl;
        this.todos = []; // Array to store todos
        this.projectIndex = null; // Will be set when added to projectsArray

        // Methods to manage the project
        this.expandContent = () => expandContent(this);
        this.deleteCard = () => deleteCard(this);
        this.addTodo = (todoText) => {
            this.todos.push(todoText);
            this.expandContent(); // We refresh the expand content
        };
    }
}


export default function addProject(projectName, description, dueDate, priorityLvl) {
    const Project = new MyProject(projectName, description, dueDate, priorityLvl);
    projectsArray.push(Project);
    Project.projectIndex = projectsArray.indexOf(Project); // Grab the Index and attach directly to Project
    storeInLocal(Project);
}

export function rehydrateProject(projectData) {
    // Create a new MyProject instance with the parsed data
    const project = new MyProject(
        projectData.projectName,
        projectData.description,
        projectData.dueDate, // Use the stored ISO date
        projectData.priorityLvl
    ); 
    
    // Manually set todos and projectIndex
    project.todos = projectData.todos || [];
    project.projectIndex = projectData.projectIndex;

    // Restore methods
    project.expandContent = () => expandContent(project);
    project.deleteCard = () => deleteCard(project);

    // Format the date for display only
    project.dueDate = format(parseISO(project.dueDate), "d MMM yyyy, HH:mm");

    return project;
}