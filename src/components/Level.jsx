import React, { useState } from 'react';
import LiteSlide from './LiteSlide';
import Board from './Board';
import layMatrix from '../helpers/layMatrix';
import useInterval from '../helpers/useInterval';
import { PREY_START, SNAKE_DEMO, COLUMNS } from '../constants';
import LevelBar from './LevelBar';

export default function Level(props) {

    const [demoSnake, setDemoSnake] = useState(SNAKE_DEMO);
    const levelSpeeds = [500, 450, 400, 350, 300, 250, 200, 150, 100];

    const tunnel = [];
    layMatrix(tunnel, COLUMNS, 1);

    const demoLoop = () => {

        const snakeCopy = JSON.parse(JSON.stringify(demoSnake));
        const head = [snakeCopy[0][0] + 1, snakeCopy[0][1], snakeCopy[0][2]];

        if (head[0] >= COLUMNS - 1) head[0] = 1;

        snakeCopy.unshift(head);
        snakeCopy.pop();

        setDemoSnake(snakeCopy);
    };


    useInterval(() => demoLoop(), props.speed);

    return (
        <>
            <LiteSlide optionName="Level" isHeading={true} />
            <div className='flex-center'>
                {levelSpeeds.map((_, ind) => {
                        return <button className='hidden-button' onClick={() => props.chooseLevel(ind+1, levelSpeeds[ind+1])} key={ind} ><LevelBar number={ind+1} level={props.level} /></button>
                    })}
            </div>
            <div className='demo'>
                <Board theGrid={tunnel} snake={demoSnake} food={[null, null]} gameOver={null} blinkOn={null} prey={PREY_START} />
            </div>
        </>
    )
}
