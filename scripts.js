const grid = document.querySelector(".grid");

function createCell(size, color) {
  const cell = document.createElement("span");
  cell.classList.add("cell");
  cell.style.setProperty("--side", `${100 / size}%`);

  cell.addEventListener("mouseenter", function () {
    cell.style.setProperty("--color", `${color}`);
  });

  return cell;
}

function addCells(amount, color) {
  const size = 25;
  grid.replaceChildren();
  for (let i = 1; i <= amount ** 2; i++) {
    grid.append(createCell(amount, color));
  }
}
