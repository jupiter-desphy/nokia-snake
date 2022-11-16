const SNAKE_START = [
    [10, 4, 'R'],
    [9, 4, 'R'],
    [8, 4, 'R'],
    [7, 4, 'R'],
    [6, 4, 'R']
    // ,
    // [5, 4],
    // [4, 4],
    // [3, 4],
    // [2, 4],
    // [1, 4],
    // [0, 4]
];

const PREY_START = [[null, null], [null, null], null];

const DIRECTIONS = {
    37: [-1, 0], //left
    38: [0, -1], //up
    39: [1, 0], //right
    40: [0, 1] //down
}



export { DIRECTIONS, SNAKE_START, PREY_START }