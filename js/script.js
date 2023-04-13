const container = document.createElement('div');
container.classList.add('container');
container.style.display = 'flex';
container.style.flexDirection = 'column';
container.style.alignItems = 'center';

const button = document.createElement('button');
button.innerText = 'New Grid';
button.style.height = '40px';
button.style.width = '100px';
button.style.margin = '1rem';
button.style.fontSize = '18px';
button.addEventListener('click', () => {
    let squaresPerSide;
    let invalidNumber;
    
    do {
        squaresPerSide = prompt('Number of squares per side for the new grid? (max. 100)');
        invalidNumber = squaresPerSide < 2 || squaresPerSide > 100 || !squaresPerSide;
        if (invalidNumber) alert('Invalid number!!');
    } while (invalidNumber);

    const grid = document.getElementsByClassName('grid');
    container.removeChild(grid[0]);

    const newGrid = buildGrid(squaresPerSide);
    container.appendChild(newGrid);
});
container.appendChild(button);

function buildGrid(squaresPerSide = 16) {
    const grid = document.createElement('div');
    grid.classList.add('grid');
    grid.style.border = '1px solid grey';
    for (row = 1; row <= squaresPerSide; row++) {
        const newRow = document.createElement('div');
        newRow.classList.add(`row${row}`);
        newRow.setAttribute('style', `display: flex; height: ${960 / squaresPerSide}px`);
        
        for (column = 1; column <=squaresPerSide; column++) {
            const newDiv = document.createElement('div');
            newDiv.classList.add(`div${column}`);
            newDiv.style.boxSizing = 'border-box';
            newDiv.style.width = `${960 / squaresPerSide}px`;
            newDiv.addEventListener('mouseover', () => {
                newDiv.style.backgroundColor = 'red';
            });
            newRow.appendChild(newDiv);
        }
        
        grid.appendChild(newRow);
    }
    return grid;
}

const newGrid = buildGrid();
container.appendChild(newGrid);
const body = document.querySelector('body');
body.setAttribute('style', 'display: flex; height: 100vh; justify-content: center; align-items: center');
body.appendChild(container);