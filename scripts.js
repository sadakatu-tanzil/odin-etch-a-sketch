const grid = document.querySelector(".grid");

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
