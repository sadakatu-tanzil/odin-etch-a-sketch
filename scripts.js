const grid = document.querySelector(".grid");
const btnReset = document.querySelector(".reset-button");
btnReset.addEventListener("click", function () {
  main();
});

function createCell(size) {
  const cell = document.createElement("span");
  cell.classList.add("cell");
  cell.style.setProperty("--side", `${100 / size}%`);

  cell.addEventListener("mouseenter", function () {
    cell.style.setProperty("--color", getRandomColor());
  });

  return cell;
}

function addCells(amount) {
  grid.replaceChildren();

  for (let i = 1; i <= amount ** 2; i++) {
    grid.append(createCell(amount));
  }
}

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r} ${g} ${b})`;
}

function setDefaultGrid() {
  addCells(10);
}

function main() {
  setDefaultGrid();

  const userValue = prompt("Pick a size between 1 and 100");

  if (userValue === null) return;

  if (isNaN(Number(userValue))) {
    alert("Invalid value");
    return;
  }

  if (Number(userValue) < 1 || Number(userValue) > 100) {
    alert("Invalid size");
    return;
  }

  addCells(Number(userValue));
}

main();
