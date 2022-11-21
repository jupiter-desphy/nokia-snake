import { useState, useEffect, useRef } from "react";
import Board from "../components/Board.jsx";
import Marquee from "../components/Marquee.jsx";
import useInterval from "../helpers/useInterval.js";
import {
    COLUMNS,
    ROWS,
    SNAKE_II_START,
    SPEED_START,
    PREY_START
} from '../constants';
import layMatrix from "../helpers/layMatrix.js";

export function SnakeII() {

    /* STATE */
    const [snake, setSnake] = useState(SNAKE_II_START);
    const [gameOver, setGameOver] = useState(null);
    const [score, setScore] = useState(0);
    const [food, setFood] = useState([Math.floor(Math.random() * (COLUMNS - 2)) + 1, Math.floor(Math.random() * (ROWS - 2)) + 1]);
    const [foodCount, setFoodCount] = useState(0);
    const [direction, setDirection] = useState([1, 0]);
    const [speed, setSpeed] = useState(null);
    const [prevDirection, setPrevDirection] = useState([]);
    const [blinkOn, setBlinkOn] = useState(false);
    const [prey, setPrey] = useState(PREY_START);
    const [preyTimer, setPreyTimer] = useState(0);
    const [pausedSpeed, setPausedSpeed] = useState(SPEED_START);

    /* FUNCTIONS */


    useEffect(() => {
        randomizeFood();
        if (foodCount > 1 && foodCount % 5 === 0) randomizePrey();
    }, [foodCount]);

    useEffect(() => {

    }, []);


    const gameBoard = [];
    const scoreBoard = [];

    layMatrix(gameBoard, COLUMNS, ROWS);
    layMatrix(scoreBoard, COLUMNS, 1);

    const startGame = () => {
        if (gameOver !== false) {
            setSnake(SNAKE_II_START);
            setDirection([1, 0]);
            setSpeed(SPEED_START);
            setGameOver(false);
            setScore(0);
            setFoodCount(0);
            setPrey(PREY_START);
            setPreyTimer(0);
        } else pauseGame();
    }

    const endGame = () => {
        setSpeed(null);
        setGameOver(true);
    }

    const pauseGame = () => {
        if (speed !== null) {
            setPausedSpeed(speed);
            setSpeed(null);
        } else
            setSpeed(pausedSpeed);
    }




    const blink = () => {
        setBlinkOn(!blinkOn)
    }

    useInterval(() => blink(), 400);

    const randomizeFood = () => {
        let snakeOrPrey = [...snake, prey[0], prey[1]];
        console.log(snakeOrPrey)
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
        setPreyTimer(30);
    }

    const didCollide = (piece, snk = snake) => {
        for (let i = 0; i < snk.length - 1; i++) {
            if (piece[0] === snk[i][0] && piece[1] === snk[i][1])
                return true;
        }
        return false;
    };


    const moveLeft = () => {
        if (prevDirection[0] !== 1 && prevDirection[1] !== 0) setDirection([-1, 0]);
    }
    const moveUp = () => {
        if (prevDirection[0] !== 0 && prevDirection[1] !== 1) setDirection([0, -1]);
    }
    const moveRight = () => {
        if (prevDirection[0] !== -1 && prevDirection[1] !== 0) setDirection([1, 0]);
    }
    const moveDown = () => {
        if (prevDirection[0] !== 0 && prevDirection[1] !== -1) setDirection([0, 1]);
    }

    const moveSnake = ({ keyCode }) => {
        switch (keyCode) {
            case 37: moveLeft();
                break;
            case 38: moveUp();
                break;
            case 39: moveRight();
                break;
            case 40: moveDown();
                break;
            case 32: startGame();
                break;
            default: ;
        }
    }

    const gameLoop = () => {

        const snakeCopy = JSON.parse(JSON.stringify(snake));
        const head = [snakeCopy[0][0] + direction[0], snakeCopy[0][1] + direction[1], snakeCopy[0][2], snakeCopy[0][3]];

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
            setScore((prevScore) => prevScore + 7);
            setSpeed((prevSpeed) => prevSpeed - .25);
            head[3] = 'full';
        } else if ((snakeCopy[0][0] === prey[0][0] && snakeCopy[0][1] === prey[0][1]) || (snakeCopy[0][0] === prey[1][0] && snakeCopy[0][1] === prey[1][1])) {
            setScore((prevScore) => prevScore + 48);
            setSpeed((prevSpeed) => prevSpeed - .25);
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

    return (
        <div role="button" tabIndex="0" onKeyDown={e => moveSnake(e)}>

            <div className="scoreboard">
                <Marquee layOut={scoreBoard} score={score} prey={prey} preyTimer={preyTimer} />
            </div>
            <div className="screen">
                <Board theGrid={gameBoard} snake={snake} food={food} gameOver={gameOver} blinkOn={blinkOn} prey={prey} />
            </div>
            <div>
                <button onClick={startGame}>START GAME</button>
            </div>
            <div>
                <button onClick={pauseGame}>PAUSE GAME</button>
            </div>
            <div>
                {pausedSpeed}
            </div>


            {/* TESTING DATA
            <div>
                <button onClick={gameLoop}>GAME LOOP</button>
            </div>
            <div>
                <button onClick={moveUp}>Move Up</button>
            </div>
            <div>
                <button onClick={moveLeft}>Move Left</button>
                <button onClick={moveRight}>Move Right</button>
            </div>
            <div>
                <button onClick={moveDown}>Move Down</button>
            </div> */}

            {/* <div>
                {gameOver ? 'GAMEOVER' : ''}
            </div> */}
        </div>
    )
}