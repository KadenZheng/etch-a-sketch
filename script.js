document.addEventListener("DOMContentLoaded", () => {
    // Queries
    let container = document.querySelector(".container");
    let button = document.querySelector("button");

    //! Generating squares
    const addSquare = (container, size) => {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.cssText = `width: ${size}%; padding-bottom: ${size}%;`;
        container.appendChild(square);
    };

    const generateSquares = (count, size) => {
        for (let i = 0; i < count; i++) {
            addSquare(container, size);
        }
    };

    //! Square logic
    const logic = () => {
        let squares = document.querySelectorAll(".square");
        squares.forEach((square) => {
            let state = 0;
            let opacity = 1;

            square.addEventListener("mouseenter", () => {
                state = 0;
                var randomColor = "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0");
                square.style.backgroundColor = randomColor;
                square.style.opacity = opacity;
            });

            square.addEventListener("mouseleave", () => {
                if (state === 0) {
                    square.style.backgroundColor = "black";
                    square.style.transition = "background-color 0.5s ease-out";
                    opacity = opacity -= 0.1;
                } else {
                    opacity = 1;
                    return;
                }
            });

            square.addEventListener("click", () => {
                state = 1;
                square.style.backgroundColor = "white";
                // For if the background color is black and you want to use click to revive the square
                // square.style.opacity = 1;
            });

            square.addEventListener("hover", () => {
                square.style.outline = "1px solid red";
            });
        });
    };

    // Initialize a 4x4 grid (16 squares) on page load
    const initialGridSize = 4;
    const initialSquareSize = 100 / initialGridSize;
    generateSquares(initialGridSize ** 2, initialSquareSize);
    logic();

    button.addEventListener("click", () => {
        container.replaceChildren();
        let numberOfSquares = prompt("What size grid would you like?");
        if (numberOfSquares > 100 || numberOfSquares <= 0) {
            numberofSquares = prompt("Grid size cannot be negative or over 100. What size grid would you like?");
        }
        let size = 100 / numberOfSquares; // Calculate the size of each square
        generateSquares(numberOfSquares ** 2, size);
        logic();
    });
});
