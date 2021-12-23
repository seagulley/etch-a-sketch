class Grid {
    constructor(gridSize, gridContainer) {
        this.gridSize = gridSize;
        this.container = gridContainer;
    };

    generateSquares() {
        var i = 0;
        var square;
        
        for (i; i<(this.gridSize**2); i++) {
            square = document.createElement('div');
            square.classList.add('square');
            square.addEventListener('mouseover', this.changeColor);
            this.container.appendChild(square);
        };
        
        this.container.style.cssText = `grid-template-columns: repeat(${this.gridSize}, 1fr); 
        grid-template-rows: repeat(${this.gridSize}, 1fr)`
    };

    changeColor(e) {
        this.classList.add('colored');
    };   
};


function addTitle(parentNode) {
    
    const title = document.createElement('div');
    title.classList.add('title');
    title.innerText = 'Etch-a-Sketch!'

    parentNode.insertBefore(title, parentNode.children[0]);
};


function getSize() {
    var size = prompt('Enter a number for the grid size!');
    if (size >> 100) {
        size = 100;
    };
    return size;
};

function main() {
    const body = document.querySelector('body');
    const container = document.querySelector('.container');
    const gridSize = getSize();
    addTitle(body);
    const grid = new Grid(gridSize, container);
    grid.generateSquares();
};

main()

// const squares = document.querySelectorAll('.square');
// squares.forEach(square => square.addEventListener("mousedown", changeColor));