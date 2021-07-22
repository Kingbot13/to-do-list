import "./styles.css";
import home from "./homepage";

const page = (() => {
    let display = document.querySelector('#content');
    let projectLibrary = []; // store projects

    // update the display with a new project
    const projectDisplay = () => {
        projectLibrary.forEach((item) => {
            let container = document.createElement('div');
            container.classList.add('project-container');
            let name = document.createElement('p');
            name.textContent = item.name;

            container.append(name);

            display.appendChild(container);
        });
    };

    //add event listeners to project containers
    const containerEvent = () => { 
        containerList = document.querySelectorAll('.project-container');
        containerList.forEach((item) => {
            item.addEventListener('click', () => {
                // take user to project page
            });
        });
    };

    const displayContent = () => {
        display.appendChild(home.container);

        const projectBtn = document.querySelector('.new-project-btn'); // display input text to allow user to enter new project name

        projectBtn.addEventListener('click', () => {
            display.appendChild(home.projectInfo());
            const projectSubmitBtn = document.querySelector('#project-submit-btn'); // collect project name entered by user
            projectSubmitBtn.addEventListener('click', () => {
    
                let projectName = document.querySelector('#project-name').value;
    
                let project = home.createProject(projectName);
                projectLibrary.push(project);
    
                display.removeChild(display.childNodes[1]);
    
                projectDisplay();
            });
        });


        return display;
    };

    return {displayContent};
})();

page.displayContent();