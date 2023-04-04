const container = document.querySelector(".container");
const gridSize = document.querySelector(".grid-size");
const selectColor = document.getElementById("select-color");
const clear = document.getElementById("clear");
const toggleGrid = document.querySelector("toggle-grid");
const pencil = document.getElementById("pencil");
const rainbow = document.getElementById("rainbow");
const eraser = document.getElementById("eraser");

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
        grids.addEventListener('mouseenter', mouseEnter);
        grids.addEventListener("click", () => {
          selectColor ? grids.style.background = selectColor.value : false;
        })
      });

      function mouseEnter() {
        selectColor ? grids.style.background = selectColor.value : false;
      }

      container.addEventListener('mouseup', () => {
        grids.removeEventListener('mouseenter', mouseEnter, false);
      })
    }

    pencilMode();

    //----- when in another mode, click on pencil button to call its function -----//
    pencil.addEventListener('click', () => {
      pencilMode();
    })


    // -------- rainbow mode to paint with random colors ------- //
    function rainbowMode() {
      let randomColor = Math.floor(Math.random()*16777215).toString(16);

      container.addEventListener("mousedown", () => {
        grids.addEventListener('mouseenter', mouseEnter);
        grids.addEventListener("click", () => {
          grids.style.backgroundColor = "#" + randomColor;
        })
      });

      function mouseEnter() {
        grids.style.backgroundColor = "#" + randomColor;
      }

      container.addEventListener('mouseup', () => {
        grids.removeEventListener('mouseenter', mouseEnter, false);
      })
    }

    // ----- click on rainbow button to call its function ----- //
    rainbow.addEventListener('click', () => {
      rainbowMode();
    });


    // --------- click to clear the sketch pad ------- // 
    clear.addEventListener('click', () => {
      grids.style.background = "";
    });


    // ---------- click to eraser grids ----------- //
    function eraserBtn() {
      let eraserGrids = Array.from(document.querySelectorAll(".grids"));
    
      eraser.onclick = function() {
        container.addEventListener('mousedown', () => {
          eraserGrids.forEach(grids => {
            grids.addEventListener('click', () => {
              grids.style.backgroundColor = "";
            })
          })
        })
      }
    }
    
    eraserBtn();
  };

}
  
gridMaker(24);


// ------ when clicked show or hide grids ----- //
function changeGrid() {
  let hideGrid = Array.from(document.querySelectorAll(".grids"));
  hideGrid.forEach(grids => {
    grids.classList.toggle("hide-grid");
  })
}


// -------- function to clear sketch pad and create new grids when user clicks button -------- // 
// ---the grids sizes are small: 8x8, medium: 16x16, big: 24x24  and bigger: 36x36 --- //
function moreGrids() {
  let gridValue = 0;

  gridSize.onclick = function () {
    let allGrids = Array.from(document.querySelectorAll(".grids"));
    allGrids.forEach(grids => {
      grids.remove();
    });

    gridValue++ ;
    // console.log(gridValue)
    switch (true) {
      case gridValue === 1 :
        gridMaker(8);
        break;
      case gridValue === 2 :
        gridMaker(16);
        break;
      case gridValue === 3 : 
        gridMaker(24);
        break;
      case gridValue === 4 :
        gridMaker(36);
        break;
      case gridValue === 5 :
        gridValue = 1;
        gridMaker(8);
        break;
    }
  }
}

moreGrids();
