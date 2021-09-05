// todo factory funtion to create todo objects

const todo = (() => {

    const createTodo = (title, description, priority, dueDate) => {
        return {title, description, priority, dueDate};
    };

    const removeTodo = () => {
        const button = document.createElement('button');
        button.classList.add('remove-todo');
        button.textContent = `delete`;
        button.type = `button`;

        return button;
    };

    return {createTodo, removeTodo};

})();

export default todo;