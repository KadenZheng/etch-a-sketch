document.addEventListener("DOMContentLoaded", () => {
    // Queries
    let container = document.querySelector(".container");

    // Modifications
    for (let i = 0; i < 16; i++) {
        addSquare(container);
    }

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        let state = 0;

        square.addEventListener("mouseenter", () => {
            state = 0;
            var randomColor = "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0");
            square.style.cssText = `background-color: ${randomColor}`;
        });

        square.addEventListener("mouseleave", () => {
            if (state === 0) {
                square.style.cssText = "background-color: black; transition: background-color 0.5s ease;";
            } else {
                return;
            }
        });

        square.addEventListener("click", () => {
            state = 1;
            square.style.cssText = "";
            square.style.cssText = "background-color: white;";
        });
    });
});

const addSquare = (container) => {
    let box = document.createElement("div");
    box.classList.add("square");
    container.appendChild(box);
};
