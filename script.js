
const body = document.querySelector('body');

const title = document.createElement('div');
title.classList.add('title');
title.textContent = 'Etch-a-Sketch!'

body.insertBefore(title, body.children[0]);

const container = document.querySelector('.container');

var i = 0;
var aDiv;
for (i; i<64; i++) {
    aDiv = document.createElement('div');
    aDiv.classList.add('square');
    container.appendChild(aDiv);
}

