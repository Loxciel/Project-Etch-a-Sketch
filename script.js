
function createGrid() {
  for(let i = 0; i < 16; i++) {
    let square = document.createElement('div');
    square.classList.add('grid');
    document.getElementById('container').appendChild(square);
  }
}

createGrid();