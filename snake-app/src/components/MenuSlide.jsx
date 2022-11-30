import MenuTile from "./MenuTile.jsx";
import layMatrix from "../helpers/layMatrix.js";

export default function MenuSlide({ optionName }) {
    
    const optionByChar = `${optionName}`.split('');
    
    const letterWidths = [
        ['C', 6],
        ['I', 3],
        ['N', 7],
        ['S', 5],
        ['a', 6],
        ['e', 6],
        ['g', 6],
        ['i', 3],
        ['k', 6],
        ['m', 9],
        ['n', 6],
        ['o', 6],
        ['t', 4],
        ['u', 6],
        ['w', 8],
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
        }, 80);

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