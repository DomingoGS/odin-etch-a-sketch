const container = document.createElement('div');
container.classList.add('grid-container');

for (row = 1; row <= 16; row++) {
    const newRow = document.createElement('div');
    newRow.classList.add(`row${row}`);
    newRow.setAttribute('style', 'display: flex; height: 40px');
    
    for (column = 1; column <=16; column++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add(`div${column}`);
        newDiv.setAttribute('style', 'box-sizing: border-box; width: 40px; border: 1px solid black');
        newRow.appendChild(newDiv);
    }
    
    container.appendChild(newRow);
}

const body = document.querySelector('body');
body.appendChild(container);
body.setAttribute('style', 'display: flex; height: 100vh; justify-content: center; align-items: center');