const animationProperty = {
    'duration': 5000,
    'iteration': 1,
}

window.onload = function () {
    const box = document.getElementsByClassName('box__inner')[0];

    document.addEventListener('keydown', keyPush); 

}

function game() {

    px += dx;
    py += dy;

    if(px < 0) {
        px = borX - 1;
    } else if (px > borX - 1) {
        px = 0;
    }

    if(py < 0) {
        py = borY - 1;
    } else if (py > borY - 1) {
        py = 0;
    }

}


let dx, dy = 0;
let px = 0, py = 0; // position of x and y

let borX = 480, borY = 480; // borders of X and Y

function keyPush(event) {
    const snake = document.getElementsByClassName('snake')[0];

    let moveRight = [
        { transform: `translate(${px}px, ${py}px)`},
        { transform: `translate(${borX}px, ${py}px)`}
    ];

    let moveLeft = [
        { transform: `translate(${px}px, ${py}px)`},
        { transform: `translate(${0}px, ${py}px)`}
    ];

    let moveUp = [
        { transform: `translate(${px}px, ${py}px)`},
        { transform: `translate(${px}px, ${0}px)`}
    ];

    let moveDown = [
        { transform: `translate(${px}px, ${py}px)`},
        { transform: `translate(${px}px, ${borY}px)`}
    ];

    switch(event.keyCode) {
        case 37: // left arrow
            getPosition(snake);
            moveLeft = [
                { transform: `translate(${px}px, ${py}px)`},
                { transform: `translate(${0}px, ${py}px)`}
            ];
            snake.animate(moveLeft, animationProperty);
            break;
        case 38: // up arrow
            getPosition(snake);
            moveUp = [
                { transform: `translate(${px}px, ${py}px)`},
                { transform: `translate(${px}px, ${0}px)`}
            ];
            snake.animate(moveUp, animationProperty);
            break;
        case 39: // right arrow
            getPosition(snake);
            moveRight = [
                { transform: `translate(${px}px, ${py}px)`},
                { transform: `translate(${500}px, ${py}px)`}
            ];
            snake.animate(moveRight, animationProperty);
            break;
        case 40: // down arrow
            getPosition(snake);
            moveDown = [
                { transform: `translate(${px}px, ${py}px)`},
                { transform: `translate(${px}px, ${500}px)`}
            ];
            snake.animate(moveDown, animationProperty);
            console.log(px);
            break;
    }
}

function getPosition(snake) {
    const box = document.getElementsByClassName('box__inner')[0];
    let pbox = box.getBoundingClientRect();
    let psnake = snake.getBoundingClientRect();

    // let rPosRight = pbox.right - psnake.right;
    let rPosTop = psnake.top - pbox.top;
    let rPosLeft = psnake.left - pbox.left;

    px = rPosLeft;
    py = rPosTop;

    console.log(py);
}