const container = document.querySelector(".container");
const btnRow = document.querySelector(".bt");
// Event listener for the button to change the number of rows
btnRow.addEventListener("click", () => {
        alert("HI")
        const rows = promptRows();
        createGrid(rows);
});

// Function to create the grid rows and columns
function createGrid(rows) {
    container.innerHTML = ""; // Clear previous grid

    for (let i = 0; i < rows; i++) {
        const row = document.createElement("div");
        row.classList.add("grid-row");

        for (let j = 0; j < 16; j++) {
            const column = document.createElement("div");
            column.classList.add("grid-item");

            column.addEventListener("mouseenter", () => {
                column.style.background = "blue";
            });

            column.addEventListener("mousedown", () => {
                column.style.background = "transparent";
            });

            row.appendChild(column);
        }
        container.appendChild(row);
    }
}

// Function to prompt user for number of rows
function promptRows() {
    const ask = prompt("Enter the number of rows (default is 16): ");
    if (ask === null || ask === "") {
        return 16;
    } else {
        return Number(ask);
    }
}


// Initial grid creation
createGrid(16);
