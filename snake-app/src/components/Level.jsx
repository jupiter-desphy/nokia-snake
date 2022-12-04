import React, { useState } from 'react';
import MenuHeader from './MenuHeader';
import Board from './Board';
import layMatrix from '../helpers/layMatrix';
import useInterval from '../helpers/useInterval';
import { PREY_START, SNAKE_DEMO, COLUMNS } from '../constants';
import MenuSlide from './MenuSlide';

export default function Level(props) {

    const [demoSnake, setDemoSnake] = useState(SNAKE_DEMO);
    const levelSpeeds = [null, 330, 300, 270, 240, 210, 170, 140, 110, 80];

    const tunnel = [];
    layMatrix(tunnel, COLUMNS, 1);

    const gameLoop = () => {

        const snakeCopy = JSON.parse(JSON.stringify(demoSnake));
        const head = [snakeCopy[0][0] + 1, snakeCopy[0][1], snakeCopy[0][2]];

        if (head[0] >= COLUMNS - 1) head[0] = 1;

        snakeCopy.unshift(head);
        snakeCopy.pop();

        setDemoSnake(snakeCopy);
    };


    useInterval(() => gameLoop(), props.speed);
    console.log(props.speed)

    return (
        <div>
            <MenuHeader optionName="------------ Level __-----------" />
            <button onClick={() => props.chooseLevel(1, levelSpeeds[0])}>0</button>
            <button onClick={() => props.chooseLevel(1, levelSpeeds[1])}>1</button>
            <button onClick={() => props.chooseLevel(2, levelSpeeds[2])}>2</button>
            <button onClick={() => props.chooseLevel(3, levelSpeeds[3])}>3</button>
            <button onClick={() => props.chooseLevel(4, levelSpeeds[4])}>4</button>
            <button onClick={() => props.chooseLevel(5, levelSpeeds[5])}>5</button>
            <button onClick={() => props.chooseLevel(6, levelSpeeds[6])}>6</button>
            <button onClick={() => props.chooseLevel(7, levelSpeeds[7])}>7</button>
            <button onClick={() => props.chooseLevel(8, levelSpeeds[8])}>8</button>
            <button onClick={() => props.chooseLevel(9, levelSpeeds[9])}>9</button>
            <div className='demo'>
                <Board theGrid={tunnel} snake={demoSnake} food={[null, null]} gameOver={null} blinkOn={null} prey={PREY_START} />
            </div>
            {/* <button className='hidden-button' onClick={() => props.levelViewable(false)} >
                <MenuSlide optionName={'             Back'} />
            </button> */}
        </div>
    )
}
