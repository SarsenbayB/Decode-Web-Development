import { getDirection, getPrevDirection } from "./move.js";

export const SNAKE_SPEED = 5;
const snakeBody = [
  { x: 10, y: 10 },
  { x: 10, y: 11 },
];

export function update() {
  const direction = getDirection();

  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] };
  }

  snakeBody[0].x += direction.y;
  snakeBody[0].y += direction.x;
}

export function draw(gameBoard) {
  snakeBody.forEach((body) => {
    const snakeElement = document.createElement("div");
    snakeElement.className = "snake";
    snakeElement.style.gridRowStart = body.x;
    snakeElement.style.gridColumnStart = body.y;
    gameBoard.append(snakeElement);
  });
}

export function isColision(applePos) {
  // return snakeBody[0].x === applePos.x && snakeBody[0].y === applePos.y;

  return snakeBody.some((segment) => {
    return equalPosition(segment, applePos);
  });
}

function equalPosition(position1, position2) {
  return position1.x === position2.x && position1.y === position2.y;
}

export function growSnake() {
  let size = snakeBody.length;
  let dx = getDirection().x,
    dy = getDirection().y;
  if (snakeBody.length > 2) {
    dx = snakeBody[size - 2].x - snakeBody[size - 1].x;
    dy = snakeBody[size - 2].y - snakeBody[size - 1].y;
  }
  snakeBody.push({
    x: snakeBody[snakeBody.length - 1].x + dx,
    y: snakeBody[snakeBody.length - 1].y + dy,
  });


  const rating = document.getElementsByClassName('rating')[0];
  rating.innerHTML = 'Result: ' + snakeBody.length;
}

export function getSnakeHead() {
  return snakeBody[0];
}

export function snakeIntersection() {
  const snakeHead = getSnakeHead();

  for (let i = snakeBody.length - 1; i >= 1; --i) {
    if (snakeHead.x === snakeBody[i].x && snakeHead.y === snakeBody[i].y) {
      return true;
    }
  }
  return false;
}
