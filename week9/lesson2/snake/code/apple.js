import { isColision, growSnake } from "./snake.js";

let applePos = { x: 15, y: 15 };

export function update() {
  if (isColision(applePos, { ignoreHead: false })) {
    console.log("Snake is collapsed!");
    growSnake();
    applePos = getRandomValue();
  }
}

export function draw(gameBoard) {
  const appleElement = document.createElement("div");
  appleElement.className = "apple";
  appleElement.style.gridRowStart = applePos.x;
  appleElement.style.gridColumnStart = applePos.y;
  gameBoard.append(appleElement);
}

function getRandomValue() {
  let newApplePos;

  while (newApplePos == null || isColision(newApplePos)) {
    newApplePos = randomGridPosition();
  }

  return newApplePos;
}

function randomGridPosition() {
  return {
    x: Math.floor(Math.random() * 27) + 1,
    y: Math.floor(Math.random() * 27) + 1,
  };
}
