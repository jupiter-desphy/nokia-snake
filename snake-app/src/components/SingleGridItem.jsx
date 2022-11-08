export default function Tile({pixelState}){
    return (
        <div className={`pixel ${pixelState}`}>

            <div className="d-f d-h r-h r-f"></div>
            <div className="l-f s-w s-e u-t up down food-pixel"></div>
            <div className="d-f r-f s-w s-e d-h d-t u-t up down"></div>
            <div className="l-f l-h"></div>

            <div className="u-f s-e n-e l-t left right food-pixel"></div>
            <div className="d-f r-f s-w n-e u-t u-h d-h l-h l-t r-h right down"></div>
            <div className="d-f l-f s-e n-w u-h d-h u-t d-t l-h r-t r-h up left food-pixel"></div>
            <div className="u-f s-w n-w r-t right left"></div>

            <div className="d-f r-f s-e n-e l-t r-t r-h right left"></div>
            <div className="u-f r-f s-e n-w d-h u-h d-t l-h l-t r-t r-h up left food-pixel"></div>
            <div className="u-f l-f s-w n-e d-h u-h u-t d-t l-h l-t r-t r-h down right"></div>
            <div className="d-f l-f s-w n-w l-h l-t r-t right left"></div>

            <div className="u-f u-h"></div>
            <div className="l-f n-w n-e d-t up down"></div>
            <div className="u-f r-f n-w n-e u-h u-t d-t up down"></div>
            <div className=""></div>
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