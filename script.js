const container = document.querySelector("#container");
numCells = 16;
function createGrid(numCells) {
  for (let i = 0; i < numCells * numCells; i++) {
    let tile = document.createElement("div");
    tile.id = "tile" + i;
    tile.className = "tile";
    container.appendChild(tile);
    tile.addEventListener("mouseover", paintTiles);
    tile.style.width = 600 / numCells + "px";
    tile.style.height = 600 / numCells + "px";
    container.appendChild(tile);
  }
}
createGrid(numCells);
function selectSize() {
  numCells = prompt("Input size (above 0 and below 100)");
  if (numCells > 100 || numCells == "NaN" || numCells < 1) {
    return selectSize();
  } else {
    while (container.firstChild) {
      container.removeChild(container.lastElementChild);
    }
    createGrid(numCells);
  }
}
function paintTiles(e) {
  e.target.style.backgroundColor = "black";
}
