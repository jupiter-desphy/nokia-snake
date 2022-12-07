import Pixel from "./Pixel";

export default function MenuTile({ layOut, letter: char, width }) {
    // given letter and layOut, choose which pixels are positive or negative space

    function drawLetter(currentPixel) {
        let x = currentPixel[0];
        let y = currentPixel[1];
        let p = 'posi-space';
        let n = 'negi-space';

        if (char !== 'g' && char !== 'j' && char !== 'p' && char !== 'q' && char !== 'y')
            if (y < 1 || y > 7) return n;

        if (char === 'A') {
            if (((x === 0 || x === 4) && y > 2)
                || ((x === 1 || x === 3) && y > 1)
                || ((x === 2) && (y < 3 || y === 5))
            ) return p;
            return n;
        }

        if (char === 'B') {
            if ((x < 2 || x === 3)
                || (x === 2 && (y === 1 || y === 3 || y === 7))
                || (x === 4 && y > 1 && y !== 3 && y !== 7)
            ) return p;
            return n;
        }

        if (char === 'C') {
            if (x === 0 && y > 1 && y < 7) return p;
            if (x === 1) return p;
            if (x > 1 && x < 5 && (y === 1 || y === 7)) return p;
            return n;
        }

        if (char === 'D') {
            if ((x < 2 || x === 3)
                || (x === 2 && (y === 1 || y === 7))
                || (x === 4 && y > 1 && y !== 7)
            ) return p;
            return n;
        }

        if (char === 'E') {
            if ((x < 2)
                || ((x < 4) && (y === 1 || y === 7 || y === 3))
            ) return p;
            return n;
        }

        if (char === 'F') {
            if ((x < 2)
                || ((x < 4) && (y === 1 || y === 3))
            ) return p;
            return n;
        }

        if (char === 'G') {
            if ((x === 0 && y > 1 && y < 7)
                || (x === 1)
                || (x === 2 && (y === 1 || y === 7))
                || (x === 3 && y !== 2 & y !== 3)
                || (x === 4 && y > 3)
            ) return p;
            return n;
        }

        if (char === 'H') {
            if ((x < 5 && x !== 2)
                || (x === 2 && y === 3)
            ) return p;
            return n;
        }

        if (char === 'I' || char === 'l') {
            if (x < 2) return p;
            return n;
        }

        if (char === 'J') {
            if ((x === 0 && y > 4 && y < 7)
                || (x === 1 && y > 4)
                || (x === 2 && y === 7)
                || (x === 3)
                || (x === 4 && y !== 7)) return p;
            return n;
        }

        if (char === 'K') {
            if ((x < 2)
                || (x === 2 && y === 4)
                || (x === 3 && y !== 4)
                || (x === 4 && (y < 3 || y > 5))) return p;
            return n;
        }

        if (char === 'L') {
            if (x < 2 || (x < 4 && y === 7)) return p;
            return n;
        }

        if (char === 'M') {
            if ((x === 0 || x === 6)
                || ((x === 1 || x === 5) && y > 1)
                || ((x === 2 || x === 4) && y > 2 && y < 5)
                || (x === 3 && y > 3 && y < 6)) return p;
            return n;
        }

        if (char === 'N') {
            if ((x === 0 || x === 5)
                || (x === 1 && y > 1)
                || (x === 2 && y > 2 && y < 5)
                || (x === 3 && y > 3 && y < 6)
                || (x === 4 && y < 7)) return p;
            return n;
        }

        if (char === 'O') {
            if (((x === 0 || x === 4) && y > 1 && y !== 7)
                || (x === 1 || x === 3)
                || (x === 2 && (y === 1 || y === 7))
            ) return p;
            return n;
        }

        if (char === 'P') {
            if ((x < 2)
            || (x < 4 && (y === 1 || y === 5))
            || (x > 2 && x < 5 && y > 1 && y > 1 && y < 5)
        ) return p;
        return n;
        }

        if (char === 'Q') {
            if (((x === 0) && y > 1 && y !== 7)
                || (x > 0 && x < 3 && (y === 1 || y === 7))
                || (x === 1)
                || (x === 3)
                || (x === 4 && (y > 1 &&  y !== 6))
            ) return p;
            return n;
        }

        if (char === 'R') {
            if ((x < 2 || x === 3)
            || (x < 4 && (y === 1 || y === 5))
            || (x > 2 && x < 5 && y > 1 && y > 1 && y < 5)
            || (x === 4 && y === 7)
        ) return p;
        return n;
        }

        if (char === 'S') {
            if ((x < 1 && (y === 2 || y === 3 || y === 7))
                || (x === 1 && (y < 5 || y === 7))
                || (x === 2 && (y > 3 || y < 2))
                || (x === 3 && (y < 2 || y > 4 && y < 7))) return p;
            return n;
        }

        if (char === 'T') {
            if ((x < 6 && y === 1)
                || (x === 2 || x === 3)) return p;
            return n;
        }

        if (char === 'U') {
            if (((x < 1 || x === 4) && y !== 7)
                || ( x === 1 || x === 3)
                || ( x === 2 && y === 7)
            ) return p;
            return n;
        }

        if (char === 'V') {
            if (((x < 1 || x === 4) && y < 6)
                || ((x === 1 || x === 3) && y < 7)
                || (x === 2 && y > 5)
            ) return p;
            return n;
        }

        if (char === 'W') {
            if (((x === 0 || x === 6) && y < 6)
                || (x === 1 || x === 5)
                || ((x === 2 || x === 4) && y > 4)
                || (x === 3 && y > 2 && y !== 7)) return p;
            return n;
        }

        if (char === 'X') {
            if (((x === 0 || x === 4) && (y < 3 || y > 5))
                || ((x === 1 || x === 3) && y !== 4)
                || (x === 2 && y > 2 && y <6)) return p;
            return n;
        }

        if (char === 'Y') {
            if (((x === 0 || x === 5) && y < 3)
                || ((x === 1 || x === 4) && y < 4)
                || ((x === 2 || x === 3) && y > 2)) return p;
            return n;
        }

        if (char === 'Z') {
            if ((x < 5 && (y === 1 || y === 7))
                || (x === 0 && y > 4)
                || (x === 1 && y > 3)
                || (x === 2 && y > 2 && y < 5)
                || (x === 3 && y < 4)
                || (x === 4 && y === 2)) return p;
            return n;
        }

        if (char === 'a') {
            if (y < 3) return n;
            if ((x === 0 && y === 6)
                || (x === 1 && y !== 4)
                || (x === 2 && y % 2)
                || (x === 3)
                || (x === 4 && y > 3)) return p;
            return n;
        }

        if (char === 'b') {
            if (y < 3 && x > 1) return n;
            if ((x < 2)
                || (x === 1 || x === 3)
                || (x === 2 && (y > 6 || y < 4))
                || (x === 4 && y > 3 && y < 7)
            ) return p;
            return n;
        }

        if (char === 'c') {
            if (y < 3) return n;
            if ((x === 0 && y > 3 && y < 7)
                || (x === 1)
                || ((x === 2 || x === 3) && (y > 6 || y < 4))
            ) return p;
            return n;
        }

        if (char === 'd') {
            if (y < 3 && x < 3) return n;
            if ((x === 0 && y > 3 && y < 7)
                || (x === 1 || x === 3 || x === 4)
                || (x === 2 && (y > 6 || y < 4))
            ) return p;
            return n;
        }

        if (char === 'e') {
            if (y < 3) return n;
            if ((x === 0 && y > 3 && y < 7)
                || (x === 1)
                || (x === 2 && y % 2)
                || (x === 3 && y !== 6)
                || (x === 4 && y !== 3 && y !== 6)) return p;
            return n;
        }

        if (char === 'f') {
            if ((x === 0 && y !== 1)
                || (x === 1)
                || (x === 2 && (y === 1 || y === 3))) return p;
            return n;
        }

        if (char === 'g') {
            if (y < 3 || y > 8) return n;
            if ((x === 0 && y > 3 && y < 6)
                || (x === 1 && y !== 7)
                || (x === 2 && (y === 3 || y === 6 || y > 7))
                || (x === 3)
                || (x === 4 && y !== 8)) return p;
            return n;
        }

        if (char === 'h') {
            if (y < 3 && x > 1) return n;
            if ((x < 2)
                || (x === 1 || x === 3)
                || (x === 2 && y < 4)
                || (x === 4 && y > 3)
            ) return p;
            return n;
        }

        if (char === 'i') {
            if (x < 2 && y !== 2) return p;
            return n;
        }

        if (char === 'j') {
            if (y > 8) return n;
            if (((x < 3) && y > 7)
                || (x > 1 && x < 4 && y !== 0 && y !== 2 && y !== 8)) return p;
            return n;
        }

        if (char === 'k') {
            if ((x < 2)
                || (x === 2 && y > 3 && y < 7)
                || (x === 3 && y > 2 && y !== 5)
                || (x === 4 && (y === 3 || y === 7))) return p;
            return n;
        }

        if (char === 'm') {
            if (y < 3) return n;
            if ((x === 0 || x === 1 || x === 3 || x === 4 || x === 6)
                || ((x === 2 || x === 5) && y === 3)
                || (x === 7 && y !== 3)) return p;
            return n;
        }

        if (char === 'n') {
            if (y < 3) return n;
            if ((x === 0 || x === 1 || x === 3)
                || (x === 2 && y === 3)
                || (x === 4 && y !== 3)
            ) return p;
            return n;
        }

        if (char === 'o') {
            if (y < 3) return n;
            if (((x === 0 || x === 4) && y > 3 && y < 7)
                || (x === 1 || x === 3)
                || (x === 2 && (y === 3 || y === 7))) return p;
            return n;
        }

        if (char === 'p') {
            if (y < 3 || y > 8) return n;
            if ((x === 4 && y > 3 && y < 6)
                || (x === 3 && y < 7)
                || (x === 2 && (y === 3 || y === 6))
                || (x === 0 || x === 1)) return p;
            return n;
        }

        if (char === 'q') {
            if (y < 3 || y > 8) return n;
            if ((x === 0 && y > 3 && y < 6)
                || (x === 1 && y < 7)
                || (x === 2 && (y === 3 || y === 6))
                || (x === 3 || x === 4)) return p;
            return n;
        }

        if (char === 'r') {
            if (y < 3) return n;
            if ((x === 0 || x === 1)
                || (x === 2 && y === 4)
                || (x === 3 && y < 5)
            ) return p;
            return n;
        }

        if (char === 's') {
            if (y < 3) return n;
            if ((x === 0 && y !== 6 && y !== 3 && y < 8)
                || (x === 1 && y !== 6)
                || (x === 2 && y !== 4)
                || (x === 3 && y < 7 && y !== 4)) return p;
            return n;
        }

        if (char === 't') {
            if ((x === 0 && y !== 7)
                || (x === 1)
                || (x === 2 && (y === 3 || y === 7))) return p;
            return n;
        }

        if (char === 'u') {
            if (y < 3) return n;
            if ((x === 0 && y !== 7)
                || (x === 1 || x === 3 || x === 4)
                || (x === 2 && y === 7)
            ) return p;
            return n;
        }

        if (char === 'v') {
            if (y < 3) return n;
            if (((x === 0 || x === 4) && y < 5)
                || ((x === 1 || x === 3) && y !== 7)
                || (x === 2 && y > 4)
            ) return p;
            return n;
        }

        if (char === 'w') {
            if (y < 3) return n;
            if (((x === 0 || x === 6) && y < 6)
                || (x === 1 || x === 5)
                || ((x === 2 || x === 4) && y > 5)
                || (x === 3 && y > 3 && y !== 7)) return p;
            return n;
        }

        if (char === 'x') {
            if (y < 3) return n;
            if (((x === 0 || x === 4) && (y === 3 || y > 6))
            || ((x === 1 || x === 3) && y !== 5)
            || (x === 2 && y > 3 && y < 7)) return p;
        return n;
        }

        if (char === 'y') {
            if (y < 3 || y > 8) return n;
            if ((x === 0 && y < 6)
                || (x === 1 && y !== 7)
                || (x === 2 && (y === 6 || y > 7))
                || (x === 3)
                || (x === 4 && y !== 8)) return p;
            return n;
        }

        if (char === 'z') {
            if (y < 3) return n;
            if ((x === 0 && y !== 4 && y !== 5)
                || (x === 1 && y !== 4)
                || (x === 2 && y !== 6)
                || (x === 3 && y !== 5 && y !== 6)
                || (x === 4 && (y === 3 || y === 7))) return p;
            return n;
        }

        if (char === '1') {
            if ((x === 0 && y === 2)
                || (x > 0 && x < 3)) return p;
            return n;
        }

        if (char === '2') {
            if ((x === 0 && (y < 2 || y > 4))
                || (x === 1 && (y < 2 || y > 3))
                || (x === 2 && (y === 1 || y === 4 || y === 7))
                || (x === 3 && (y < 5 || y === 7))
                || (x === 4 && (y === 2 || y === 3 || y === 7))
                ) return p;
            return n;
        }

        if (char === '3') {
            if ((x === 0 && (y < 2 || y > 6))
                || ((x === 1 || x === 2) && (y < 2 || y === 4 ||y > 6))
                || (x === 3)
                || (x === 4 && (y !== 4 && y > 1 && y < 7))
                ) return p;
            return n;
        }

        if (char === '4') {
            if ((x === 0 && y > 3 && y < 6)
                || (x === 1 && (y === 3 || y === 5))
                || (x === 2 && (y === 2 || y === 5))
                || (x > 2 && x < 5)) return p;
            return n;
        }

        if (char === '5') {
            if ((x === 0 && (y > 6 || y < 4))
                || ((x === 1 || x === 2) && (y === 1 || y === 3 || y === 7))
                || (x === 3 && y !== 2)
                || (x === 4 && y > 3 && y < 7)) return p;
            return n;
        }

        if (char === '6') {
            if ((x === 0 && y > 1 && y < 7)
                || (x === 1)
                || (x === 2 && (y === 1 || y === 3 || y === 7))
                || (x === 3 && y !== 2)
                || (x === 4 && y > 3 && y < 7)) return p;
            return n;
        }

        if (char === '7') {
            if ((x === 0 && y < 2)
                || (x === 1 && (y < 2 || y > 4))
                || (x === 2 && y !== 2)
                || (x === 3 && y < 5)
                || (x === 4 && y < 3)) return p;
            return n;
        }
        
        if (char === '8') {
            if (((x === 0 || x === 4) && y !== 1 && y !== 4 && y !== 7)
                || (x === 1 || x === 3)
                || (x === 2 && (y === 1 || y === 4 || y === 7))) return p;
            return n;
        }
        
        if (char === '9') {
            if ((x === 0 && y > 1 && y < 5)
                || (x === 1 && y !== 6)
                || (x === 2 && (y === 1 || y === 5 || y === 7))
                || x === 3
                || (x === 4 && y > 1 && y < 7)) return p;
            return n;
        }
        
        if (char === '0') {
            if (((x === 0 || x === 4) && y > 1 && y < 7)
                || (x === 1 || x === 3)
                || (x === 2 && (y < 2 || y > 6))) return p;
            return n;
        }

        if (char === ' ') {
            return n;
        }

        if (char === 'remainder') {
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