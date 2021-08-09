// todo factory funtion to create todo objects

const todo = (() => {

    const createTodo = (title, description) => {
        return {title, description};
    };

    return {createTodo};

})();

export default todo;