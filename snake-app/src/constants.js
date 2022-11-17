const SNAKE_START = [
    [10, 6, 'R', 'hungry'],
    [9, 6, 'R', 'hungry'],
    [8, 6, 'R', 'hungry'],
    [7, 6, 'R', 'hungry'],
    [6, 6, 'R', 'hungry']
    // ,
    // [5, 4],
    // [4, 4],
    // [3, 4],
    // [2, 4],
    // [1, 4],
    // [0, 4]
];

const PREY_START = [[null, null], [null, null], null];

const COLUMNS = 22;
const ROWS = 12;

const DIRECTIONS = {
    37: [-1, 0], //left
    38: [0, -1], //up
    39: [1, 0], //right
    40: [0, 1] //down
}



export { DIRECTIONS, SNAKE_START, PREY_START, COLUMNS, ROWS }