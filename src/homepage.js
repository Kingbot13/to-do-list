const home = (() => {
    const container = document.createElement('div');

    // create h1 for use as a title
    const title = document.createElement('h1');
    title.textContent = `ToDo Crusher`;

    container.appendChild(title);

    // create project info modal

    const infoCollectContain = document.createElement('div');
    const _infoForm = document.createElement('form');


    // create input fields

    const createInput = (title, ) => {
        let argsArray = [args];

        argsArray.forEach((arg) => {
            let input = document.createElement('input');
            input.setAttribute('id', `${arg}`);
            input.setAttribute('name', `${arg}`);
            input.setAttribute('placeholder', `${arg}`);

            _infoForm.appendChild(input);

        });
        infoCollectContain.appendChild(_infoForm);

        return infoCollectContain;
    };



    // create project factory function

    const createProject = () => {
        let name = document.createElement('h3');

    }

    return {container, createInput}
})();

