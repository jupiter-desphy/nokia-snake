import React from 'react';
import MenuHeader from './MenuHeader';
import Board from './Board';
import layMatrix from '../helpers/layMatrix';
import { PREY_START, SNAKE_II_START, COLUMNS } from '../constants';

export default function Level({ level }) {

    const tunnel = []
    layMatrix(tunnel, COLUMNS, 1);
    return (
        <div>
            <MenuHeader optionName="Level" />
            <Board theGrid={tunnel} snake={SNAKE_II_START} food={[null, null]} gameOver={null} blinkOn={null} prey={PREY_START} />
        </div>
    )
}
