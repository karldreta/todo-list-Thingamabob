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

I came across a major flaw in my entire code base, I was about to add a `delete` function for each project, but first I had to log each of the index numbers for reference, It was then that I realized that I was passing down different types of data:

``` JavaScript
    const projectContainer = document.createElement('div');
    projectContainer.dataset.projectIndex = projectIndex;

    //And

    const navigateToProject = document.createElement('div');
    navigateToProject.dataset.projectIndex = projectIndex;
```
This approach resulted in the creation of duplicate versions of each DOM elements and because of that I had to handle the `expand` differently depending on whether it was triggered from the **card** or from the **navPanel**:

```JavaScript
    // Like this
    expandCard(e) // expands the card

    // and
    expandCardFromNav(e) // Expands the card from the navigation panel, using data from navigateToProject
```
Having two identical displays led to redundancy. Deleting a project from the **card** still allowed it to be expanded from the **navigation panel**.

### **💡** Eureka Moment:

After many attempts of branching out and refactoring my code, I eventually came up with an Idea: I could use `addDataToContainer()` to attach all relevant data (and methods) directly to `projectContainer`, and passed it down through out my code base where each module would reference the data inside `projectContainer`, essentially making the `projectContainer` a sort of memory card (cause its a card, Lol), avoiding duplication and creating consistency throughout the project. This approach streamlined my code significantly, eliminating a dozen lines and resolving the inconsistency issue. It was a true **Light Bulb** moment.

Edit: At work, I came up with an Idea to attach the data and methods directly at the class (because that's what it supposed to be, I think), I attached everything at the class/constructor and passed the `Project`, this ensures a more consistent flow of data where each DOM elements would directly reference the `Project`. Also, it's no longer necessary to keep the `addDataToContainer`.

## The Pitfalls of Perfectionism

I've been working on this project for over a month, driven by the desire to make it perfect. I had so many ideas and features I wanted to add, but I got so caught up in perfectionism that I nearly messed up version control and almost lost all my progress.

I realized that it was time to stop aiming for perfection, especially when you're still learning, and that I had to move one.

When I come back to this project I will add:
 * Local Storage for Todos
 * Rework the sorting functions
 * Improve the UI/UX
 * Improve my modules

And, of course, there are many other improvements I'll tackle down the line. But for now, I'm ready to continue my journey.

### Resources:

[Drop Down](https://www.youtube.com/watch?v=VQWu4e6agPc)