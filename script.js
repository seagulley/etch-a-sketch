const body = document.querySelector('body');

var gridDimensions = prompt('Enter the grid size!');
if (gridDimensions >> 100) {
    gridDimensions = 100;
};


const title = document.createElement('div');
title.classList.add('title');
title.innerText = 'Etch-a-Sketch!'

body.insertBefore(title, body.children[0]);

const container = document.querySelector('.container');

var i = 0;
var aDiv;
for (i; i<(gridDimensions**2); i++) {
    aDiv = document.createElement('div');
    aDiv.classList.add('square');
    aDiv.addEventListener('mouseover', changeColor);
    container.appendChild(aDiv);
};

container.style.cssText = `grid-template-columns: repeat(${gridDimensions}, 1fr); 
    grid-template-rows: repeat(${gridDimensions}, 1fr)`



function changeColor(e) {
    this.classList.add('colored')};

// const squares = document.querySelectorAll('.square');
// squares.forEach(square => square.addEventListener("mousedown", changeColor));