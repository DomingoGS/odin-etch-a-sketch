const container = document.createElement('div');
container.classList.add('grid-container');

//const newGridBtn = document.createElement('button');
//newGridBtn.innerText = 'New Grid';
//container.appendChild(newGridBtn);

for (row = 1; row <= 16; row++) {
    const newRow = document.createElement('div');
    newRow.classList.add(`row${row}`);
    newRow.setAttribute('style', 'display: flex; height: 60px');
    
    for (column = 1; column <=16; column++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add(`div${column}`);
        newDiv.style.boxSizing = 'border-box';
        newDiv.style.width = '60px';
        newDiv.style.border = '1px solid black';
        newDiv.addEventListener('mouseover', () => {
            console.log("Hovering...");
            newDiv.style.backgroundColor = 'red';
        });
        newRow.appendChild(newDiv);
    }
    
    container.appendChild(newRow);
}

const body = document.querySelector('body');
body.appendChild(container);
body.setAttribute('style', 'display: flex; height: 100vh; justify-content: center; align-items: center');