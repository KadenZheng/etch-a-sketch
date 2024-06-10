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

            square.addEventListener("mouseenter", () => {
                state = 0;
                var randomColor = "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0");
                square.style.backgroundColor = randomColor;
            });

            square.addEventListener("mouseleave", () => {
                if (state === 0) {
                    square.style.backgroundColor = "black";
                    square.style.transition = "background-color 0.5s ease-out";
                } else {
                    return;
                }
            });

            square.addEventListener("click", () => {
                state = 1;
                square.style.backgroundColor = "white";
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
        let size = 100 / numberOfSquares; // Calculate the size of each square
        generateSquares(numberOfSquares ** 2, size);
        logic();
    });
});
