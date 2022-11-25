import Pixel from "./Pixel";

export default function MenuTile({ layOut, letter, width }) {
    // given letter and layOut, choose which pixels are positive or negative space

    function drawLetter(currentPixel) {
        let x = currentPixel[0];
        let y = currentPixel[1];
        let p = 'posi-space';
        let n = 'negi-space';

        if (y < 1 || y > 7) return n;

        if (letter === 'C') {
            if (x === 2 && y > 1 && y < 7) return p;
            if (x === 3) return p;
            if (x > 3 && x < 7 && (y === 1 || y === 7)) return p;
            return n;
        }

        if (letter === 'e') {
            if (y < 3) return n;
            if ((x === 0 && y > 3 && y < 7)
                || (x === 1)
                || (x === 2 && y % 2)
                || (x === 3 && y !== 6)
                || (x === 4 && y !== 3 && y !== 6)) return p;
            return n;
        }

        if (letter === 'i') {
            if (x < 2 && y !== 2) return p;
            return n;
        }

        if (letter === 'n') {
            if (y < 3) return n;
            if ((x === 0 || x === 1 || x === 3)
                || (x === 2 && y === 3)
                || (x === 4 && y !== 3)
            ) return p;
            return n;
        }

        if (letter === 'o') {
            if (y < 3) return n;
            if (((x === 0 || x === 4) && y > 3 && y < 7)
                || (x === 1 || x === 3)
                || (x === 2 && (y === 3 || y === 7))) return p;
            return n;
        }

        if (letter === 't') {
            if ((x === 0 && y !== 7)
                || (x === 1)
                || (x === 2 && (y === 3 || y === 7))) return p;
            return n;
        }

        if (letter === 'u') {
            if (y < 3) return n;
            if ((x === 0 && y !== 7)
                || (x === 1 || x === 3 || x === 4)
                || (x === 2 && y === 7)
            ) return p;
            return n;
        }

    }

    return (
        <div
            className={`menu-tile`}
            style={{
                gridTemplateColumns: `repeat(${width}, 1fr)`,
                width: `calc(var(--width) / 80 / ${width})`,
                gridColumn: `span ${width}`
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