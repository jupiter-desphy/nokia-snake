import SsansSerifLite from "./SsansSerifLite.jsx";
import layMatrix from "../helpers/layMatrix.js";

export default function MenuHeader({ optionName }) {
    
    const optionByChar = `${optionName}`.split('');
    
    const letterWidths = [
        ['A', 6],
        ['B', 5],
        ['C', 5],
        ['D', 5],
        ['E', 5],
        ['F', 5],
        ['G', 5],
        ['H', 5],
        ['I', 2],
        ['J', 5],
        ['K', 6],
        ['L', 5],
        ['M', 6],
        ['N', 6],
        ['O', 6],
        ['P', 5],
        ['Q', 6],
        ['R', 5],
        ['S', 5],
        ['T', 6],
        ['U', 5],
        ['V', 6],
        ['W', 6],
        ['X', 6],
        ['Y', 6],
        ['Z', 6],
        ['a', 5],
        ['b', 5],
        ['c', 4],
        ['d', 5],
        ['e', 5],
        ['f', 3],
        ['g', 5],
        ['h', 5],
        ['i', 2],
        ['j', 4],
        ['k', 5],
        ['l', 2],
        ['m', 8],
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
        ['x', 6],
        ['y', 5],
        ['z', 5],
        ['1', 3],
        ['2', 5],
        ['3', 5],
        ['4', 5],
        ['5', 5],
        ['6', 5],
        ['7', 5],
        ['8', 5],
        ['9', 5],
        ['0', 5],
        ['.', 2],
        ['!', 2],
        [',', 4],
        ['-', 3],
        ['_', 1],
        [' ', 3]
    ]

    // let remainingWidth = null;
    
    const determineWidth = (character) => (letterWidths.find(ele => ele[0] === character))[1];

    const convertLetter = (char) => {
        let letterArr = [];

        let letterWidth = determineWidth(char);

        layMatrix(letterArr, letterWidth, 10);
        return letterArr;
    }

    // const layOutRemainder = () => {
    //     let remainderArr = [];
    //     remainingWidth = optionByChar.reduce((a, c) => {
    //         return a - determineWidth(c);
    //     }, 100);

    //     layMatrix(remainderArr, remainingWidth, 10);

    //     return remainderArr;
    // }


    return (
        <div className="menu-header">
            {optionByChar.map((i, ind) => {
                return <SsansSerifLite layOut={convertLetter(i)} letter={i} width={determineWidth(i)} key={`${i} + ${ind}`} />
            })}
            {/* <SsansSerifLite layOut={layOutRemainder()} letter=' ' width={remainingWidth} /> */}
        </div>
    )
}