# Todo-List-Thingamabob
*The Thingamabob that does the job!*


### This is an Odin Project: [Todo List](https://www.theodinproject.com/lessons/node-path-javascript-todo-list)


### Objectives:

**In this project, I will:**

* **Showcase proficiency with Webpack:** Demonstrate the ability to effectively bundle and manage assets using Webpack, highlighting its configuration and optimization features.

* **Exhibit understanding of Objects, Constructors/Classes, and Arrays:** Implement and use objects, classes, and arrays in a meaningful way to solve problems and structure code efficiently.

* **Apply the Single Responsibility Principle:** Design and organize my code so that each module or component has a single responsibility, enhancing maintainability and readability.

* **Modularize the codebase:** Break down the code into reusable, self-contained modules, ensuring a clean, scalable, and manageable project structure.


## Obstacles and Eureka moment:

I came across a major flaw in my entire code base, I was about to add a `delete` function for each project, but first I had to log each of the Index numbers, It was then that I realized that I was passing down different types of data:

``` JavaScript
    const projectContainer = document.createElement('div');
    projectContainer.dataset.projectIndex = projectIndex;

    //And

    const navigateToProject = document.createElement('div');
    navigateToProject.dataset.projectIndex = projectIndex;
```
This approach resulted in the creation of duplicate versions of each DOM elements and because of that I had to handle the `expand` differently based on whether it was triggered from the **card** or from the **navPanel**:

```JavaScript
    // Like this
    expandCard(e) // expands the card

    // and
    expandCardFromNav(e) // Expands the card from the navigation panel, using data from navigateToProject
```
Having two identical displays led to redundancy. Deleting a project from the **card** still allowed it to be expanded from the **navigation panel**.

### **💡** Eureka Moment:

After many attempts of branching out and refactoring my code, I eventually came up with an Idea: I could use `addDataToContainer()` to attach all relevant data (and methods) directly to `projectContainer`, and passed it down through out my code base where each module would reference the data inside `projectContainer`, essentially making the `projectContainer` a sort of memory card (cause its a card, Lol), avoiding duplication and creating consistency throughout the project. This approach streamlined my code significantly, eliminating a dozen lines and resolving the inconsistency issue. It was a true **Light Bulb** moment.


### Resources:

[Drop Down](https://www.youtube.com/watch?v=VQWu4e6agPc)