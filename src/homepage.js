const home = (() => {
    const container = document.createElement('div');

    // create h1 for use as a title
    const title = document.createElement('h1');
    title.textContent = `ToDo Crusher`;

    container.appendChild(title);


    // create button to submit project name

    const _projectBtn = document.createElement('button');
    _projectBtn.textContent = `New Project`;
    _projectBtn.classList.add('new-project-btn');
    container.appendChild(_projectBtn);

    // create project modal

    const projectInfo = () => {
        const projectContainer = document.createElement('form');
        projectContainer.id = `project-form`;
        const projectName = document.createElement('input');
        projectName.setAttribute('type', 'text');
        projectName.setAttribute('id', 'project-name');
        projectName.setAttribute('name', 'project-name');

        const projectSubmitBtn = document.createElement('button');
        projectSubmitBtn.textContent = `Submit`;
        projectSubmitBtn.id = `project-submit-btn`;
        projectSubmitBtn.type = 'button';

        projectContainer.append(projectName, projectSubmitBtn);

        return projectContainer;
    };

    // create project factory function

    const createProject = (name, id) => {
        // add id to prevent duplicates

        // array to store todos

        let todoArr = [];

        
        
        return {name, id, todoArr};
    };

    return {container, createProject, projectInfo};
})();

export default home;