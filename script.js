
function createGrid(num = 16) {
  let container = document.getElementById('container');
  container.replaceChildren();
  for(let i = 0; i < num; i++) {
    let square = document.createElement('div');
    square.classList.add('grid');
    document.getElementById('container').appendChild(square);
  }
  let squares = document.querySelectorAll('.grid');
squares.forEach(grid => grid.addEventListener('mouseover', (event) => {
  event.target.classList.add('filled');
}
  //when mouse hovers over square -> change color
))
}

createGrid();




//btn on top of screen that asks user to input amt of squares on each end
  //new grid should be same size
    //grid-squares should auto fill space equally
  //max number of input should be 100
  function addSquare() {
    let num = prompt('Add Squares', '1');
    if (Number.isInteger(parseInt(num)) < 0) {
      alert('Please enter a number greater than 0')
    }
    if (Number.isInteger(parseInt(num)) && num <= 100) {
        let appendGrid = parseInt(num) * 2;

        //clear out grid before adding num*2 squares;
          //should ADD to current value of grid
        createGrid(0);
        createGrid(appendGrid);
    } else {
      alert('Error!');
    }
  }
  
