
function createGrid(num = 16) {
  for(let i = 0; i < num; i++) {
    let square = document.createElement('div');
    square.classList.add('grid');
    document.getElementById('container').appendChild(square);
  }
}

createGrid();


let squares = document.querySelectorAll('.grid');
squares.forEach(grid => grid.addEventListener('mouseover', (event) => {
  event.target.classList.add('filled');
}
  //when mouse hovers over square -> change color
))

//btn on top of screen that asks user to input amt of squares on each end
  //new grid should be same size
    //grid-squares should auto fill space equally
  //max number of input should be 100
  function addSquare() {
    let num = prompt('Add Squares', '1');
    if (Number.isInteger(parseInt(num)) && num <= 100) {
      //take num.value and append to both sides of grid
        //input into createGrid
        console.log(num);
    } else {
      alert('Error!')
    }
  }
  
