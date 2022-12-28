import { useState, useEffect, useRef } from "react";
import {
    COLUMNS,
    ROWS,
    SNAKE_I_START,
    PREY_NA,
    SPEED_START
} from '../constants';
import Board from "../components/Board.jsx";
import Marquee from "../components/Marquee.jsx";
import MenuSlide from "../components/MenuOption";
import LiteSlide from "../components/LiteSlide";
import Settings from "../components/Settings";
import Instructions from "../components/Instructions";
import useInterval from "../helpers/useInterval.js";
import layMatrix from "../helpers/layMatrix.js";

export function SnakeI() {

    /* STATE */
    const [snake, setSnake] = useState(SNAKE_I_START);
    const [gameOver, setGameOver] = useState(false);
    const [score, setScore] = useState(0);
    const [food, setFood] = useState([Math.floor(Math.random() * (COLUMNS - 2)) + 1, Math.floor(Math.random() * (ROWS - 2)) + 1]);
    const [direction, setDirection] = useState([1, 0]);
    const [speed, setSpeed] = useState(null);
    const [prevDirection, setPrevDirection] = useState([]);
    const [blinkOn, setBlinkOn] = useState(false);
    const [paused, setPaused] = useState(false)
    const [pausedSpeed, setPausedSpeed] = useState(SPEED_START);
    const [menuView, setMenuView] = useState(false);
    const [instructionsView, setInstructionsView] = useState(false);
    const [settingsView, setSettingsView] = useState(false);

    /* FUNCTIONS */

    const gameBoard = [];
    const scoreBoard = [];

    layMatrix(gameBoard, COLUMNS, ROWS);
    layMatrix(scoreBoard, COLUMNS, 1);

    const startGame = () => {
        setSnake(SNAKE_I_START);
        setDirection([1, 0]);
        setSpeed(pausedSpeed);
        setPaused(false);
        setGameOver(false);
        setScore(0);
    }

    const goSnake2Menu = () => {
        if (speed) setPausedSpeed(speed);
        setSpeed(null);
        setPaused(true);
        setMenuView(true);
        setInstructionsView(false);
        setSettingsView(false);
    }

    const cyclePausePhase = () => {
        if (speed !== null) {
            goSnake2Menu();
        } else if (!paused) {
            nudgeSnake();
        } else {
            returnToGame();
        }
    }

    const nudgeSnake = () => {
        if (!gameOver)
            setSpeed(pausedSpeed)
    }

    const returnToGame = () => {
        setPaused(false);
    }

    const endGame = () => {
        setSpeed(null);
        setGameOver(true);
    }

    const blink = () => {
        setBlinkOn(!blinkOn)
    }

    useInterval(() => blink(), 400);

    const randomizeFood = () => {
        let snakeCopy = snake;
        let foodCoordinates = [];

        const overlapsSnake = (segment) => {
            return foodCoordinates[0] === segment[0] && foodCoordinates[1] === segment[1]
        }

        do {
            foodCoordinates = [Math.floor(Math.random() * (COLUMNS - 2)) + 1, Math.floor(Math.random() * (ROWS - 2)) + 1];
        } while (snakeCopy.find(overlapsSnake));

        setFood(foodCoordinates);
    }

    const didCollide = (piece, snk = snake) => {
        if (piece[0] >= COLUMNS - 1 ||
            piece[0] < 1 ||
            piece[1] >= ROWS - 1 ||
            piece[1] < 1
        ) return true;

        for (let i = 0; i < snk.length - 1; i++) {
            if (piece[0] === snk[i][0] && piece[1] === snk[i][1])
                return true;
        }
        return false;
    };

    const moveLeft = () => {
        if (!paused) {
            if (prevDirection[0] !== 1 && prevDirection[1] !== 0) setDirection([-1, 0]);
            if (!speed) nudgeSnake();
        }
    }
    const moveUp = () => {
        if (!paused) {
            if (prevDirection[0] !== 0 && prevDirection[1] !== 1) setDirection([0, -1]);
            if (!speed) nudgeSnake();
        }
    }
    const moveRight = () => {
        if (!paused) {
            if (prevDirection[0] !== -1 && prevDirection[1] !== 0) setDirection([1, 0]);
            if (!speed) nudgeSnake();
        }
    }
    const moveDown = () => {
        if (!paused) {
            if (prevDirection[0] !== 0 && prevDirection[1] !== -1) setDirection([0, 1]);
            if (!speed) nudgeSnake();
        }
    }

    const useKey = (key, cb) => {
        const callbackRef = useRef(cb);

        useEffect(() => {
            callbackRef.current = cb;
        });

        useEffect(() => {
            const handle = (e) => {
                if (e.key === key) {
                    callbackRef.current(e);
                };
                // prevents scrolling if the viewport is too short
                if (e.key === ' ' || e.key === 'ArrowUp' || e.key === 'ArrowDown') {
                    e.preventDefault();
                }
            }
            document.addEventListener("keydown", handle);
            return () => document.removeEventListener("keydown", handle)
        }, [key]);
    }

    useKey('ArrowUp', moveUp);
    useKey('ArrowLeft', moveLeft);
    useKey('ArrowRight', moveRight);
    useKey('ArrowDown', moveDown);
    useKey('2', moveUp);
    useKey('4', moveLeft);
    useKey('6', moveRight);
    useKey('8', moveDown);
    useKey(' ', cyclePausePhase);
    useKey('Escape', goSnake2Menu);

    const gameLoop = () => {

        const snakeCopy = JSON.parse(JSON.stringify(snake));
        const head = [snakeCopy[0][0] + direction[0], snakeCopy[0][1] + direction[1], snakeCopy[0][2]];

        if (direction[0] === 0 && direction[1] === 1) head[2] = 'D';
        if (direction[0] === -1 && direction[1] === 0) head[2] = 'L';
        if (direction[0] === 0 && direction[1] === -1) head[2] = 'U';
        if (direction[0] === 1 && direction[1] === 0) head[2] = 'R';

        if (didCollide(head)) return endGame();

        snakeCopy.unshift(head);

        const logDirection = [direction[0], direction[1]];
        setPrevDirection(logDirection);

        if (snakeCopy[0][0] === food[0] && snakeCopy[0][1] === food[1]) {
            randomizeFood();
            setScore((prevScore) => prevScore + 6);
            setSpeed((prevSpeed) => prevSpeed - .25);
        } else snakeCopy.pop();

        setSnake(snakeCopy);
    };

    useInterval(() => gameLoop(), speed);

    // ------ SNAKE II MENU OPTIONS -------
    const instructionsOption = () => { setInstructionsView(true); setMenuView(false); }
    const settingsOption = () => { setSettingsView(true); setMenuView(false); }

    return (
        <div className="snake1">
            {paused ?
                <>
                    {instructionsView && <Instructions />}
                    {settingsView && <Settings />}
                    {menuView ?
                        <>
                            <LiteSlide optionName='Snake I' isHeading={true} />
                            <ul>
                                {/* <li> */}
                                <button className='hidden-button' onClick={startGame}>
                                    <MenuSlide optionName=' New game' />
                                </button>
                                {/* </li> */}
                                <button className="hidden-button" onClick={returnToGame}>
                                    <MenuSlide optionName=' Continue' />
                                </button>
                                <button className="hidden-button" onClick={instructionsOption}>
                                    <MenuSlide optionName=' Instructions' />
                                </button>
                                {/* 
                                <button className="hidden-button" onClick={settingsOption}>
                                    <MenuSlide optionName=' Settings' />
                                </button>
                                */}
                            </ul>
                        </>
                        :
                        <>
                            <br></br>
                            <button className='menu-button' onClick={goSnake2Menu}>
                                <MenuSlide optionName={'             Back'} />
                            </button>
                        </>
                    }
                </>
                :
                <>
                    <div className="scoreboard">
                        <Marquee layOut={scoreBoard} score={score} prey={PREY_NA} preyTimer={null} />
                    </div>
                    <div className="screen">
                        <Board theGrid={gameBoard} snake={snake} food={food} gameOver={gameOver} blinkOn={blinkOn} prey={PREY_NA} />
                    </div>
                    <button className="menu-button" onClick={goSnake2Menu}>
                        <MenuSlide optionName='            Menu' />
                    </button>
                </>
            }
            <br></br>

            <button className="up-button controls" onClick={moveUp}></button>
            <button className="left-button controls" onClick={moveLeft}></button>
            <button className="right-button controls" onClick={moveRight}></button>
            <button className="down-button controls" onClick={moveDown}></button>
        </div>

    )
}