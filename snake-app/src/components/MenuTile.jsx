import Pixel from "./Pixel";

export default function MenuTile({ layOut, letter, width }) {
    // given letter and layOut, choose which pixels are positive or negative space

    function drawLetter(currentPixel) {
        let x = currentPixel[0];
        let y = currentPixel[1];
        let p = 'posi-space';
        let n = 'negi-space';

        if (letter !== 'g' && letter !== 'j' && letter !== 'p' && letter !== 'q' && letter !== 'y')
            if (y < 1 || y > 7) return n;

        if (letter === 'A') {
            if (((x === 0 || x === 4) && y > 2)
                || ((x === 1 || x === 3) && y > 1)
                || ((x === 2) && (y < 3 || y === 5))
            ) return p;
            return n;
        }

        if (letter === 'B') {
            if ((x < 2 || x === 3)
                || (x === 2 && (y === 1 || y === 3 || y === 7))
                || (x === 4 && y > 1 && y !== 3 && y !== 7)
            ) return p;
            return n;
        }

        if (letter === 'C') {
            if (x === 0 && y > 1 && y < 7) return p;
            if (x === 1) return p;
            if (x > 1 && x < 5 && (y === 1 || y === 7)) return p;
            return n;
        }

        if (letter === 'D') {
            if ((x < 2 || x === 3)
                || (x === 2 && (y === 1 || y === 7))
                || (x === 4 && y > 1 && y !== 7)
            ) return p;
            return n;
        }

        if (letter === 'E') {
            if ((x < 2)
                || ((x < 4) && (y === 1 || y === 7 || y === 3))
            ) return p;
            return n;
        }

        if (letter === 'F') {
            if ((x < 2)
                || ((x < 4) && (y === 1 || y === 3))
            ) return p;
            return n;
        }

        if (letter === 'G') {
            if ((x === 0 && y > 1 && y < 7)
                || (x === 1)
                || (x === 2 && (y === 1 || y === 7))
                || (x === 3 && y !== 2 & y !== 3)
                || (x === 4 && y > 3)
            ) return p;
            return n;
        }

        if (letter === 'H') {
            if ((x < 5 && x !== 2)
                || (x === 2 && y === 3)
            ) return p;
            return n;
        }

        if (letter === 'I' || letter === 'l') {
            if (x < 2) return p;
            return n;
        }

        if (letter === 'J') {
            if ((x === 0 && y > 4 && y < 7)
                || (x === 1 && y > 4)
                || (x === 2 && y === 7)
                || (x === 3)
                || (x === 4 && y !== 7)) return p;
            return n;
        }

        if (letter === 'K') {
            if ((x < 2)
                || (x === 2 && y === 4)
                || (x === 3 && y !== 4)
                || (x === 4 && (y < 3 || y > 5))) return p;
            return n;
        }

        if (letter === 'L') {
            if (x < 2 || (x < 4 && y === 7)) return p;
            return n;
        }

        if (letter === 'M') {
            if ((x === 0 || x === 6)
                || ((x === 1 || x === 5) && y > 1)
                || ((x === 2 || x === 4) && y > 2 && y < 5)
                || (x === 3 && y > 3 && y < 6)) return p;
            return n;
        }

        if (letter === 'N') {
            if ((x === 0 || x === 5)
                || (x === 1 && y > 1)
                || (x === 2 && y > 2 && y < 5)
                || (x === 3 && y > 3 && y < 6)
                || (x === 4 && y < 7)) return p;
            return n;
        }

        if (letter === 'O') {
            if (((x === 0 || x === 4) && y > 1 && y !== 7)
                || (x === 1 || x === 3)
                || (x === 2 && (y === 1 || y === 7))
            ) return p;
            return n;
        }

        if (letter === 'P') {
            if ((x < 2)
            || (x < 4 && (y === 1 || y === 5))
            || (x > 2 && x < 5 && y > 1 && y > 1 && y < 5)
        ) return p;
        return n;
        }

        if (letter === 'Q') {
            if (((x === 0) && y > 1 && y !== 7)
                || (x > 0 && x < 3 && (y === 1 || y === 7))
                || (x === 1)
                || (x === 3)
                || (x === 4 && (y > 1 &&  y !== 6))
            ) return p;
            return n;
        }

        if (letter === 'R') {
            if ((x < 2 || x === 3)
            || (x < 4 && (y === 1 || y === 5))
            || (x > 2 && x < 5 && y > 1 && y > 1 && y < 5)
            || (x === 4 && y === 7)
        ) return p;
        return n;
        }

        if (letter === 'S') {
            if ((x < 1 && (y === 2 || y === 3 || y === 7))
                || (x === 1 && (y < 5 || y === 7))
                || (x === 2 && (y > 3 || y < 2))
                || (x === 3 && (y < 2 || y > 4 && y < 7))) return p;
            return n;
        }

        if (letter === 'T') {
            if ((x < 6 && y === 1)
                || (x === 2 || x === 3)) return p;
            return n;
        }

        if (letter === 'U') {
            if (((x < 1 || x === 4) && y !== 7)
                || ( x === 1 || x === 3)
                || ( x === 2 && y === 7)
            ) return p;
            return n;
        }

        if (letter === 'V') {
            if (((x < 1 || x === 5) && y < 4)
                || ((x === 1 || x === 4) && y < 6)
                // || ((x === 2 || x === 4) && y > 2 && y < 6)
                || ((x === 2 || x === 3)&& y > 3)
            ) return p;
            return n;
        }

        if (letter === 'W') {
            if (((x === 0 || x === 6) && y < 6)
                || (x === 1 || x === 5)
                || ((x === 2 || x === 4) && y > 4)
                || (x === 3 && y > 2 && y !== 7)) return p;
            return n;
        }

        if (letter === 'X') {
            if (((x === 0 || x === 4) && (y < 3 || y > 5))
                || ((x === 1 || x === 3) && y !== 4)
                || (x === 2 && y > 2 && y <6)) return p;
            return n;
        }

        if (letter === 'Y') {
            if (((x === 0 || x === 5) && y < 3)
                || ((x === 1 || x === 4) && y < 4)
                || ((x === 2 || x === 3) && y > 2)) return p;
            return n;
        }

        if (letter === 'Z') {
            if ((x < 5 && (y === 1 || y === 7))
                || (x === 0 && y > 4)
                || (x === 1 && y > 3)
                || (x === 2 && y > 2 && y < 5)
                || (x === 3 && y < 4)
                || (x === 4 && y === 2)) return p;
            return n;
        }

        if (letter === 'a') {
            if (y < 3) return n;
            if ((x === 0 && y === 6)
                || (x === 1 && y !== 4)
                || (x === 2 && y % 2)
                || (x === 3)
                || (x === 4 && y > 3)) return p;
            return n;
        }

        if (letter === 'b') {
            if (y < 3 && x > 1) return n;
            if ((x < 2)
                || (x === 1 || x === 3)
                || (x === 2 && (y > 6 || y < 4))
                || (x === 4 && y > 3 && y < 7)
            ) return p;
            return n;
        }

        if (letter === 'c') {
            if (y < 3) return n;
            if ((x === 0 && y > 3 && y < 7)
                || (x === 1)
                || ((x === 2 || x === 3) && (y > 6 || y < 4))
            ) return p;
            return n;
        }

        if (letter === 'd') {
            if (y < 3 && x < 3) return n;
            if ((x === 0 && y > 3 && y < 7)
                || (x === 1 || x === 3 || x === 4)
                || (x === 2 && (y > 6 || y < 4))
            ) return p;
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

        if (letter === 'f') {
            if ((x === 0 && y !== 1)
                || (x === 1)
                || (x === 2 && (y === 1 || y === 3))) return p;
            return n;
        }

        if (letter === 'g') {
            if (y < 3 || y > 8) return n;
            if ((x === 0 && y > 3 && y < 6)
                || (x === 1 && y !== 7)
                || (x === 2 && (y === 3 || y === 6 || y > 7))
                || (x === 3)
                || (x === 4 && y !== 8)) return p;
            return n;
        }

        if (letter === 'h') {
            if (y < 3 && x > 1) return n;
            if ((x < 2)
                || (x === 1 || x === 3)
                || (x === 2 && y < 4)
                || (x === 4 && y > 3)
            ) return p;
            return n;
        }

        if (letter === 'i') {
            if (x < 2 && y !== 2) return p;
            return n;
        }

        if (letter === 'j') {
            if (y > 8) return n;
            if (((x < 3) && y > 7)
                || (x > 1 && x < 4 && y !== 0 && y !== 2 && y !== 8)) return p;
            return n;
        }

        if (letter === 'k') {
            if ((x < 2)
                || (x === 2 && y > 3 && y < 7)
                || (x === 3 && y > 2 && y !== 5)
                || (x === 4 && (y === 3 || y === 7))) return p;
            return n;
        }

        if (letter === 'm') {
            if (y < 3) return n;
            if ((x === 0 || x === 1 || x === 3 || x === 4 || x === 6)
                || ((x === 2 || x === 5) && y === 3)
                || (x === 7 && y !== 3)) return p;
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

        if (letter === 'p') {
            if (y < 3 || y > 8) return n;
            if ((x === 4 && y > 3 && y < 6)
                || (x === 3 && y < 7)
                || (x === 2 && (y === 3 || y === 6))
                || (x === 0 || x === 1)) return p;
            return n;
        }

        if (letter === 'q') {
            if (y < 3 || y > 8) return n;
            if ((x === 0 && y > 3 && y < 6)
                || (x === 1 && y < 7)
                || (x === 2 && (y === 3 || y === 6))
                || (x === 3 || x === 4)) return p;
            return n;
        }

        if (letter === 'r') {
            if (y < 3) return n;
            if ((x === 0 || x === 1)
                || (x === 2 && y === 4)
                || (x === 3 && y < 5)
            ) return p;
            return n;
        }

        if (letter === 's') {
            if (y < 3) return n;
            if ((x === 0 && y !== 6 && y !== 3 && y < 8)
                || (x === 1 && y !== 6)
                || (x === 2 && y !== 4)
                || (x === 3 && y < 7 && y !== 4)) return p;
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

        if (letter === 'v') {
            if (y < 3) return n;
            if (((x === 0 || x === 4) && y < 5)
                || ((x === 1 || x === 3) && y !== 7)
                || (x === 2 && y > 4)
            ) return p;
            return n;
        }

        if (letter === 'w') {
            if (y < 3) return n;
            if (((x === 0 || x === 6) && y < 6)
                || (x === 1 || x === 5)
                || ((x === 2 || x === 4) && y > 5)
                || (x === 3 && y > 3 && y !== 7)) return p;
            return n;
        }

        if (letter === 'x') {
            if (y < 3) return n;
            if (((x === 0 || x === 4) && (y === 3 || y > 6))
            || ((x === 1 || x === 3) && y !== 5)
            || (x === 2 && y > 3 && y < 7)) return p;
        return n;
        }

        if (letter === 'y') {
            if (y < 3 || y > 8) return n;
            if ((x === 0 && y < 6)
                || (x === 1 && y !== 7)
                || (x === 2 && (y === 6 || y > 7))
                || (x === 3)
                || (x === 4 && y !== 8)) return p;
            return n;
        }

        if (letter === 'z') {
            if (y < 3) return n;
            if ((x === 0 && y !== 4 && y !== 5)
                || (x === 1 && y !== 4)
                || (x === 2 && y !== 6)
                || (x === 3 && y !== 5 && y !== 6)
                || (x === 4 && (y === 3 || y === 7))) return p;
            return n;
        }

        if (letter === ' ') {
            return n;
        }

        if (letter === 'remainder') {
            return n;
        }

    }

    return (
        <div
            className={`menu-tile`}
            style={{
                gridTemplateColumns: `repeat(${width}, 1fr)`,
                // width: `calc(var(--width) / 80 / ${width})`,
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