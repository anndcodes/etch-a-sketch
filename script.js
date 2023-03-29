const container = document.querySelector(".container");
const gridSize = document.querySelector(".grid-size");
const selectColor = document.getElementById("select-color");
const clear = document.getElementById("clear");
const toggleGrid = document.querySelector("toggle-grid");
const pencil = document.getElementById("pencil");

// ------ function to make grids ------- //
function gridMaker(grid) {
  for(let i = 0; i < grid * grid; i++) {
    let grids = grid <= 100 ? document.createElement("div") : false;
    container.appendChild(grids);
    grids.style.width = `calc(60rem/${grid})`;
    grids.style.height = `(calc(60rem/${grid})`;
  
    grids.classList.add("grids");

    // ------- default pencil mode -------- //
    function pencilMode() {
      container.addEventListener("mousedown", () => {
        grids.addEventListener('mouseenter', mouseOver);
        grids.addEventListener("click", () => {
          grids.style.background = "#000";
          selectColor ? grids.style.background = selectColor.value : false; 
        })
      });

      function mouseOver() {
        grids.style.background = "#000";
        selectColor ? grids.style.background = selectColor.value : false;
      }

      container.addEventListener('mouseup', () => {
        grids.removeEventListener('mouseenter', mouseOver, false);
      })
    }

    pencilMode();

    //----- when in another mode, click on pencil button to call its function -----//
    pencil.addEventListener('click', () => {
      pencilMode();
    })

    // --------- when clicked clears grids colors ------- // 
    clear.addEventListener('click', () => {
      grids.style.background = "";
    });
  };
}
  
gridMaker(16);


// ------ when clicked show or hide grids ----- //
function changeGrid() {
  let hideGrid = Array.from(document.querySelectorAll(".grids"));
  hideGrid.forEach(grids => {
    grids.classList.toggle("hide-grid");
  })
}


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



