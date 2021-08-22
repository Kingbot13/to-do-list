import "./styles.css";
import home from "./homepage";
import projectPage from "./projectpage";
import todo from "./todo";

const log = console.log;

const page = (() => {
    let display = document.querySelector('#content');
    let projectLibrary = []; // store projects

    // update the display with a new project
    const projectDisplay = () => {
        for (let i = projectLibrary.length - 1; i < projectLibrary.length; i++) {
            let container = document.createElement('div');
            container.classList.add('project-container');

            // delete project button

            let removeBtn = projectPage.removeProject();

            let name = document.createElement('p');
            name.textContent = projectLibrary[i].name;

            container.setAttribute('data-key', i);

            container.append(removeBtn, name);

            display.appendChild(container);
            containerEvent();
            
        };
    };

    //add event listeners to project containers to reload page with details of selected project
    const containerEvent = () => { 
        let containerList = document.querySelectorAll('.project-container');
        containerList.forEach((item) => {
            item.addEventListener('click', () => {

                display.removeChild(display.childNodes[0]);
                let name = item.children[0];

                display.appendChild(projectPage.getProject(name));
            });
        });
        
    };

    // update display with new todos
    const updateTodoDisplay = () => {
        // loop through todo array of associated project

        let container = document.querySelector('.project-container');
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

    const displayContent = () => {
        display.appendChild(home.container);

        document.addEventListener('click', (e) => {
            if (e.target && e.target.id === 'todo-modal-btn'){

                display.appendChild(projectPage.createInput());

            } else if (e.target && e.target.id === 'todo-submit'){

                let container = document.querySelector('.project-container');
                let id = container.getAttribute('data-key');
                let title = document.getElementById('title').value;
                let description = document.getElementById('description').value;
                
                let newTodo = todo.createTodo(title, description);

                newTodo.priority = document.getElementById('priority');

                projectLibrary[id].todoArr.push(newTodo);

                updateTodoDisplay();

                // possible bug may arise later here if order of child nodes changes

                display.removeChild(display.childNodes[2]);

                log(projectLibrary[id].todoArr); 

            } else if (e.target && e.target.id === `priority`){
                let text = e.target;

                if (text.textContent.length < 13){
                    return text.textContent += '!';
                } else {
                    text.textContent = `Priority: !`;
                };

                log(text.textContent.length);
                log(text.textContent);
                
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


                idCounter++;
            });
        });


        return display;
    };

    return {displayContent};
})();

page.displayContent();