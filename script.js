const container = document.querySelector(".container");
const gridSize = document.querySelector(".grid-size");
const selectColor = document.getElementById("select-color");
const clear = document.getElementById("clear");

// ------ function to make grids ------- //
function gridMaker(grid) {
  for(let i = 0; i < grid * grid; i++) {
    let grids = grid <= 100 ? document.createElement("div") : false;
    container.appendChild(grids);
    grids.style.width = `calc(60rem/${grid})`;
    grids.style.height = `(calc(60rem/${grid})`;
  
    grids.classList.add("grids");

    grids.addEventListener('mouseover', () => {
      grids.style.background = "#000";
      selectColor ? grids.style.background = selectColor.value : false;
    } )

    clear.addEventListener('click', () => {
      grids.style.background = "";
    })

  }
}
  
gridMaker(16);


// -------- function to clear sketch pad and create new grids with the giving value -------- // 
function moreGrids() {
  gridSize.addEventListener("keypress", function(e) {
    if(e.key === "Enter") {
      let allGrids = Array.from(document.querySelectorAll(".grids"));
      // console.log(typeof(allGrids));
      // console.log(allGrids);
      allGrids.forEach(grids => {
        grids.remove();
      });
      
      let gridSizeValue = parseInt(gridSize.value);
      // console.log(gridSizeValue);
      gridMaker(gridSizeValue);
    }
  })
}

moreGrids()