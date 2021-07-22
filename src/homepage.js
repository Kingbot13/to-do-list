const home = (() => {
    const container = document.createElement('div');

    // create h1 for use as a title
    const title = document.createElement('h1');
    title.textContent = `ToDo Crusher`;

    container.appendChild(title);

    // create todo info modal

    const infoCollectContain = document.createElement('div');
    const _infoForm = document.createElement('form');

    // create input fields

    const createInput = (title, todo, textbox) => { // create todo

        let arr = [title, todo, textbox];

        arr.forEach((item) => {
            let input = document.createElement('input');
            input.setAttribute('id', `${item}`);
            input.setAttribute('name', `${item}`);
            input.setAttribute('type', 'text');
            input.setAttribute('placeholder', `${item}`);

            _infoForm.appendChild(input);

        });

        infoCollectContain.appendChild(_infoForm);

        return infoCollectContain;
    };

    // create button to submit project name

    const _projectBtn = document.createElement('button');
    _projectBtn.textContent = `New Project`;
    _projectBtn.classList.add('new-project-btn');
    container.appendChild(_projectBtn);

    // create project modal

    const projectInfo = () => {
        const projectContainer = document.createElement('form');
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

    const createProject = (name) => {

        // let name = document.createElement('h3');
        return {name};
    };

    return {container, createInput, createProject, projectInfo};
})();

export default home;