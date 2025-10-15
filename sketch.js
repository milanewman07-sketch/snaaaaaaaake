const GRID_SIZE = 20;

let died = false
let start = true
let lastInput = 0;

let headX = 300;
let headY = 300;
let moveX = 0
let moveY = 0

let foodX = 0;
let foodY = 0;

function setup() {
    createCanvas(600, 600)
    frameRate(5)
}

function draw() {
    background(255)


    //check if snake is in bounds
    if (isOutOfBounds(headX, -20, width) || isOutOfBounds(headY, -20, height)) {
        died = true
    }

    // if dead condition T enter died state
    if (died) {
        text("died", 500, 500)
    }


    if (keyCode == ENTER) {
        died = false
        headX = 300
        headY = 300
        start = true
    } else if (keyCode == UP_ARROW && !died && lastInput != 2) {
        moveY = -GRID_SIZE
        moveX = 0
        lastInput = 1
    } else if (keyCode == DOWN_ARROW && !died && lastInput != 1) {
        moveY = GRID_SIZE
        moveX = 0
        lastInput = 2
    } else if (keyCode == LEFT_ARROW && !died && lastInput != 4) {
        moveX = -GRID_SIZE
        moveY = 0
        lastInput = 3
    } else if (keyCode == RIGHT_ARROW && !died && lastInput != 3) {
        moveX = GRID_SIZE
        moveY = 0
        lastInput = 4
    } else {
        if (lastInput === 1) {
            moveY = -GRID_SIZE
        } else if (lastInput === 2) {
            moveY = GRID_SIZE
        } else if (lastInput === 3) {
            moveX = -GRID_SIZE
        } else if (lastInput === 3) {
            moveX = GRID_SIZE
        }
    }



    fill(0);
    rect(headX, headY, 20)
    headX += moveX
    headY += moveY

    if (start) {
        foodX = floor(random(0,30) * 20)
        foodY = floor(random(0,30) * 20)
    }

    makeFood()
        

    start = false
}

function makeFood() { 
    // food
    fill(255, 50, 0)
    circle(foodX + 5, foodY + 10, 20)
}


function isOutOfBounds(coordinate, minVal, maxVal) {
    if (minVal < coordinate && coordinate < maxVal) {
        return false
    } else {
        return true
    }
}
