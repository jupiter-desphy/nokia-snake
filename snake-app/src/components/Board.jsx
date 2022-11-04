import SingleGridItem from "./SingleGridItem.jsx";

export default function Board({ theGrid, snakeArr, food }) {

    //Write the logic that determines which state this grit item should be
    function generateGridState(currentItem){
        //If I have this right,
        //currentItem should be a value that represents it's own index

        //You now have all the pieces of info that you need
        //You have the current grid item info aka currentItem
        //and you have theGrid
        //and the the snakeArr
        //and the food
        let gridItemState = null;
        return "";
    }

    return (
        <>
        {theGrid.map((rowArray, ind) => {
            //console.log('rows', rowArray);
            for (let i = 0; i < rowArray.length; i++){
                //console.log(ind, rowArray[i], i);
                return <SingleGridItem pixelState={generateGridState(rowArray[i])} key={`${ind}+${i}`}/>
            }
        })}
        </>
    )
}

// [0, 0]