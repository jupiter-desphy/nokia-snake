import MenuTile from "./MenuTile.jsx";
import layMatrix from "../helpers/layMatrix.js";

export default function MenuSlide({ optionName }) {
    let width = null

    const optionByChar = `${optionName}`.split('');

    const convertLetter = (char) => {
        let letterArr = [];

        switch (char) { 
            case 'C':
                width = 8;
                break;
            case 'N':
                width = 9;
                break;
            case 'a':
                width = 6;
                break;
            case 'e':
                width = 6;
                break;
            case 'g':
                width = 6;
                break;
            case 'i':
                width = 3;
                break;
            case 'm':
                width = 9;
                break;
            case 'n':
                width = 6;
                break;
            case 'o':
                width = 6;
                break;
            case 't':
                width = 4;
                break;
                case 'u':
                    width = 6;
                    break;
                case 'w':
                    width = 8;
                    break;
                case ' ':
                    width = 2;
                    break;
            default: ;
        }

        layMatrix(letterArr, width, 10)
        return letterArr
    }

    return (
        <span className="menu-option">
            {optionByChar.map((i) => {
                return <MenuTile layOut={convertLetter(i)} letter={i} width={width} key={`${i}`} />
            })}
        </span>
    )
}