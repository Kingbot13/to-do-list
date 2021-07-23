// user is directed to this page after clicking on a project
// shows info about the project and its todos

const projectPage = (() => {
    const container = document.createElement('div');
    
    const getProject = (name) => {
        const title = document.createElement('h2');
        title.textContent = name;
        container.append(title);
    };

    return {getProject};
})();

export default projectPage;