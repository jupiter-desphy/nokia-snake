export default function SingleGridItem({pixelState}){
    return (
        <div className={`pixel ${pixelState}`}>
            <div className="px1"></div>
            <div className="px2"></div>
            <div className="px3"></div>
            <div className="px4"></div>
            <div className="px5"></div>
            <div className="px6"></div>
            <div className="px7"></div>
            <div className="px8"></div>
            <div className="px9"></div>
        </div>
    )
}
// list out different things this could display
/**
 * 3 x 3 cells
 * single grid item itself to be identified by [x, y] coordinates
 * states: snake, food, head or blank
 * 
 */

/* snake array should look like 
    snakeArr = [
        [0,0],
        [1,0],
        [2,0]
    ]
*/