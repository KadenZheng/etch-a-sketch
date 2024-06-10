document.addEventListener("DOMContentLoaded", () => {
    // Queries
    let body = document.querySelector("body");
    let container = document.querySelector(".container");

    // Elements created
    let square = document.createElement("div");

    // Modifications
    for (let i = 0; i < 16; i++) {
        addSquare(container);
    }
});

const addSquare = (container) => {
    let box = document.createElement("div");
    box.classList.add("square");
    container.appendChild(box);
};
