const SNAKE_I_START = [
    [10, 6, 'R', 'snake1'],
    [9, 6, 'R', 'snake1'],
    [8, 6, 'R', 'snake1'],
    [7, 6, 'R', 'snake1'],
    [6, 6, 'R', 'snake1']
];
const SNAKE_II_START = [
    [10, 6, 'R', 'hungry'],
    [9, 6, 'R', 'hungry'],
    [8, 6, 'R', 'hungry'],
    [7, 6, 'R', 'hungry'],
    [6, 6, 'R', 'hungry']
];
const SPEED_START = 250;
const PREY_START = [[null, null], [null, null], null];
const PREY_NA = [['N/A', 'N/A'], ['N/A', 'N/A'], 'N/A'];
const COLUMNS = 22;
const ROWS = 12;

export { SNAKE_I_START, SNAKE_II_START, SPEED_START, PREY_START, PREY_NA, COLUMNS, ROWS }