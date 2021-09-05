// user is directed to this page after clicking on a project
// shows info about the project and its todos

const projectPage = (() => {
    
    const getProject = (name) => {
        const container = document.createElement('div');

        container.classList.add('project-page-container');

        const title = document.createElement('h1');
        title.textContent = name.textContent;

        // create button to add new todo

        const submitBtn = document.createElement('button');
        submitBtn.textContent = `Add To-do`;
        submitBtn.type = `button`;
        submitBtn.id = `todo-modal-btn`;
        container.append(title, submitBtn);
        return container;
    };

    // create todo info modal

    const infoCollectContain = document.createElement('div');
    infoCollectContain.classList.add('form-container');
    const _infoForm = document.createElement('form');
    
    // create input fields

    const createInput = () => {

        let arr = ['title', 'description'];

        arr.forEach((item) => {
            let input = document.createElement('input');
            input.setAttribute('id', `${item}`);
            input.setAttribute('name', `${item}`);
            input.setAttribute('type', 'text');
            input.setAttribute('placeholder', `${item}`);

            _infoForm.appendChild(input);

        });

        // priority setter

        let priority = document.createElement('p');

        priority.id = `priority`;

        priority.textContent = `Priority: !`;

        _infoForm.appendChild(priority);

        // due date

        let dueDate = document.createElement('input');

        dueDate.id = `due-date`;

        dueDate.name = `due-date`;

        dueDate.type = `date`;

        _infoForm.appendChild(dueDate);

        // submit button

        const submitBtn = document.createElement('button');
        submitBtn.textContent = `Submit`;
        submitBtn.type = `Button`;
        submitBtn.id = `todo-submit`;

        _infoForm.appendChild(submitBtn);

        infoCollectContain.append(_infoForm);

        return infoCollectContain;
    };

    // button to delete project

    const removeProject = () => {
        const button = document.createElement('button');
        button.classList.add('remove-project');
        button.textContent = `delete`;
        button.type = `button`;

        return button;
    };

    

    return {getProject, createInput, removeProject};
})();

export default projectPage;