import "./styles.css";
import home from "./homepage";

const page = (() => {
    let display = document.querySelector('#content');

    const displayContent = () => {
        display.appendChild(home.container);
        return display;
    };

    return {displayContent};
})();

page.displayContent();