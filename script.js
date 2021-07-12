const container = document.querySelector("#container");
const blackColor = document.querySelector("#blackColor");
const rainbowColor = document.querySelector("#rainbowColor");
numCells = 16;
let cellColor = "black";

blackColor.addEventListener("click", () => {
  cellColor = "black";
});
rainbowColor.addEventListener("click", () => {
  cellColor = "rainbow";
});

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

function randomNumberGen() {
  return Math.floor(Math.random() * 256);
}

function paintTiles(e) {
  switch (cellColor) {
    case "black":
      e.target.style.backgroundColor = "black";
      break;
    case "rainbow":
      e.target.style.backgroundColor = `rgb(${randomNumberGen()},${randomNumberGen()},${randomNumberGen()} )`;
  }
}
function clearGrid() {
  let tile = document.querySelectorAll(".tile");
  tile.forEach((tile) => {
    tile.style.backgroundColor = "#a3a3a3";
  });
}
