import MarqueeTile from "./MarqueeTile.jsx";
import { COLUMNS } from "../constants.js";

export default function Marquee({ layOut, score, prey, preyTimer}) {


    function chooseMarqueeTile(currentTile) {

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


        if (currentTile[0] === COLUMNS - 5 && prey[2] && preyTimer > 0) {
            return prey[2] + '1';
        }

        if (currentTile[0] === COLUMNS - 4 && prey[2] && preyTimer > 0) {
            return prey[2] + '2';
        }

        if (currentTile[0] === COLUMNS - 2) {
            if (timerByChar.length > 1) {
                return spellNumber(timerByChar[timerByChar.length - 2]);
            }
            if (preyTimer > 0) return "zero";
            return "";
        }

        if (currentTile[0] === COLUMNS - 1) {
            if (preyTimer > 0) {
                return spellNumber(timerByChar[timerByChar.length - 1]);
            }
            return "";
        }

        if (currentTile[0] === 0) {
            return "erase-left";
        }

        /* ----- PREY ----- */
        if (currentTile[0] === prey[0][0] && currentTile[1] === prey[0][1]) {
            return prey[2] + '1';
        };
        if (currentTile[0] === prey[1][0] && currentTile[1] === prey[1][1]) {
            return prey[2] + '2';
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