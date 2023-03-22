const container = document.querySelector(".container");

for(let i = 0; i < 256; i++) {
  let grids = document.createElement("div");
  container.appendChild(grids);
  grids.classList.add("grids");

  grids.addEventListener('mouseover', () => {
    grids.style.background = "#000";
  } )
}
