import Tile from "./SingleGridItem.jsx";

export default function Board({ theGrid, snakeArr, food, prevFood }) {

    //Write the logic that determines which state this grid item should be
    function generateGridState(currentItem) {
        //If I have this right,
        //currentItem should be a value that represents it's own index

        //You now have all the pieces of info that you need
        //You have the current grid item info aka currentItem
        //and you have theGrid
        //and the the snakeArr [[x, y], [x, y] ,[x, y], [x, y]]
        //and the food

        for (let i = 0; i < snakeArr.length; i++) {


            if (i == snakeArr.length - 1 && currentItem[0] == snakeArr[snakeArr.length - 2][0] - 1 && snakeArr[snakeArr.length - 1][1] == snakeArr[snakeArr.length - 2][1] && currentItem[0] == snakeArr[i][0] && currentItem[1] == snakeArr[i][1]) {
                return "right-tail"
            } else if (i == snakeArr.length - 1 && currentItem[0] == snakeArr[snakeArr.length - 2][0] + 1 && snakeArr[snakeArr.length - 1][1] == snakeArr[snakeArr.length - 2][1] && currentItem[0] == snakeArr[i][0] && currentItem[1] == snakeArr[i][1]) {
                return "left-tail"
            } else if (i == snakeArr.length - 1 && currentItem[0] == snakeArr[snakeArr.length - 2][0] && currentItem[1] == snakeArr[snakeArr.length - 2][1] - 1 && currentItem[0] == snakeArr[i][0] && currentItem[1] == snakeArr[i][1]) {
                return "down-tail"
            } else if (i == snakeArr.length - 1 && currentItem[0] == snakeArr[snakeArr.length - 2][0] && currentItem[1] == snakeArr[snakeArr.length - 2][1] + 1 && currentItem[0] == snakeArr[i][0] && currentItem[1] == snakeArr[i][1]) {
                return "up-tail"
            } else
                // if(i == snakeArr.length-1 && snakeArr[snakeArr.length-1][0]+1 == snakeArr[snakeArr.length-2][0]+1 && currentItem[0] == snakeArr[i][0] && currentItem[1] == snakeArr[i][1]) {
                //     return "snake-left-tail"
                // } else

                if (i !== 0 && snakeArr[i - 1][2] == 'D' && snakeArr[i][2] == 'R' && currentItem[0] == snakeArr[i][0] && currentItem[1] == snakeArr[i][1]) {
                    return "northeast"
                } else if (i !== 0 && snakeArr[i - 1][2] == 'L' && snakeArr[i][2] == 'U' && currentItem[0] == snakeArr[i][0] && currentItem[1] == snakeArr[i][1]) {
                    return "northeast"
                } else if (i !== 0 && snakeArr[i - 1][2] == 'D' && snakeArr[i][2] == 'L' && currentItem[0] == snakeArr[i][0] && currentItem[1] == snakeArr[i][1]) {
                    return "northwest"
                } else if (i !== 0 && snakeArr[i - 1][2] == 'R' && snakeArr[i][2] == 'U' && currentItem[0] == snakeArr[i][0] && currentItem[1] == snakeArr[i][1]) {
                    return "northwest"
                } else if (i !== 0 && snakeArr[i - 1][2] == 'U' && snakeArr[i][2] == 'R' && currentItem[0] == snakeArr[i][0] && currentItem[1] == snakeArr[i][1]) {
                    return "southeast"
                } else if (i !== 0 && snakeArr[i - 1][2] == 'L' && snakeArr[i][2] == 'D' && currentItem[0] == snakeArr[i][0] && currentItem[1] == snakeArr[i][1]) {
                    return "southeast"
                } else if (i !== 0 && snakeArr[i - 1][2] == 'U' && snakeArr[i][2] == 'L' && currentItem[0] == snakeArr[i][0] && currentItem[1] == snakeArr[i][1]) {
                    return "southwest"
                } else if (i !== 0 && snakeArr[i - 1][2] == 'R' && snakeArr[i][2] == 'D' && currentItem[0] == snakeArr[i][0] && currentItem[1] == snakeArr[i][1]) {
                    return "southwest"
                } else
                    if (currentItem[0] == snakeArr[i][0] && currentItem[1] == snakeArr[i][1] && snakeArr[i][2] == 'D') {
                        if (currentItem[0] == snakeArr[0][0] && currentItem[1] == snakeArr[0][1] && snakeArr[0][2] == 'D') {
                            if (currentItem[0] == food[0] && currentItem[1] == food[1] - 1) {
                                return "down-feed"
                            } else
                                return "down-head";
                        } else if (currentItem[0] === prevFood[0] && currentItem[1] === prevFood[1]) {
                                return "full snake-down"
                        } else
                            return "snake-down";
                    }
        }

        for (let i = 0; i < snakeArr.length; i++) {
            if (currentItem[0] == snakeArr[i][0] && currentItem[1] == snakeArr[i][1] && snakeArr[i][2] == 'R') {
                if (currentItem[0] == snakeArr[0][0] && currentItem[1] == snakeArr[0][1] && snakeArr[0][2] == 'R') {
                    if (currentItem[0] == food[0] - 1 && currentItem[1] == food[1]) {
                        return "right-feed";
                    } else {
                        return "snake right-head";
                    } 
                } else if (currentItem[0] === prevFood[0] && currentItem[1] === prevFood[1]) {
                    return "full snake-right"
                } else
                    return "snake snake-right";
            }
        }


        for (let i = 0; i < snakeArr.length; i++) {
            if (currentItem[0] == snakeArr[i][0] && currentItem[1] == snakeArr[i][1] && snakeArr[i][2] == 'L') {
                if (currentItem[0] == snakeArr[0][0] && currentItem[1] == snakeArr[0][1] && snakeArr[0][2] == 'L') {
                    if (currentItem[0] == food[0] + 1 && currentItem[1] == food[1]) {
                        return "left-feed"
                    } else
                        return "snake left-head"
                    // } else if(currentItem[0] == snakeArr[snakeArr.length-1][0] && currentItem[1] == snakeArr[snakeArr.length-1][1] && snakeArr[snakeArr.length-1][2] == 'L') {
                    //     return "snake left-tail"
                } else if (currentItem[0] === prevFood[0] && currentItem[1] === prevFood[1]) {
                    return "full snake-left"
                } else
                    return "snake snake-left";
            }
        }

        for (let i = 0; i < snakeArr.length; i++) {
            if (currentItem[0] == snakeArr[i][0] && currentItem[1] == snakeArr[i][1] && snakeArr[i][2] == 'U') {
                if (currentItem[0] == snakeArr[0][0] && currentItem[1] == snakeArr[0][1] && snakeArr[0][2] == 'U') {
                    if (currentItem[0] == food[0] && currentItem[1] == food[1] + 1) {
                        return "up-feed"
                    } else
                        return "snake up-head"
                    } else if (currentItem[0] === prevFood[0] && currentItem[1] === prevFood[1]) {
                        return "full snake-up"
                } else
                    return "snake snake-up";
            }
        }



        // for (let i = 0; i < snakeArr.length; i++) {
        //     if (currentItem[0] == snakeArr[i][0] && currentItem[1] == snakeArr[i][1]) {
        //         return "snake";
        //     }
        // }

        if (currentItem[0] == food[0] && currentItem[1] == food[1]) {
            return "food";
        };

        return "";
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