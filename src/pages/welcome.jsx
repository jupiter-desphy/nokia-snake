import { COLUMNS, ROWS } from '../constants';
import layMatrix from '../helpers/layMatrix';
import Pixel from '../components/Pixel';
import LiteSlide from '../components/LiteSlide';

export function Welcome() {
    const welcomeCanvas = [];
    layMatrix(welcomeCanvas, 84, 49);


    function drawBar(currentPixel) {
        let x = currentPixel[0];
        let y = currentPixel[1];

        if (y > 0){
            return 'posi-space'
        } else return 'negi-space'
            
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
