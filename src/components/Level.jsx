import React, { useState } from 'react';
import LiteSlide from './LiteSlide';
import Board from './Board';
import layMatrix from '../helpers/layMatrix';
import useInterval from '../helpers/useInterval';
import { PREY_START, SNAKE_DEMO, COLUMNS } from '../constants';
import LevelBar from './LevelBar';

export default function Level(props) {

    let level = props.level
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

    return (
        <>
            <LiteSlide optionName="------------ Level __-----------" />
            {/* <button className='hidden-button' onClick={() => props.chooseLevel(0, levelSpeeds[0])}>
                <LevelBar number={0}/>
            </button> */}
            <div className='level'>
                <button className='hidden-button' onClick={() => props.chooseLevel(1, levelSpeeds[1])}><LevelBar number={1} level={level} /></button>
                <button className='hidden-button' onClick={() => props.chooseLevel(2, levelSpeeds[2])}><LevelBar number={2} level={level} /></button>
                <button className='hidden-button' onClick={() => props.chooseLevel(3, levelSpeeds[3])}><LevelBar number={3} level={level} /></button>
                <button className='hidden-button' onClick={() => props.chooseLevel(4, levelSpeeds[4])}><LevelBar number={4} level={level} /></button>
                <button className='hidden-button' onClick={() => props.chooseLevel(5, levelSpeeds[5])}><LevelBar number={5} level={level} /></button>
                <button className='hidden-button' onClick={() => props.chooseLevel(6, levelSpeeds[6])}><LevelBar number={6} level={level} /></button>
                <button className='hidden-button' onClick={() => props.chooseLevel(7, levelSpeeds[7])}><LevelBar number={7} level={level} /></button>
                <button className='hidden-button' onClick={() => props.chooseLevel(8, levelSpeeds[8])}><LevelBar number={8} level={level} /></button>
                <button className='hidden-button' onClick={() => props.chooseLevel(9, levelSpeeds[9])}><LevelBar number={9} level={level} /></button>
            </div>
            <div className='demo'>
                <Board theGrid={tunnel} snake={demoSnake} food={[null, null]} gameOver={null} blinkOn={null} prey={PREY_START} />
            </div>
        </>
    )
}
