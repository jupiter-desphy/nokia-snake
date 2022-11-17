import TilePattern from "./TilePattern.jsx";
import { COLUMNS, ROWS } from "../constants.js";

export default function Board({ theGrid, snakeArr, food, gameOver, blinkOn, prey }) {


    function generateTileClass(currentTile) {

        /* ----- BORDER TILES ----- */
        if (currentTile[0] === 0) {
            if (currentTile[1] === 0) {
                return "nw-border";
            } else if (currentTile[1] === ROWS - 1) {
                return "sw-border";
            } else return "left-border";
        }
        if (currentTile[0] === COLUMNS - 1) {
            if (currentTile[1] === 0) {
                return "ne-border";
            } else if (currentTile[1] === ROWS - 1) {
                return "se-border";
            } else return "right-border";
        }
        if (currentTile[1] === 0) {
            return "upper-border";
        }
        if (currentTile[1] === ROWS - 1) {
            return "bottom-border";
        }

        /* ----- SNAKE  ----- */
        for (let i = 0; i < snakeArr.length; i++) {
            if (currentTile[0] === snakeArr[i][0] && currentTile[1] === snakeArr[i][1]) {
                if (gameOver && blinkOn)
                    return "";

                /* ----- TAIL ----- */ 
                if (i === snakeArr.length - 1) {
                    if (currentTile[0] === snakeArr[snakeArr.length - 2][0] - 1 && snakeArr[snakeArr.length - 1][1] === snakeArr[snakeArr.length - 2][1])
                        return "right-tail";
                    if (currentTile[0] === snakeArr[snakeArr.length - 2][0] + 1 && snakeArr[snakeArr.length - 1][1] === snakeArr[snakeArr.length - 2][1])
                        return "left-tail";
                    if (currentTile[0] === snakeArr[snakeArr.length - 2][0] && currentTile[1] === snakeArr[snakeArr.length - 2][1] - 1)
                        return "down-tail";
                    if (currentTile[0] === snakeArr[snakeArr.length - 2][0] && currentTile[1] === snakeArr[snakeArr.length - 2][1] + 1)
                        return "up-tail";
                }

                /* ----- BODY ----- */
                if (i !== 0) {
                    if ((snakeArr[i - 1][2] === 'D' && snakeArr[i][2] === 'R') || (snakeArr[i - 1][2] === 'L' && snakeArr[i][2] === 'U')) {
                        if (snakeArr[i][3] === 'full') {
                            return "full-n-e northeast";
                        } return "northeast";
                    }

                    if ((snakeArr[i - 1][2] === 'D' && snakeArr[i][2] === 'L') || (snakeArr[i - 1][2] === 'R' && snakeArr[i][2] === 'U')) {
                        if (snakeArr[i][3] === 'full') {
                            return "full-n-w northwest";
                        } return "northwest";
                    }
                    if ((snakeArr[i - 1][2] === 'U' && snakeArr[i][2] === 'R') || (snakeArr[i - 1][2] === 'L' && snakeArr[i][2] === 'D')) {
                        if (snakeArr[i][3] === 'full') {
                            return "full-s-e southeast";
                        } return "southeast";
                    }
                    if ((snakeArr[i - 1][2] === 'U' && snakeArr[i][2] === 'L') || (snakeArr[i - 1][2] === 'R' && snakeArr[i][2] === 'D')) {
                        if (snakeArr[i][3] === 'full') {
                            return "full-s-w southwest";
                        } return "southwest";
                    }
                }

                /* ----- HEAD ----- */
                if (snakeArr[i][2] === 'D') {
                    if (currentTile[0] === snakeArr[0][0] && currentTile[1] === snakeArr[0][1]) {
                        if ((currentTile[0] === food[0] && currentTile[1] === food[1] - 1) || (currentTile[0] === prey[0][0] && currentTile[1] === prey[0][1] - 1) || (currentTile[0] === prey[1][0] && currentTile[1] === prey[1][1] - 1)) {
                            return "down-feed";
                        } else return "down-head";
                    }
                    if (snakeArr[i][3] === 'full') {
                        return "full snake-down";
                    }
                    return "snake-down";
                }
                if (snakeArr[i][2] === 'R') {
                    if (currentTile[0] === snakeArr[0][0] && currentTile[1] === snakeArr[0][1]) {
                        if ((currentTile[0] === food[0] - 1 && currentTile[1] === food[1]) || (currentTile[0] === prey[0][0] - 1 && currentTile[1] === prey[0][1]) || (currentTile[0] === prey[1][0] - 1 && currentTile[1] === prey[1][1])) {
                            return "right-feed";
                        } else return "right-head";
                    }
                    if (snakeArr[i][3] === 'full') {
                        return "full snake-right";
                    }
                    return "snake-right";
                }
                if (snakeArr[i][2] === 'L') {
                    if (currentTile[0] === snakeArr[0][0] && currentTile[1] === snakeArr[0][1]) {
                        if ((currentTile[0] === food[0] + 1 && currentTile[1] === food[1]) || (currentTile[0] === prey[0][0] + 1 && currentTile[1] === prey[0][1]) || (currentTile[0] === prey[1][0] + 1 && currentTile[1] === prey[1][1])) {
                            return "left-feed";
                        } else return "left-head";
                    }
                    if (snakeArr[i][3] === 'full') {
                        return "full snake-left";
                    }
                    return "snake-left";
                }
                if (snakeArr[i][2] === 'U') {
                    if (currentTile[0] === snakeArr[0][0] && currentTile[1] === snakeArr[0][1]) {
                        if ((currentTile[0] === food[0] && currentTile[1] === food[1] + 1) || (currentTile[0] === prey[0][0] && currentTile[1] === prey[0][1] + 1) || (currentTile[0] === prey[1][0] && currentTile[1] === prey[1][1] + 1)) {
                            return "up-feed";
                        } else return "up-head";
                    }
                    if (snakeArr[i][3] === 'full') {
                        return "full snake-up";
                    }
                    return "snake-up";
                }
            }
        }

        /* ----- FOOD ----- */
        if (currentTile[0] === food[0] && currentTile[1] === food[1]) {
            return "food";
        };

        /* ----- PREY ----- */
        if (currentTile[0] === prey[0][0] && currentTile[1] === prey[0][1]) {
            if (prey[2] === 'caterpillar')
                return "caterpillar1";
            if (prey[2] === 'fish')
                return "fish1";
            if (prey[2] === 'spider')
                return 'spider1';
        };
        if (currentTile[0] === prey[1][0] && currentTile[1] === prey[1][1]) {
            if (prey[2] === 'caterpillar')
                return "caterpillar2";
            if (prey[2] === 'fish')
                return "fish2";
            if (prey[2] === 'spider')
                return 'spider2'
        };
    }

    return (
        <>
            {theGrid.map((rowArray, ind) => {
                return (
                    rowArray.map((item, i) => {
                        return <TilePattern pixelState={generateTileClass(item)} key={`${ind}+${i}`} />
                    })
                )
            })}
        </>
    )
}