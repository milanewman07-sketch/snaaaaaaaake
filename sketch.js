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

    // head

    // key presses
    if (keyCode == ENTER) {
        died = false
        headX = 300
        headY = 300
    } else if (keyCode == UP_ARROW) {
        up = true
        down = false
        left = false
        right = false
    } else if (keyCode == DOWN_ARROW) {
        up = false
        down = true
        left = false
        right = false
    } else if (keyCode == LEFT_ARROW) {
        up = false
        down = false
        left = true
        right = false
    } else if (keyCode == RIGHT_ARROW) {
        up = false
        down = false
        left = false
        right = true
    } else {
        up = false
        down = false
        left = false
        right = true
    }


    // changes direction from keys
    if (!died) {
        if (left) {
            moveX = -20
            moveY = 0
        } else if (right) {
            moveX = 20
            moveY = 0
        } else if (up) {
            moveY = -20
            moveX = 0
        } else if (down) {
            moveY = 20
            moveX = 0
        }
    }


    // stop game at walls
    if ((headX >= width - 20 || headX < 20) && (left || right)) {
        moveX = 0
        died = true
    }

    // stop game at ceiling
    if ((headY >= height - 20 || headY < 20) && (up || down)) {
        moveY = 0
        died = true
    }


    fill(0);
    rect(headX, headY, 20)
    headX += moveX
    headY += moveY


    // food
    fill(255, 50, 0)
    circle(foodX + 10, foodY + 10, 20)
}