let direction = { x: 0, y: 0 };
let prevDirection = { x: 0, y: 0 };

export let activate = false;

window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
      if (prevDirection.y === 1) break;
      direction = { x: 0, y: -1 };
      activate = true;
      break;
    case "ArrowDown":
      if (prevDirection.y === -1) break;
      direction = { x: 0, y: 1 };
      activate = true;
      break;

    case "ArrowLeft":
      if (prevDirection.x === 1) break;
      direction = { x: -1, y: 0 };
      activate = true;
      break;

    case "ArrowRight":
      if (prevDirection.x === -1) break;
      direction = { x: 1, y: 0 };
      activate = true;
      break;
  }
});

export function getDirection() {
  prevDirection = direction;
  return direction;
}

export function getPrevDirection() {
  return prevDirection;
}
