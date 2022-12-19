import { useState } from "react";
import Board from "../components/Board.jsx";
import Marquee from "../components/Marquee.jsx";
import useInterval from "../helpers/useInterval.js";
import {
    COLUMNS,
    ROWS,
    SNAKE_I_START,
    PREY_NA,
    SPEED_START
} from '../constants';
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
    const [pausedSpeed, setPausedSpeed] = useState(SPEED_START);

    /* FUNCTIONS */

    const gameBoard = [];
    const scoreBoard = [];

    layMatrix(gameBoard, COLUMNS, ROWS);
    layMatrix(scoreBoard, COLUMNS, 1);

    const startGame = () => {
        if (gameOver) {
            setSnake(SNAKE_I_START);
            setDirection([1, 0]);
            setSpeed(SPEED_START);
            setGameOver(false);
            setScore(0);
        }
        else pauseGame();
    }

    const pauseGame = () => {
        if (speed !== null) {
            setPausedSpeed(speed);
            setSpeed(null);
        } else
            setSpeed(pausedSpeed);
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
            case 32: pauseGame();
                break;
            default: ;
        }
    }

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
            setScore((prevScore) => prevScore + 5);
            setSpeed((prevSpeed) => prevSpeed - 1);
        } else snakeCopy.pop();

        setSnake(snakeCopy);
    };

    useInterval(() => gameLoop(), speed);

    return (
        <div className="snake1" role="button" tabIndex="0" onKeyDown={e => moveSnake(e)}>
            <div className="scoreboard">
                <Marquee layOut={scoreBoard} score={score} prey={PREY_NA} preyTimer={null} />
            </div>
            <div className="screen">
                <Board theGrid={gameBoard} snake={snake} food={food} gameOver={gameOver} blinkOn={blinkOn} prey={PREY_NA} />
            </div>
            <div>
                <button onClick={startGame}>START GAME</button>
            </div>
        </div>
    )
}