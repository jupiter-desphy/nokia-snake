import Pixel from "./Pixel";
import layMatrix from "../helpers/layMatrix";

export default function LevelBar({ number }) {
    // given letter and layOut, choose which pixels are positive or negative space
    let layOut = [];
    layMatrix(layOut, 9, 30);
    console.log(layOut)


    function drawLetter(currentPixel) {
        let x = currentPixel[0];
        let y = currentPixel[1];
        console.log (currentPixel)
        let p = 'posi-space';
        let n = 'negi-space';

        if (number === '1') {
            if ((x === 0 && y === 2)
                || (x === 1)) return p;
            return n;
        }

        if (number === 1) {
            if ((y)
                ) return p;
            return n;
        }

        if (number === 1) {
            if ((x === 0 && (y < 2 || y > 6))
                || ((x === 1 || x === 2) && (y < 2 || y === 4 ||y > 6))
                || (x === 3 && (y !== 4 && y > 1 && y < 7))
                ) return p;
            return n;
        }

        if (number === '4') {
            if ((x === 0 && y > 3 && y < 6)
                || (x === 1 && (y === 3 || y === 5))
                || (x === 2 && (y === 2 || y === 5))
                || (x > 2 && x < 4)) return p;
            return n;
        }

        if (number === '5') {
            if ((x === 0 && (y > 6 || y < 4))
                || ((x === 1 || x === 2) && (y === 1 || y === 3 || y === 7))
                || (x === 3 && y > 3 && y < 7)) return p;
            return n;
        }

        if (number === '6') {
            if ((x === 0 && y > 1 && y < 7)
                || ((x === 1 || x === 2) && (y === 1 || y === 3 || y === 7))
                || (x === 3 && y > 3 && y < 7)) return p;
            return n;
        }

        if (number === '7') {
            if ((x === 0 && y < 2)
                || (x === 1 && (y < 2 || y > 4))
                || (x === 2 && y < 5 && y !== 2)
                || (x === 3 && y < 3)) return p;
            return n;
        }
        if (number === '8') {
            if (((x === 0 || x === 3) && y !== 1 && y !== 4 && y !== 7)
                || ((x === 1 || x === 2) && (y === 1 || y === 4 || y === 7))) return p;
            return n;
        }

        if (number === '9') {
            if ((x === 0 && y > 1 && y < 5)
                || ((x === 1 || x === 2) && (y === 1 || y === 5 || y === 7))
                || (x === 3 && y > 1 && y < 7)) return p;
            return n;
        }
        
        if (number === '0') {
            if (((x === 0 || x === 3) && y > 1 && y < 7)
                || ((x === 1 || x === 2) && (y < 2 || y > 6))) return p;
            return n;
        }

        if (number === '-' || number ==='_') {
            if (y === 4) return p;
            return n;
        }

        if (number === '.') {
            if (x === 0 && y > 6) return p;
            return n;
        }

        if (number === '!') {
            if (x === 0 && y !== 6) return p;
            return n;
        }

        if (number === ',') {
            if ((x === 0 && y === 9)
                || (x === 1 && y > 6 && y < 9)) return p;
            return n;
        }

        if (number === ' ') {
            return n;
        }

        if (number === 'remainder') {
            return n;
        }

    }

    return (
        <div
            className={`level-bar`}
            style={{
                // gridTemplateColumns: `repeat(10, 1fr)`,
                // gridTemplateRows: `repeat(100, 1fr)`,
                width: `calc(var(--width) / 100 * 9`,
                gridColumn: `span 9`
            }}
        >
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