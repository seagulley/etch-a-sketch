function main() {
    const body = document.querySelector('body');
    const container = document.querySelector('.container');

    addHeader(body);
    
    let gridSize = getSize();
    let grid = new Grid(container);
    grid.generateSquares(gridSize);

    
};

function getSize() {
    var size = prompt('Enter a number for the grid size!');
    if (size >> 100) {
        size = 100;
    };
    return size;
};


// functions for the header
function addHeader(parentNode) {
    // adds a title and erase button to the parent node.

    const titleAndButton = document.createElement('div');
    titleAndButton.classList.add('titleContainer');
    addTitle(titleAndButton);
    addButton(titleAndButton);  
    parentNode.insertBefore(titleAndButton, parentNode.children[0]);
}

function addTitle(parentNode) {
    // adds a title to the page.

    const title = document.createElement('div');
    title.classList.add('title');
    title.innerText = 'Etch-a-Sketch!'

    parentNode.appendChild(title);
};

function addButton(parentNode) {
    const button = document.createElement('div');
    button.classList.add('button');
    button.setAttribute('onclick', 'handleNewGrid()');
    button.innerText = 'erase';

    parentNode.appendChild(button);
}


function handleNewGrid() {
    // handles the creation of a new grid.

    // clear the grid, get the container for the new grid
    let container = document.querySelector(".container");
    container.clear()
    // get the new size for the grid
    let gridSize = getSize();
    // fill the container with the number for the new grid
    let grid = new Grid(container);
    grid.generateSquares(gridSize);
}


class Grid {
    // a grid of squares.

    constructor(gridContainer) {
        this.container = gridContainer;
    };

    generateSquares(gridSize) {
        // fills the container with squares.

        var i = 0;
        var square;
        
        for (i; i<(gridSize**2); i++) {
            square = document.createElement('div');
            square.classList.add('square');
            square.addEventListener('mouseover', this.changeColor);
            this.container.appendChild(square);
        };
        
        this.container.style.cssText = `grid-template-columns: repeat(${gridSize}, 1fr); 
        grid-template-rows: repeat(${gridSize}, 1fr)`
    };

    changeColor(e) {
        // changes the color of a square.

        this.classList.add('colored');
    };   

};

function clear(container) {
    // empties the container to prepare for a new grid.
    // returns the grid's container.

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    return container;
}
main()

