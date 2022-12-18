import MenuTile from "./MenuTile.jsx";
import layMatrix from "../helpers/layMatrix.js";
import { LETTER_HEIGHT, PIXEL_WIDTH } from "../constants.js";

export default function MenuSlide({ optionName }) {

    const optionByChar = `${optionName}`.split('');
    optionByChar.unshift(' ');

    const boldCharWidths = [
        ['A', 6],
        ['B', 6],
        ['C', 6],
        ['D', 6],
        ['E', 5],
        ['F', 5],
        ['G', 6],
        ['H', 6],
        ['I', 3],
        ['J', 6],
        ['K', 6],
        ['L', 5],
        ['M', 8],
        ['N', 7],
        ['O', 6],
        ['P', 6],
        ['Q', 6],
        ['R', 6],
        ['S', 5],
        ['T', 7],
        ['U', 6],
        ['V', 6],
        ['W', 8],
        ['X', 6],
        ['Y', 7],
        ['Z', 6],
        ['a', 6],
        ['b', 6],
        ['c', 5],
        ['d', 6],
        ['e', 6],
        ['f', 4],
        ['g', 6],
        ['h', 6],
        ['i', 3],
        ['j', 5],
        ['k', 6],
        ['l', 3],
        ['m', 9],
        ['n', 6],
        ['o', 6],
        ['p', 6],
        ['q', 6],
        ['r', 5],
        ['s', 5],
        ['t', 4],
        ['u', 6],
        ['v', 6],
        ['w', 8],
        ['x', 6],
        ['y', 6],
        ['z', 6],
        ['1', 4],
        ['2', 6],
        ['3', 6],
        ['4', 6],
        ['5', 6],
        ['6', 6],
        ['7', 6],
        ['8', 6],
        ['9', 6],
        ['0', 6],
        ['.', 2],
        ['!', 2],
        [',', 4],
        ['-', 3],
        ['_', 1],
        [' ', 3]
    ]

    const findCharWidth = (character) => (boldCharWidths.find(ele => ele[0] === character))[1];

    const charAsGrid = (char) => {
        let letterArr = [];

        let letterWidth = findCharWidth(char);

        layMatrix(letterArr, letterWidth, LETTER_HEIGHT);
        return letterArr;
    }

    let remainingWidth = optionByChar.reduce((a, c) => {
        return a - findCharWidth(c);
    }, PIXEL_WIDTH);

    const layOutRemainder = () => {
        let remainderArr = [];
        layMatrix(remainderArr, remainingWidth, LETTER_HEIGHT);
        return remainderArr;
    }


    return (
        <div className="menu-option">
            {optionByChar.map((i, ind) => {
                return <MenuTile layOut={charAsGrid(i)} letter={i} width={findCharWidth(i)} key={`${i} + ${ind}`} />
            })}
            <MenuTile layOut={layOutRemainder()} letter=' ' width={remainingWidth} />
        </div>
    )
}