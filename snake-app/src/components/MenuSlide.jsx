import MenuTile from "./MenuTile.jsx";
import layMatrix from "../helpers/layMatrix.js";

export default function MenuSlide({ optionName }) {
    
    const optionByChar = `${optionName}`.split('');
    
    const letterWidths = [
        ['B', 6],
        ['C', 6],
        ['G', 6],
        ['I', 3],
        ['L', 5],
        ['M', 8],
        ['N', 7],
        ['S', 5],
        ['T', 5],
        ['a', 6],
        ['b', 6],
        ['c', 5],
        ['d', 6],
        ['e', 6],
        ['g', 6],
        ['h', 6],
        ['i', 3],
        ['k', 6],
        ['l', 3],
        ['m', 9],
        ['n', 6],
        ['o', 6],
        ['p', 6],
        ['r', 5],
        ['s', 5],
        ['t', 4],
        ['u', 6],
        ['v', 6],
        ['w', 8],
        ['y', 6],
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
        remainingWidth = optionByChar.reduce((a, c,) => {
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