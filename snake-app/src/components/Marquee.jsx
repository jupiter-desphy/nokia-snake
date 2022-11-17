import MarqueeTile from "./MarqueeTile.jsx";
import { COLUMNS } from "../constants.js";

export default function Marquee({ layOut, score, prey, preyTimer, gameOver }) {


    function chooseMarqueeTile(currentTile) {
        console.log(prey)

        const scoreByChar = `${score}`.split('');
        const timerByChar = `${preyTimer}`.split('');

        const spellNumber = (digit) => {
            switch (digit) {
                case '0':
                    return 'zero';
                case '1':
                    return 'one';
                case '2':
                    return 'two';
                case '3':
                    return 'three';
                case '4':
                    return 'four';
                case '5':
                    return 'five';
                case '6':
                    return 'six';
                case '7':
                    return 'seven';
                case '8':
                    return 'eight';
                case '9':
                    return 'nine';
                default:
                    return '';
            }
        }


        if (currentTile[0] === 1) {
            if (scoreByChar.length > 3) {
                return spellNumber(scoreByChar[scoreByChar.length - 4])
            }
            return "zero";
        }

        if (currentTile[0] === 2) {
            if (scoreByChar.length > 2) {
                return spellNumber(scoreByChar[scoreByChar.length - 3])
            }
            return "zero";
        }

        if (currentTile[0] === 3) {
            if (scoreByChar.length > 1) {
                return spellNumber(scoreByChar[scoreByChar.length - 2])
            }
            return "zero";
        }

        if (currentTile[0] === 4) {
            return spellNumber(scoreByChar[scoreByChar.length - 1]);
        }




        // if (currentTile[0] === 5) {
        //     return 'caterpillar1';
        // }
        // if (currentTile[0] === 6) {
        //     return 'caterpillar2';
        // }
        // if (currentTile[0] === 7) {
        //     return 'fish1';
        // }
        // if (currentTile[0] === 8) {
        //     return 'fish2';
        // }
        // if (currentTile[0] === 9) {
        //     return 'spider1';
        // }
        // if (currentTile[0] === 10) {
        //     return 'spider2';
        // }

        if (currentTile[0] === COLUMNS - 6 && prey[2] && preyTimer > 0) {
            return prey[2] + '1';
        }

        if (currentTile[0] === COLUMNS - 5 && prey[2] && preyTimer > 0) {
            return prey[2] + '2';
        }

        if (currentTile[0] === COLUMNS - 3) {
            if (timerByChar.length > 1) {
                return spellNumber(timerByChar[timerByChar.length - 2]);
                }
                return ""
        }

        if (currentTile[0] === COLUMNS - 2) {
            if (preyTimer > 0) {
            return spellNumber(timerByChar[timerByChar.length - 1]);
            }
            return ""
        }

        if (currentTile[0] === 0) {
            return "erase-left";
        }

        if (currentTile[0] === COLUMNS -1) {
            return "erase-right";
        }

        /* ----- BORDER TILES ----- */
        // if (currentTile[0] === 0) {
        //     if (currentTile[1] === 0) {
        //         return "nw-border";
        //     } else if (currentTile[1] === 0) {
        //         return "sw-border";
        //     } else return "left-border";
        // }
        // if (currentTile[0] === COLUMNS - 1) {
        //     if (currentTile[1] === 0) {
        //         return "ne-border";
        //     } else if (currentTile[1] === 0) {
        //         return "se-border";
        //     } else return "right-border";
        // }
        // if (currentTile[1] === 0) {
        //     return "upper-border";
        // }
        // if (currentTile[1] === 0) {
        //     return "bottom-border";
        // }

        /* ----- PREY ----- */
        if (currentTile[0] === prey[0][0] && currentTile[1] === prey[0][1]) {
            if (prey[2] === 'caterpillar')
                return "caterpillar1";
            if (prey[2] === 'fish')
                return "fish1";
            if (prey[2] === 'spider')
                return 'spider1';
        };
        if (currentTile[0] === prey[1][0] && currentTile[1] === prey[1][1]) {
            if (prey[2] === 'caterpillar')
                return "caterpillar2";
            if (prey[2] === 'fish')
                return "fish2";
            if (prey[2] === 'spider')
                return 'spider2'
        };
    }

    return (
        <>
            {layOut.map((rowArray, ind) => {
                return (
                    rowArray.map((item, i) => {
                        return <MarqueeTile pixelState={chooseMarqueeTile(item)} key={`${ind}+${i}`} />
                    })
                )
            })}
        </>
    )
}