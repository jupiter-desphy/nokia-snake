import { COLUMNS, ROWS } from '../constants';
import layMatrix from '../helpers/layMatrix';
import Pixel from '../components/Pixel';
import LiteSlide from '../components/LiteSlide';

export function Welcome() {
    const welcomeCanvas = [];
    layMatrix(welcomeCanvas, 86, 49);


    function drawBar(currentPixel) {
        let x = currentPixel[0];
        let y = currentPixel[1];
        let n = 'negi-space';
        let p = 'posi-space';

        if (x < 6 || x > 78) return n;
        if ((y === 1 && (x === 14 || x === 15 || (x > 56 && x < 60))) 
        || (y ===  2 && ((x > 11 && x < 16) || (x > 28 && x < 32) || (x > 36 && x < 39) || (x > 43 && x < 47) || (x > 54 && x < 61) || (x > 72 && x < 78)))
        || (y ===  3 && ((x > 10 && x < 16) || (x > 20 && x < 24) || (x > 27 && x < 32) || (x > 35 && x < 40) || (x > 42 && x < 47) || (x > 51 && x < 54) || (x > 55 && x < 62) || (x > 67 && x < 73) || ( x > 76)))
        || (y ===  4 && ((x > 9 && x < 17) || (x > 18 && x < 24) || (x > 27 && x < 32) || (x > 34 && x < 40) || (x > 41 && x < 47) || (x > 50 && x !== 55 && x < 62) || (x > 63 && x < 69) || ( x > 76)))
        || (y ===  5 && ((x > 8 && x < 17) || (x > 18 && x < 24) || (x > 26 && x < 32) || (x > 33 && x < 40) || (x > 42 && x < 47) || (x > 49 && x !== 55 && x < 59) || (x > 61 && x < 65) || ( x > 76)))
        || (y ===  6 && ((x > 7 && x < 16) || (x > 18 && x < 24) || (x > 26 && x < 31) || (x > 33 && x < 40) || (x > 42 && x < 47) || (x > 49 && x !== 54 && x < 58) || (x === 62) || ( x > 75))) 
        || (y ===  7 && ((x > 7 && x < 14) || (x > 18 && x < 25) || (x > 26 && x < 31) || (x > 32 && x < 41) || (x > 44 && x < 47) || (x > 48 && x !== 53 && x < 56) || (x === 62) || (x > 69 && x < 72) || (x > 73 && x < 78))) 
        || (y ===  8 && ((x > 6 && x < 12) || (x > 18 && x < 25) || (x > 26 && x < 31) || (x > 32 && x < 36) || (x > 37 && x !== 41 && x < 44) || (x > 44 && x < 53) || (x > 53 && x < 56) || (x > 57 && x < 60) || (x === 62) || (x > 64 && x < 67) || (x > 68 && x < 72) || (x > 73 && x < 76))) 
        || (y ===  9 && ((x > 6 && x < 11) || (x > 18 && x < 26) || (x > 26 && x < 31) || (x > 32 && x < 36) || (x > 37 && x < 45) || (x > 45 && x !== 52 && x < 56) || (x > 56 && x < 60) || (x > 61 && x < 67) || (x === 69 || x === 71) || (x > 73 && x < 76))) 
        || (y ===  10 && ((x > 6 && x < 10) || (x > 18 && x < 26) || (x > 26 && x < 31) || (x > 32 && x < 36) || (x > 38 && x < 45) || (x > 45 && x !== 51 && x !== 52 && x < 60) || (x > 62 && x < 67) || (x === 69 || x === 71) || (x > 73 && x < 76))) 
        
            ) return p


        if (y > 0){
            return 'incomplete';
        } else return 'negi-space';
            
    }

    return (
        <div>
            <div className={'full-canvas'}>
                {welcomeCanvas.map((rowArray, ind) => {
                    return (
                        rowArray.map((item, i) => {
                            return <div className={drawBar(item) + ` ${item}`} key={`${ind}+${i}`} ></div>
                        })
                    )
                })}
            </div>
        </div>
    )
}
