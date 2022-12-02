import React from 'react';
import MenuHeader from './MenuHeader';
import Board from './Board';
import layMatrix from '../helpers/layMatrix';

export default function Level({ level }) {
    return (
        <div>
            <MenuHeader optionName="Level" />
            <Board theGrid={null} snake={null} food={null} gameOver={null} blinkOn={null} prey={null} />
        </div>
    )
}
