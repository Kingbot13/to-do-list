import "./styles.css";
import home from "./homepage";
import projectPage from "./projectpage";
import todo from "./todo";

const log = console.log;

const page = (() => {
    let display = document.querySelector('#content');
    let projectLibrary = []; // store projects
    let storage = window.localStorage;

    // update the display with a new project
    const projectDisplay = () => {
        for (let i = projectLibrary.length - 1; i < projectLibrary.length; i++) {
            let container = document.createElement('div');
            container.classList.add('project-container');

            // delete project button

            let removeBtn = projectPage.removeProject();

            let name = document.createElement('h2');
            name.textContent = projectLibrary[i].name;

            name.classList.add('project-name');

            container.setAttribute('data-key', i);

            container.append(removeBtn, name);

            display.appendChild(container);
            
        };
    };

    // update display with new todos
    const updateTodoDisplay = () => {
        // loop through todo array of associated project

        let container = document.querySelector('.project-page-container');
        let id = container.getAttribute('data-key');

        let arr = projectLibrary[id].todoArr;
        
        for (let i = arr.length - 1; i < arr.length; i++){
            let todoContainer = document.createElement('div');
            todoContainer.classList.add('todo-container');

            // set data attribute on todoContainer to keep track of position in array and display

            todoContainer.setAttribute('data-id', i);

            // button to remove todos

            let removeBtn = todo.removeTodo();

            let title = arr[i].title;
            let description = arr[i].description;
            let priority = arr[i].priority;

            let titleText = document.createElement('p');
            titleText.textContent = title;

            let descriptionText = document.createElement('p');
            descriptionText.textContent = description;

            todoContainer.append(removeBtn, priority, titleText, descriptionText);

            display.appendChild(todoContainer);
        };

        // log(todoContainer);


    };

    // save projects and todos (todos are properties of projects so don't need to directly save them)

    const save = () => {
        storage.setItem('projects', JSON.stringify(projectLibrary));
    };

    const displayContent = () => {

        display.appendChild(home.container);

        // display projects if any exist in storage

        if (storage.getItem('projects')){

            let projects = JSON.parse(storage.getItem('projects'));

            for (let i = 0; i < projects.length; i++){
                projectLibrary.push(projects[i]);
            };

            log(projectLibrary);
            projectDisplay();
        };

        document.addEventListener('click', (e) => {
            if (e.target && e.target.id === 'todo-modal-btn'){

                display.appendChild(projectPage.createInput());

            } else if (e.target && e.target.id === 'todo-submit'){

                let container = document.querySelector('.project-page-container');
                let id = container.getAttribute('data-key');
                let title = document.getElementById('title').value;
                let description = document.getElementById('description').value;
                let priority = document.getElementById('priority').textContent;
                
                let newTodo = todo.createTodo(title, description, priority);


                projectLibrary[id].todoArr.push(newTodo);

                updateTodoDisplay();

                // possible bug may arise later here if order of child nodes changes

                display.removeChild(display.childNodes[1]);

                // log(projectLibrary[id].todoArr); 

                save();     
                
                log(storage.getItem('projects'));
                

            } else if (e.target && e.target.id === `priority`){

                // bug: priority still changes even after submitting todo details

                let text = e.target;



                if (text.textContent.length < 13){
                    return text.textContent += '!';
                } else {
                    text.textContent = `Priority: !`;
                };

                log(text.textContent.length);
                log(text.textContent);
                
            } else if (e.target && e.target.classList.contains(`remove-project`)){
                let button = e.target;
                // log(button);
                let container = e.path[1];
                log(container);

                // remove project from array

                projectLibrary.splice(parseInt(container.getAttribute('data-key')), 1);

                if (projectLibrary.length > 1){
                    projectDisplay();
                } else {
                    button.parentNode.remove();
                };

                save();

                log(storage.getItem('projects'));



            } else if (e.target && e.target.classList.contains('project-name')){
                // event listener for project containers to update display with selected project's info

                let name = e.target;

                let id = name.parentNode.getAttribute('data-key');

                let newContainer = projectPage.getProject(name);

                newContainer.setAttribute('data-key', id);

                display.removeChild(display.childNodes[0]);

                display.appendChild(newContainer);

                name.parentNode.remove();

                if (projectLibrary[id]){
                    updateTodoDisplay();
                };

            } else if (e.target && e.target.classList.contains('remove-todo')){
                // delete todo button

                let project = document.querySelector('.project-page-container');

                let projectId = parseInt(project.getAttribute('data-key'));

                let projectTodos = projectLibrary[projectId].todoArr;

                let todoContainer = document.querySelector('.todo-container');

                let todoId = parseInt(todoContainer.getAttribute('data-id'));

                projectTodos.splice(todoId, 1);

                if (projectTodos.length > 1){
                    updateTodoDisplay();
                } else {
                    e.target.parentNode.remove();
                };

                save();

                log(storage.getItem('projects'));

            };
        });
        
        const projectBtn = document.querySelector('.new-project-btn'); // display input text to allow user to enter new project name
        
        let idCounter = 0; // create id for projects to prevent duplicates
        
        projectBtn.addEventListener('click', () => {
            display.appendChild(home.projectInfo());
            let formContainer = document.getElementById('project-form');
            const projectSubmitBtn = document.querySelector('#project-submit-btn'); // collect project name entered by user
            projectSubmitBtn.addEventListener('click', () => {
    
                let projectName = document.querySelector('#project-name').value;
    
                let project = home.createProject(projectName, idCounter);
                projectLibrary.push(project);
    
                display.removeChild(formContainer);
    
                projectDisplay();

                save();

                log(storage.getItem('projects'));

                idCounter++;
            });
        });


        return display;
    };

    return {displayContent};
})();

page.displayContent();