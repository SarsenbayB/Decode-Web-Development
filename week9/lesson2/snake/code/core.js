import {
  update as updateSnake,
  draw as drawSnake,
  SNAKE_SPEED,
  getSnakeHead,
  snakeIntersection,
} from "./snake.js";
import { update as updateApple, draw as drawApple } from "./apple.js";
import { activate } from "./move.js";

let render = 0;
const gameBoard = document.getElementsByClassName("game-board")[0];
let gameOver = false;

function main(currentTime) {
  if (gameOver) {
    console.log(gameOver);
    return alert("You lose the game!");
  }

  window.requestAnimationFrame(main);
  const dx = (currentTime - render) / 1000;

  if (dx < 1 / SNAKE_SPEED) return;
  render = currentTime;

  // Logic and render of the game
  update();
  draw();
}

function update() {
  if (activate) {
    updateSnake();
    updateApple();
  }

  checkGame();
}

function draw() {
  gameBoard.innerHTML = "";
  drawSnake(gameBoard);
  drawApple(gameBoard);
}

function checkGame() {
  gameOver = isCollapsedWithBoard(getSnakeHead()) || snakeIntersection();
}

function isCollapsedWithBoard(head) {
  return head.x < 1 || head.x > 27 || head.y < 1 || head.y > 27;
}

window.requestAnimationFrame(main);
