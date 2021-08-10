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
            let name = document.createElement('p');
            name.textContent = projectLibrary[i].name;

            container.setAttribute('data-key', i);

            container.append(name);

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


    const displayContent = () => {
        display.appendChild(home.container);

        document.addEventListener('click', (e) => {
            if (e.target && e.target.id === 'todo-modal-btn'){

                // let container = document.querySelector('.project-container');
                // e.preventDefault();
                // let button = e.target;
                // log(button.closest('.project-container'));
                // el.appendChild(projectPage.createInput());
                display.appendChild(projectPage.createInput());

            } else if (e.target && e.target.id === 'todo-submit'){

                let container = document.querySelector('.project-container');
                let id = container.getAttribute('data-key');
                let title = document.getElementById('title').value;
                let description = document.getElementById('description').value;
                
                let newTodo = todo.createTodo(title, description);

                projectLibrary[id].todoArr.push(newTodo);

                log(projectLibrary[id].todoArr);

                
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