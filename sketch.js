const GRID_SIZE = 20;

let died = false

let up;
let down;
let left;
let right;

let headX = 300;
let headY = 300;
let moveX = 0
let moveY = 0

let foodX = 0;
let foodY = 0;

function setup() {
    createCanvas(600, 600)
    frameRate(3)
}

function draw() {
    background(255)

    if (keyCode == ENTER && died) {
        died = false
        headX = 300
        headY = 300
    } else if (keyCode == UP_ARROW && !died) {
        moveY = -GRID_SIZE
        moveX = 0
    } else if (keyCode == DOWN_ARROW && !died) {
        moveY = GRID_SIZE
        moveX = 0
    } else if (keyCode == LEFT_ARROW && !died) {
        moveX = -GRID_SIZE
        moveY = 0
    } else if (keyCode == RIGHT_ARROW && !died) {
        moveX = GRID_SIZE
        moveY = 0
    } else {
        moveX = 0
        moveY = 0
    }

    if (headX < 0) {
        died = true
        headX += GRID_SIZE
    } else if (headX >= width) {
        died = true
        headX -= GRID_SIZE
    } else if (headY < 0) {
        died = true
        headY += GRID_SIZE
    } else if (headY >= height) {
        died = true
        headY -= GRID_SIZE
    }

    fill(0);
    rect(headX, headY, 20)
    headX += moveX
    headY += moveY


    // food
    fill(255, 50, 0)
    circle(foodX + 10, foodY + 10, 20)
}