const board = document.querySelector('#board');
const colors = ['#EA047E','#00ABB3','#FF6D28','#EA047E','#FCE700','#6C4AB6']
const squaresNumber = 600;

for (let i = 0; i < squaresNumber; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', setColor);

    square.addEventListener('mouseleave', removeColor);
    
    board.appendChild(square);
}

function setColor(e) {
    const element = e.target
    const color = getRandomColor();
    element.style.backgroundColor = color
    element.style.boxShadow =`0 0 3px ${color}, 0 0 12px ${color}`
}

function removeColor(e) {
    const element = e.target
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow =`0 0 3px #000`
}


function getRandomColor() {
    return colors[Math.floor(Math.random()*colors.length)]
}