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
    container.appendChild(_projectBtn);

    // create project factory function

    const createProject = (name) => {
        // let name = document.createElement('h3');
        return {name};
    };

    return {container, createInput, createProject};
})();

export default home;

