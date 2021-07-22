import "./styles.css";
import home from "./homepage";

const page = (() => {
    let display = document.querySelector('#content');
    let projectLibrary = [];

    const displayContent = () => {
        display.appendChild(home.container);

        const projectBtn = document.querySelector('.new-project-btn'); // display input text to allow user to enter new project name

        projectBtn.addEventListener('click', () => {
            display.appendChild(home.projectInfo());
        });

        const projectSubmitBtn = document.querySelector('#project-submit-btn'); // collect project name entered by user
        projectSubmitBtn.addEventListener('click', () => {

            let projectName = document.querySelector('#project-name').value;

            let project = home.createProject(projectName);
            projectLibrary.push(project);
        });

        return display;
    };

    return {displayContent};
})();

page.displayContent();