
function createGrid() {
  for(let i = 0; i < 16; i++) {
    let square = document.createElement('div');
    square.classList.add('grid');
    document.getElementById('container').appendChild(square);
  }
}

createGrid();

let squares = document.querySelectorAll('.grid');
squares.forEach(grid => grid.addEventListener('hover', () => {
  //when mouse hovers over square -> change color
    //change border-color
      //can either change via script or by adding active class
        //create condition/timer for class/color removal

}))