import Tile from "./SingleGridItem.jsx";
import { useState } from "react";

export default function Board({ theGrid, snakeArr, food, prevFood, gameOver, blinkOn }) {

    function generateGridState(currentItem) {


        for (let i = 0; i < snakeArr.length; i++) {
            if (currentItem[0] === snakeArr[i][0] && currentItem[1] === snakeArr[i][1]) {
                if (gameOver && blinkOn)
                    return "";
                // Tail 
                if (i === snakeArr.length - 1) {
                    if (currentItem[0] === snakeArr[snakeArr.length - 2][0] - 1 && snakeArr[snakeArr.length - 1][1] === snakeArr[snakeArr.length - 2][1])
                        return "right-tail";
                    if (currentItem[0] === snakeArr[snakeArr.length - 2][0] + 1 && snakeArr[snakeArr.length - 1][1] === snakeArr[snakeArr.length - 2][1])
                        return "left-tail";
                    if (currentItem[0] === snakeArr[snakeArr.length - 2][0] && currentItem[1] === snakeArr[snakeArr.length - 2][1] - 1)
                        return "down-tail";
                    if (currentItem[0] === snakeArr[snakeArr.length - 2][0] && currentItem[1] === snakeArr[snakeArr.length - 2][1] + 1)
                        return "up-tail";
                }

                if (i !== 0) {
                    if ((snakeArr[i - 1][2] === 'D' && snakeArr[i][2] === 'R') || (snakeArr[i - 1][2] === 'L' && snakeArr[i][2] === 'U')) {
                        if (currentItem[0] === prevFood[0] && currentItem[1] === prevFood[1]) {
                            return "full-n-e northeast";
                        } else return "northeast";
                    }
                    if ((snakeArr[i - 1][2] === 'D' && snakeArr[i][2] === 'L') || (snakeArr[i - 1][2] === 'R' && snakeArr[i][2] === 'U')) {
                        if (currentItem[0] === prevFood[0] && currentItem[1] === prevFood[1]) {
                            return "full-n-w northwest";
                        } else return "northwest";
                    }
                    if ((snakeArr[i - 1][2] === 'U' && snakeArr[i][2] === 'R') || (snakeArr[i - 1][2] === 'L' && snakeArr[i][2] === 'D')) {
                        if (currentItem[0] === prevFood[0] && currentItem[1] === prevFood[1]) {
                            return "full-s-e southeast";
                        } else return "southeast";
                    }
                    if ((snakeArr[i - 1][2] === 'U' && snakeArr[i][2] === 'L') || (snakeArr[i - 1][2] === 'R' && snakeArr[i][2] === 'D')) {
                        if (currentItem[0] === prevFood[0] && currentItem[1] === prevFood[1]) {
                            return "full-s-w southwest";
                        } else return "southwest";
                    }
                }

                if (snakeArr[i][2] === 'D') {
                    if (currentItem[0] === snakeArr[0][0] && currentItem[1] === snakeArr[0][1]) {
                        if (currentItem[0] === food[0] && currentItem[1] === food[1] - 1) {
                            return "down-feed";
                        } else return "down-head";
                    }
                    if (currentItem[0] === prevFood[0] && currentItem[1] === prevFood[1]) {
                        return "full snake-down";
                    } else return "snake-down";
                }
                if (snakeArr[i][2] === 'R') {
                    if (currentItem[0] === snakeArr[0][0] && currentItem[1] === snakeArr[0][1]) {
                        if (currentItem[0] === food[0] - 1 && currentItem[1] === food[1]) {
                            return "right-feed";
                        } else return "right-head";
                    }
                    if (currentItem[0] === prevFood[0] && currentItem[1] === prevFood[1]) {
                        return "full snake-right";
                    } else return "snake-right";
                }
                if (snakeArr[i][2] === 'L') {
                    if (currentItem[0] === snakeArr[0][0] && currentItem[1] === snakeArr[0][1]) {
                        if (currentItem[0] === food[0] + 1 && currentItem[1] === food[1]) {
                            return "left-feed";
                        } else return "left-head";
                    } else if (currentItem[0] === prevFood[0] && currentItem[1] === prevFood[1]) {
                        return "full snake-left";
                    } else return "snake-left";
                }
                if (snakeArr[i][2] === 'U') {
                    if (currentItem[0] === snakeArr[0][0] && currentItem[1] === snakeArr[0][1]) {
                        if (currentItem[0] === food[0] && currentItem[1] === food[1] + 1) {
                            return "up-feed";
                        } else return "up-head";
                    } else if (currentItem[0] === prevFood[0] && currentItem[1] === prevFood[1]) {
                        return "full snake-up";
                    } else return "snake-up";
                }
            }
        }

        if (currentItem[0] === food[0] && currentItem[1] === food[1]) {
            return "food";
        };
    }

    return (
        <>
            {theGrid.map((rowArray, ind) => {
                return (
                    rowArray.map((item, i) => {
                        return <Tile pixelState={generateGridState(item)} key={`${ind}+${i}`} />
                    })
                )
            })}
        </>
    )
}