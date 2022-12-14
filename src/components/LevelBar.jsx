import Pixel from "./Pixel";
import layMatrix from "../helpers/layMatrix";

export default function LevelBar({ number }) {
    // given letter and layOut, choose which pixels are positive or negative space
    let layOut = [];
    layMatrix(layOut, 10, 100);


    function drawLetter(currentPixel) {
        let x = currentPixel[0];
        let y = currentPixel[1];
        let p = 'posi-space';
        let n = 'negi-space';

        if ((number !== 'g' && number !== 'j' && number !== 'p' && number !== 'q' && number !== 'y' && number !== ',')
            && (y < 1 || y > 7)) return n;



        if (number === '1') {
            if ((x === 0 && y === 2)
                || (x === 1)) return p;
            return n;
        }

        if (number === 1) {
            if ((x === 0 && (y ===2 || y > 5))
                || (x === 1 && (y === 1 || y === 5 || y === 7))
                || (x===2 && (y === 1 || y === 4 || y === 7))
                || (x === 20 && (y < 5 || y === 7))
                || (x === 3 && (y === 2 || y === 3 || y === 7))
                ) return p;
            return n;
        }

        if (number === '3') {
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
            className={`menu-tile`}
            style={{
                gridTemplateColumns: `repeat(10, 1fr)`,
                // width: `calc(var(--width) / 80 / ${width})`,
                gridColumn: `span 10`
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