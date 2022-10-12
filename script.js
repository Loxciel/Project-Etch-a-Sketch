

function createGrid() {
  var Container = document.getElementById("container");
Container.innerHTML = '';
  
    let numberOfRows = prompt("How many rows do you want?"); //takes number input
    let i = 0;
    let x = numberOfRows * numberOfRows; //x = num^2 -> makes a square
    
    document.documentElement.style.setProperty("--columns-row", numberOfRows); //sets --columns-row style to num
    for (i =  0; i < x ; i++) {
      //creates divs = x^2 to populate container and gives them event handler for color change
      var div = document.createElement("div");
      document.getElementById("container").appendChild(div);
      div.addEventListener("mouseenter", function () {
      this.style.backgroundColor = "black";
    });
  }
}

createGrid(4);

let btn = document.getElementById("add")
  btn.addEventListener("click", createGrid)