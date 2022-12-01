import SsansSerifLite from "./SsansSerifLite.jsx";
import layMatrix from "../helpers/layMatrix.js";

export default function MenuHeader({ optionName }) {
    
    const optionByChar = `${optionName}`.split('');
    
    const letterWidths = [
        ['B', 6],
        ['C', 6],
        ['D', 5],//
        ['G', 6],
        ['I', 2],//
        ['L', 5],
        ['M', 8],
        ['N', 7],
        ['S', 5],
        ['T', 6],
        ['a', 5],
        ['b', 5],
        ['c', 4],
        ['d', 5],
        ['e', 5],
        ['f', 3],
        ['g', 5],
        ['h', 5],
        ['i', 2],
        ['j', 4],//?
        ['k', 5],
        ['l', 2],
        ['m', 8],// ?
        ['n', 5],
        ['o', 5],
        ['p', 5],
        ['q', 5],
        ['r', 4],
        ['s', 4],
        ['t', 3],
        ['u', 5],
        ['v', 6],
        ['w', 6],
        ['y', 5],
        ['z', 5],
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
                return <SsansSerifLite layOut={convertLetter(i)} letter={i} width={determineWidth(i)} key={`${i} + ${ind}`} />
            })}
            <SsansSerifLite layOut={layOutRemainder()} letter=' ' width={remainingWidth} />
        </span>
    )
}