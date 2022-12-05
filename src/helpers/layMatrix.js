export default function layMatrix (grid, x, y) {
    for (let i = 0; i < y; i++) {
        grid.push(new Array(y));
        for (let j = 0; j < x; j++) {
            grid[i][j] = [j, i, null];
        }
    }
}