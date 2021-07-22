import "./styles.css";
import home from "./homepage";

const page = (() => {
    let display = document.querySelector('#content');

    const displayContent = () => {
        display.appendChild(home.container);

        let projectBtn = document.querySelector('.new-project-btn');

        projectBtn.addEventListener('click', () => {
            display.appendChild(home.projectName);
        });

        return display;
    };

    return {displayContent};
})();

page.displayContent();