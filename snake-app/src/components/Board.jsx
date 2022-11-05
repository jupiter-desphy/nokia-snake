import SingleGridItem from "./SingleGridItem.jsx";

export default function Board({ theGrid, snakeArr, food }) {

    //Write the logic that determines which state this grid item should be
    function generateGridState(currentItem) {
        //If I have this right,
        //currentItem should be a value that represents it's own index

        //You now have all the pieces of info that you need
        //You have the current grid item info aka currentItem
        //and you have theGrid
        //and the the snakeArr [[x, y], [x, y] ,[x, y], [x, y]]
        //and the food
        let gridItemState = null;

        for (let i = 0; i < snakeArr.length; i++) {
            if (currentItem[0] == snakeArr[i][0] && currentItem[1] == snakeArr[i][1]) {
                return "snake";
            }
        }

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
                        return <SingleGridItem pixelState={generateGridState(item)} key={`${ind}+${i}`} />
                    })
                )
            })}
        </>
    )
}