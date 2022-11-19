const SNAKE_I_START = [
    [12, 7, 'R'],
    [11, 7, 'R'],
    [10, 7, 'R'],
    [9, 7, 'R'],
    [8, 7, 'R'],
    [7, 7, 'R'],
    [6, 7, 'R']
];
const SNAKE_II_START = [
    [12, 7, 'R', 'hungry'],
    [11, 7, 'R', 'hungry'],
    [10, 7, 'R', 'hungry'],
    [9, 7, 'R', 'hungry'],
    [8, 7, 'R', 'hungry'],
    [7, 7, 'R', 'hungry'],
    [6, 7, 'R', 'hungry']
];
const SPEED_START = 200;
const PREY_START = [[null, null], [null, null], null];
const PREY_NA = [['N/A', 'N/A'], ['N/A', 'N/A'], 'N/A'];
const COLUMNS = 25;
const ROWS = 15;

export { SNAKE_I_START, SNAKE_II_START, SPEED_START, PREY_START, PREY_NA, COLUMNS, ROWS }