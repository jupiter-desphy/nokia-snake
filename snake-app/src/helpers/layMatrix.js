export default function layMatrix (game, x, y) {
    for (let i = 0; i < y; i++) {
        game.push(new Array(y));
        for (let j = 0; j < x; j++) {
            game[i][j] = [j, i, null];
        }
    }
}