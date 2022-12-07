import TilePattern from "./TilePattern.jsx";
import { COLUMNS, ROWS } from "../constants.js";

export default function Board({ theGrid, snake, food, gameOver, blinkOn, prey }) {

    function generateTileClass(currentTile) {


        /* ----- SNAKE  ----- */
        for (let i = 0; i < snake.length; i++) {
            if (currentTile[0] === snake[i][0] && currentTile[1] === snake[i][1]) {
                if (gameOver && blinkOn)
                    return "";

                /* ----- TAIL ----- */
                if (prey[2] !== 'N/A' && i === snake.length - 1) {
                    if ((currentTile[0] === snake[snake.length - 2][0] - 1 && snake[snake.length - 1][1] === snake[snake.length - 2][1])
                        || (snake[snake.length - 2][0] === 1 && currentTile[0] === COLUMNS - 2)) //coming through other side
                        return "right-tail";
                    if ((currentTile[0] === snake[snake.length - 2][0] + 1 && snake[snake.length - 1][1] === snake[snake.length - 2][1])
                        || (currentTile[0] < snake[snake.length - 2][0]))
                        return "left-tail";
                    if ((currentTile[0] === snake[snake.length - 2][0] && currentTile[1] === snake[snake.length - 2][1] - 1)
                        || (snake[snake.length - 2][1] === 1 && currentTile[1] === ROWS - 2))
                        return "down-tail";
                    if ((currentTile[0] === snake[snake.length - 2][0] && currentTile[1] === snake[snake.length - 2][1] + 1)
                        || (currentTile[1] < snake[snake.length - 2][1]))
                        return "up-tail";
                }

                /* ----- BODY CORNERS ----- */
                if (i !== 0) {
                    if ((snake[i - 1][2] === 'D' && snake[i][2] === 'R') || (snake[i - 1][2] === 'L' && snake[i][2] === 'U')) {
                        if (prey[2] === 'N/A')
                            return 'NE1';
                        if (snake[i][3] === 'full') {
                            return "full-n-e northeast";
                        } return "northeast";
                    }

                    if ((snake[i - 1][2] === 'D' && snake[i][2] === 'L') || (snake[i - 1][2] === 'R' && snake[i][2] === 'U')) {
                        if (prey[2] === 'N/A')
                            return 'NW1';
                        if (snake[i][3] === 'full') {
                            return "full-n-w northwest";
                        } return "northwest";
                    }
                    if ((snake[i - 1][2] === 'U' && snake[i][2] === 'R') || (snake[i - 1][2] === 'L' && snake[i][2] === 'D')) {
                        if (prey[2] === 'N/A')
                            return 'SE1'
                        if (snake[i][3] === 'full') {
                            return "full-s-e southeast";
                        } return "southeast";
                    }
                    if ((snake[i - 1][2] === 'U' && snake[i][2] === 'L') || (snake[i - 1][2] === 'R' && snake[i][2] === 'D')) {
                        if (prey[2] === 'N/A')
                            return 'SW1'
                        if (snake[i][3] === 'full') {
                            return "full-s-w southwest";
                        } return "southwest";
                    }
                }

                /* ----- HEAD & STRAIGHT BODY ----- */
                if (prey[2] === 'N/A') {
                    if (currentTile[0] === snake[0][0] && currentTile[1] === snake[0][1]) {
                        if ((snake[i][2] === 'R') || (snake[i][2] === 'D')) return 'head'
                    }
                    if ((snake[i][2] === 'D') || (snake[i][2] === 'U')) return 'vertical'
                    if ((snake[i][2] === 'R') || (snake[i][2] === 'L')) return 'horizontal'
                }

                if (snake[i][2] === 'D') {
                    if (currentTile[0] === snake[0][0] && currentTile[1] === snake[0][1]) {
                        if ((currentTile[0] === food[0] && currentTile[1] === food[1] - 1) || (currentTile[0] === prey[0][0] && currentTile[1] === prey[0][1] - 1) || (currentTile[0] === prey[1][0] && currentTile[1] === prey[1][1] - 1)) {
                            return "down-feed";
                        } else return "down-head";
                    }
                    if (snake[i][3] === 'full') {
                        return "full snake-down";
                    }
                    return "snake-down";
                }
                if (snake[i][2] === 'R') {
                    if (currentTile[0] === snake[0][0] && currentTile[1] === snake[0][1]) {
                        if ((currentTile[0] === food[0] - 1 && currentTile[1] === food[1]) || (currentTile[0] === prey[0][0] - 1 && currentTile[1] === prey[0][1]) || (currentTile[0] === prey[1][0] - 1 && currentTile[1] === prey[1][1])) {
                            return "right-feed";
                        } else return "right-head";
                    }
                    if (snake[i][3] === 'full') {
                        return "full snake-right";
                    }
                    return "snake-right";
                }
                if (snake[i][2] === 'L') {
                    if (currentTile[0] === snake[0][0] && currentTile[1] === snake[0][1]) {
                        if ((currentTile[0] === food[0] + 1 && currentTile[1] === food[1]) || (currentTile[0] === prey[0][0] + 1 && currentTile[1] === prey[0][1]) || (currentTile[0] === prey[1][0] + 1 && currentTile[1] === prey[1][1])) {
                            return "left-feed";
                        } else return "left-head";
                    }
                    if (snake[i][3] === 'full') {
                        return "full snake-left";
                    }
                    return "snake-left";
                }
                if (snake[i][2] === 'U') {
                    if (currentTile[0] === snake[0][0] && currentTile[1] === snake[0][1]) {
                        if ((currentTile[0] === food[0] && currentTile[1] === food[1] + 1) || (currentTile[0] === prey[0][0] && currentTile[1] === prey[0][1] + 1) || (currentTile[0] === prey[1][0] && currentTile[1] === prey[1][1] + 1)) {
                            return "up-feed";
                        } else return "up-head";
                    }
                    if (snake[i][3] === 'full') {
                        return "full snake-up";
                    }
                    return "snake-up";
                }
            }
        }

        /* ----- BORDER TILES ----- */
        if (currentTile[0] === 0) {
            if (theGrid.length > 1) {
                if (currentTile[1] === 0) return "nw-border";
                if (currentTile[1] === ROWS - 1) {
                    if (prey[2] === 'N/A') { // prey[2] === 'N/A in snake 1 where border needs to be brought in on right and bottom.
                        return 'sw-border1';
                    } else 
                    return "sw-border";
                }
            }
            return "left-border";
        }
        if (currentTile[0] === COLUMNS - 1) {
            if (theGrid.length > 1) {
                if (currentTile[1] === 0){
                    if (prey[2] === 'N/A') {
                        return 'ne-border1';
                    }
                    return "ne-border";
                } else if (currentTile[1] === ROWS - 1) {
                    if (prey[2] === 'N/A') {
                        return 'se-border1';
                    } 
                    return "se-border";
                }
                if (prey[2] === 'N/A') {
                    return 'e-border1';
                }
            } return "right-border";
        }

        if (theGrid.length > 1) {
            if (currentTile[1] === 0) {
                return "upper-border";
            }
            if (currentTile[1] === ROWS - 1) {
                if (prey[2] === 'N/A') {
                    return 's-border1';
                } else 
                return "bottom-border";
            }
        }

        /* ----- FOOD ----- */
        if (currentTile[0] === food[0] && currentTile[1] === food[1]) {
            return "food";
        };

        /* ----- PREY ----- */
        if (currentTile[0] === prey[0][0] && currentTile[1] === prey[0][1]) {
            return prey[2] + '1';
        };
        if (currentTile[0] === prey[1][0] && currentTile[1] === prey[1][1]) {
            return prey[2] + '2';
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