import MenuTile from "./MenuTile.jsx";
import layMatrix from "../helpers/layMatrix.js";

export default function MenuSlide({ optionName }) {
    
    const optionByChar = `${optionName}`.split('');
    
    const letterWidths = [
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
        ['-', 3],
        ['_', 1],
        [' ', 3]
    ]

    let remainingWidth = null;
    
    const determineWidth = (character) => (letterWidths.find(ele => ele[0] === character))[1];

    const convertLetter = (char) => {
        let letterArr = [];

        let letterWidth = determineWidth(char);

        layMatrix(letterArr, letterWidth, 10);
        return letterArr;
    }

    const layOutRemainder = () => {
        let remainderArr = [];
        remainingWidth = optionByChar.reduce((a, c) => {
            return a - determineWidth(c);
        }, 100);

        layMatrix(remainderArr, remainingWidth, 10);

        return remainderArr;
    }


    return (
        <span className="menu-option">
            {optionByChar.map((i, ind) => {
                return <MenuTile layOut={convertLetter(i)} letter={i} width={determineWidth(i)} key={`${i} + ${ind}`} />
            })}
            <MenuTile layOut={layOutRemainder()} letter=' ' width={remainingWidth} />
        </span>
    )
}