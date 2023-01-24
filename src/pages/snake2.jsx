import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
    COLUMNS,
    ROWS,
    SNAKE_II_START,
    SPEED_START,
    DIRECTION_START,
    PREY_START
} from '../constants';
import Board from "../components/Board.jsx";
import Marquee from "../components/Marquee.jsx";
import MenuOption from "../components/MenuOption";
import LiteSlide from "../components/LiteSlide";
import Level from "../components/Level";
import Instructions from "../components/Instructions";
import Settings from "../components/Settings";
import { useTheme, useThemeUpdate } from "../components/ThemeContext";
import useInterval from "../helpers/useInterval.js";
import layMatrix from "../helpers/layMatrix.js";
import { useSwipeable } from "react-swipeable";

export function SnakeII() {

    /* ------ STATE ------- */
    const [snake, setSnake] = useState(SNAKE_II_START);
    const [gameOver, setGameOver] = useState(null);
    const [score, setScore] = useState(0);
    const [food, setFood] = useState([Math.floor(Math.random() * (COLUMNS - 2)) + 1, Math.floor(Math.random() * (ROWS - 2)) + 1]);
    const [foodCount, setFoodCount] = useState(0);
    const [direction, setDirection] = useState(DIRECTION_START);
    const [speed, setSpeed] = useState(null);
    const [prevDirection, setPrevDirection] = useState(DIRECTION_START);
    const [blinkOn, setBlinkOn] = useState(false);
    const [paused, setPaused] = useState(false)
    const [pausedSpeed, setPausedSpeed] = useState(SPEED_START);
    const [menuView, setMenuView] = useState(false);
    const [instructionsView, setInstructionsView] = useState(false);
    const [settingsView, setSettingsView] = useState(false);

    /* ------ SNAKE II STATE ------- */
    const [level, setLevel] = useState(6);
    const [levelView, setLevelView] = useState(false);
    const [prey, setPrey] = useState(PREY_START);
    const [preyTimer, setPreyTimer] = useState(0);

    /* ------ FUNCTIONS ------- */

    // document.body.requestFullscreen();

    const gameBoard = [];
    const scoreBoard = [];

    layMatrix(gameBoard, COLUMNS, ROWS);
    layMatrix(scoreBoard, COLUMNS, 1);

    const startGame = () => {
        setSnake(SNAKE_II_START);
        setDirection(DIRECTION_START);
        setSpeed(pausedSpeed);
        setPaused(false);
        setGameOver(false);
        setScore(0);
        setFoodCount(0);
        setPrey(PREY_START);
        setPreyTimer(0);
    }

    const cyclePausePhase = () => {
        if (speed !== null) {
            goToMenu();
        } else if (paused) {
            returnToGame();
        } else {
            nudgeSnake();
        }
    }

    const goToMenu = () => {
        if (speed) setPausedSpeed(speed);
        setSpeed(null);
        setPaused(true);
        setMenuView(true);
        setLevelView(false);
        setInstructionsView(false);
        setSettingsView(false);
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
        let snakeOrPrey = [...snake, prey[0], prey[1]];
        let foodCoordinates = [];

        function overlapsSnake(segment) {
            return foodCoordinates[0] === segment[0] && foodCoordinates[1] === segment[1]
        }

        do {
            foodCoordinates = [Math.floor(Math.random() * (COLUMNS - 2)) + 1, Math.floor(Math.random() * (ROWS - 2)) + 1];
        } while (snakeOrPrey.find(overlapsSnake));

        setFood(foodCoordinates);
    }

    const randomizePrey = () => {
        let snakeOrFood = [...snake, food];
        let prey0 = [];

        const overlapsSnakeOrFood = (segment) => {
            return (prey0[0] === segment[0] && prey0[1] === segment[1]) || (prey0[0] + 1 === segment[0] && prey0[1] === segment[1])
        }

        do {
            prey0 = [Math.floor(Math.random() * (COLUMNS - 3)) + 1, Math.floor(Math.random() * (ROWS - 2) + 1)];
        } while (snakeOrFood.find(overlapsSnakeOrFood));

        let prey1 = [prey0[0] + 1, prey0[1]];
        let creature = prey[2];
        if ((creature === 'caterpillar') || (creature === null)) {
            creature = 'fish';
        } else if (creature === 'fish') {
            creature = 'spider';
        } else if (creature === 'spider') {
            creature = 'chameleon';
        } else if (creature === 'chameleon') {
            creature = 'caterpillar';
        }
        setPrey([prey0, prey1, creature]);
        setPreyTimer(28);
    }

    const didCollide = (piece, snk = snake) => {
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
                if (e.key === ' ' || e.key === 'ArrowUp' || e.key === 'ArrowDown' || e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
                    e.preventDefault();
                }
            }
            document.addEventListener("keydown", handle);
            return () => document.removeEventListener("keydown", handle)
        }, [key]);
    }

    // const keyIsWorking = () => {
    //     console.log('Nice!')
    // }

    useKey('ArrowUp', moveUp);
    useKey('ArrowLeft', moveLeft);
    useKey('ArrowRight', moveRight);
    useKey('ArrowDown', moveDown);
    useKey('2', moveUp);
    useKey('4', moveLeft);
    useKey('6', moveRight);
    useKey('8', moveDown);
    useKey(' ', cyclePausePhase);
    useKey('Escape', goToMenu);
    // useKey('z', keyIsWorking);

    const handlers = useSwipeable({
        // onSwiped: (eventData) => console.log("User Swiped!", eventData),
        onSwipedLeft: () => moveLeft(),
        onSwipedRight: () => moveRight(),
        onSwipedUp: () => moveUp(),
        onSwipedDown: () => moveDown(),
        preventScrollOnSwipe: true // calls e.preventDefault() on touchMove event listener
    });

    const gameLoop = () => {

        const snakeCopy = JSON.parse(JSON.stringify(snake));
        const head = [snakeCopy[0][0] + direction[0], snakeCopy[0][1] + direction[1], snakeCopy[0][2], snakeCopy[0][3]];

        /* teleport snake to other side */
        if (head[0] >= COLUMNS - 1) head[0] = 1;
        if (head[0] < 1) head[0] = COLUMNS - 2;
        if (head[1] >= ROWS - 1) head[1] = 1;
        if (head[1] < 1) head[1] = ROWS - 2;

        if (direction[0] === 0 && direction[1] === 1) head[2] = 'D';
        if (direction[0] === -1 && direction[1] === 0) head[2] = 'L';
        if (direction[0] === 0 && direction[1] === -1) head[2] = 'U';
        if (direction[0] === 1 && direction[1] === 0) head[2] = 'R';

        if (didCollide(head)) return endGame();

        snakeCopy.unshift(head);

        const logDirection = [direction[0], direction[1]];
        setPrevDirection(logDirection);

        if (snakeCopy[0][0] === food[0] && snakeCopy[0][1] === food[1]) {
            setFoodCount(foodCount + 1);
            setScore((prevScore) => prevScore + level);
            head[3] = 'full';
        } else if ((snakeCopy[0][0] === prey[0][0] && snakeCopy[0][1] === prey[0][1]) || (snakeCopy[0][0] === prey[1][0] && snakeCopy[0][1] === prey[1][1])) {
            setScore((prevScore) => prevScore + 48);
            setPrey((prevPrey) => [[null, null], [null, null], prevPrey[2]]);
            setPreyTimer(1);
            head[3] = 'full';
        } else {
            snakeCopy.pop();
            head[3] = 'hungry';
        }

        preyTimer === 0 ? setPrey((prevPrey) => [[null, null], [null, null], prevPrey[2]]) : setPreyTimer((prevPreyTimer) => prevPreyTimer - 1);

        setSnake(snakeCopy);
    };

    useInterval(() => gameLoop(), speed);

    useEffect(() => {
        randomizeFood();
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [foodCount]);

    useEffect(() => {
        if (foodCount > 1 && foodCount % 5 === 0) randomizePrey();
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [food]);

    /* ------ SNAKE II MENU OPTIONS ------- */

    const levelOption = () => { setLevelView(true); setMenuView(false); }
    const instructionsOption = () => { setInstructionsView(true); setMenuView(false); }
    // const settingsOption = () => { setSettingsView(true); setMenuView(false); }

    return (
        <div className="snake2">
            {paused ?
                <>
                    {levelView && <Level level={level} chooseLevel={(level, pausedSpeed) => { setLevel(level); setPausedSpeed(pausedSpeed) }} levelViewable={(levelView) => setLevelView(levelView)} speed={pausedSpeed} />}
                    {instructionsView && <Instructions version='Snake II' />}
                    {/* {settingsView && <Settings />} */}
                    {menuView ?
                        <>
                            <LiteSlide optionName='Snake II' isHeading={true} />
                            <ul>
                                {/* <li> */}
                                <button className='hidden-button' onClick={startGame}>
                                    <MenuOption optionName=' New game' />
                                </button>
                                {/* </li> */}
                                <button className="hidden-button" onClick={returnToGame}>
                                    <MenuOption optionName=' Continue' />
                                </button>
                                <button className="hidden-button" onClick={levelOption}>
                                    <MenuOption optionName=' Level' />
                                </button>
                                <button className="hidden-button" onClick={instructionsOption}>
                                    <MenuOption optionName=' Instructions' />
                                </button>
                                <Link to={`/menu`}>
                                    <MenuOption optionName=' Main Menu' />
                                </Link>
                                {/* 
                                <button className="hidden-button" onClick={settingsOption}>
                                    <MenuSlide optionName=' Settings' />
                                </button>
                                */}
                            </ul>
                        </>
                        :
                        // <>
                        //     <br></br>
                            <button className='menu-button' onClick={goToMenu}>
                                <MenuOption optionName={'             Back'} />
                            </button>
                        // </>
                    }
                </>
                :
                <>
                    <div {...handlers}> {/* denotes where swipe controls can be activated */}
                        <div className="scoreboard">
                            <Marquee layOut={scoreBoard} score={score} prey={prey} preyTimer={preyTimer} />
                        </div>
                        <div className="screen">
                            <Board theGrid={gameBoard} snake={snake} food={food} gameOver={gameOver} blinkOn={blinkOn} prey={prey} />
                        </div>
                    </div>
                    <button className="menu-button" onClick={goToMenu}>
                        <MenuOption optionName='            Menu' />
                    </button>
                </>
            }
            <br></br>
            {/* level: {level}
            <br></br>
            Speed: {speed} */}

            {/* <div className="controls"> */}

            <button className="up-button controls" onClick={moveUp}></button>
            <button className="left-button controls" onClick={moveLeft}></button>
            <button className="right-button controls" onClick={moveRight}></button>
            <button className="down-button controls" onClick={moveDown}></button>

            {/* </div> */}



            {/* ------ TESTING DATA ------- 
            <div>
                {pausedSpeed}
            </div>
            <div>
                {gameOver ? 'GAME OVER' : ''}
            </div>
            */}
        </div>
    )
}