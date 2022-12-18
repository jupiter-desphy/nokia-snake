import Pixel from "./Pixel";
import layMatrix from "../helpers/layMatrix";

export default function LevelBar({ number, level}) {
    // given letter and layOut, choose which pixels are positive or negative space
    let layOut = [];
    layMatrix(layOut, 9, 30);


    function drawLetter(currentPixel) {
        let x = currentPixel[0];
        let y = currentPixel[1];

        if (((y === 29 && x !== 0 && x < 7) || (x === 6 && y > 29 - number * 3)) // bar drop-shadow always on
            || (x < 5 && y > 27 - number * 3 && y < 28 && level >= number)) // bar ON depending on level
            return 'posi-space';
    }

    return (
        <div className={`level-bar`} >
            {layOut.map((rowArray, ind) => {
                return (
                    rowArray.map((item, i) => {
                        return <Pixel pixelClass={drawLetter(item)} key={`${ind}+${i}`} />
                    })
                )
            })}
        </div>
    )
}