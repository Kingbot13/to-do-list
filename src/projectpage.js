// user is directed to this page after clicking on a project
// shows info about the project and its todos

const projectPage = (() => {
    const container = document.createElement('div');
    
    const getProject = (name) => {
        const title = document.createElement('h2');
        title.textContent = name;

        // create button to add new todo

        const submitBtn = document.createElement('button');
        submitBtn.textContent = `Add To-do`;
        submitBtn.type = `button`;
        container.append(title, submitBtn);
    };

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
    

    return {getProject, createInput};
})();

export default projectPage;