import { useState, useRef, useEffect } from "react";
import Board from "../components/Board.jsx";
// import useInterval from "../helpers/useinterval.js";
import {
    COLUMNS,
    ROWS,
    SNAKE_START,
    PREY_START
} from '../constants';
import UseInterval from "../helpers/useinterval.js";

export function SnakeII(props) {


    /* STATE */
    const [snakeArr, setSnakeArr] = useState(SNAKE_START);
    const [gameOver, setGameOver] = useState(false);
    const [score, setScore] = useState(0);
    const [food, setFood] = useState([Math.floor(Math.random() * COLUMNS), Math.floor(Math.random() * ROWS)]);
    const [foodCount, setFoodCount] = useState(0);
    const [direction, setDirection] = useState([1, 0]);
    const [speed, setSpeed] = useState(null);
    const [prevDirection, setPrevDirection] = useState([]);
    const [blinkOn, setBlinkOn] = useState(false);
    const [prey, setPrey] = useState(PREY_START);
    const [preyTimer, setPreyTimer] = useState(0);

    /* FUNCTIONS */



    const startGame = () => {
        setSnakeArr(SNAKE_START);
        setDirection([1, 0]);
        setSpeed(250);
        setGameOver(false);
        setScore(0);
        setFoodCount(0);
        setPrey(PREY_START);
        setPreyTimer(0);
    }

    const endGame = () => {
        setSpeed(null);
        setGameOver(true);
    }

    const blink = () => {
        setBlinkOn(!blinkOn)
    }

    UseInterval(() => blink(), 400);

    const randomizeFood = () => {
        let snakeClone = snakeArr;
        let foodCoordinates = [Math.floor(Math.random() * (COLUMNS - 2)) + 1, Math.floor(Math.random() * (ROWS - 2)) + 1];
        for (const segment of snakeClone) {
            while (foodCoordinates[0] === segment[0] && foodCoordinates[1] === segment[1]) {
                foodCoordinates = [Math.floor(Math.random() * (COLUMNS - 2)) + 1, Math.floor(Math.random() * (ROWS - 2)) + 1];
            }
        }
        // let foodCoordinates = [Math.floor(Math.random() * columns), Math.floor(Math.random() * rows)];
        // for (let i = 0; i < snakeArr.length; i++) {
        //     while (snakeArr[i][0] == foodCoordinates[0] && snakeArr[i][0]) {
        //         foodCoordinates = [Math.floor(Math.random() * columns), Math.floor(Math.random() * rows)];
        //     }
        // }
        setFood(foodCoordinates);
    }

    const randomizePrey = () => {
        let snakeClone = snakeArr
        let prey0 = [Math.floor(Math.random() * (COLUMNS - 3)) + 1, Math.floor(Math.random() * (ROWS - 2) + 1)];
        for (const segment of snakeClone) {
            while (prey0[0] === segment[0] && prey0[1] === segment[1]) {
                prey0 = [Math.floor(Math.random() * (COLUMNS - 3)) + 1, Math.floor(Math.random() * (ROWS - 2) + 1)];
            }
        }
        let prey1 = [prey0[0] + 1, prey0[1]];
        let creature = prey[2];
        if ((creature === 'caterpillar') || (creature === null)) {
            creature = 'fish';
        } else if (creature === 'fish') {
            creature = 'spider';
        } else if (creature === 'spider') {
            creature = 'caterpillar';
        }
        setPrey([prey0, prey1, creature]);
        setPreyTimer(30);
    }

    useEffect(() => {
        randomizeFood();
        if (foodCount > 1 && foodCount % 5 === 0) {
            randomizePrey();
        }

        // if (gameOver) {
        //     setTimeout(() => {
        //         if (gameOver) {
        //             setSnakeArr(SNAKE_START);
        //             setDirection([1, 0]);
        //             setGameOver(false);
        //             setScore(0);
        //             setFoodCount(0);
        //             setPrey(PREY_START);
        //         }

        //     }, 4500)
        // }
    }, [foodCount]);

    const didCollide = (piece, snk = snakeArr) => {

        for (let i = 0; i < snk.length - 1; i++) {
            if (piece[0] === snk[i][0] && piece[1] === snk[i][1])
                return true;
        }
        return false;
    };

    const foodEaten = newSnake => {
        if (newSnake[0][0] === food[0] && newSnake[0][1] === food[1]) {
            let newFood = randomizeFood();
            while (didCollide(newFood, newSnake)) {
                newFood = randomizeFood();
            }
        }
    }




    const moveLeft = () => {
        if (prevDirection[0] !== 1 && prevDirection[1] !== 0) {
            setDirection([-1, 0]);
        }
    }

    const moveUp = () => {
        if (prevDirection[0] !== 0 && prevDirection[1] !== 1) {
            setDirection([0, -1]);
        }
    }

    const moveRight = () => {
        if (prevDirection[0] !== -1 && prevDirection[1] !== 0) {
            setDirection([1, 0]);
        }
    }
    const moveDown = () => {
        if (prevDirection[0] !== 0 && prevDirection[1] !== -1) {
            setDirection([0, 1]);
        }
    }

    const moveSnake = ({ keyCode }) => {
        // keyCode >= 37 && keyCode <= 40 && 
        switch (keyCode) {
            case 37: moveLeft();
                break;
            case 38: moveUp();
                break;
            case 39: moveRight();
                break;
            case 40: moveDown();
                break;
            default: ;
        }
    }

    const gameBoard = useRef([]);

    function designBoard(game) {
        for (let i = 0; i < ROWS; i++) {
            game.push(new Array(ROWS))
            for (let j = 0; j < COLUMNS; j++) {
                game[i][j] = [j, i, null];
            }
        }
    }

    const gameLoop = () => {
        const snakeCopy = JSON.parse(JSON.stringify(snakeArr));
        // const bellyCopy = JSON.parse(JSON.stringify(fullBelly));
        const newSnakeHead = [snakeCopy[0][0] + direction[0], snakeCopy[0][1] + direction[1], snakeCopy[0][2], snakeCopy[0][3]];
        // const newFood = [food[0], food[1]];

        if (didCollide(newSnakeHead)) {
            return endGame()
        };

        if (newSnakeHead[0] >= COLUMNS - 1) newSnakeHead[0] = 1;
        if (newSnakeHead[0] < 1) newSnakeHead[0] = COLUMNS - 2;
        if (newSnakeHead[1] >= ROWS - 1) newSnakeHead[1] = 1;
        if (newSnakeHead[1] < 1) newSnakeHead[1] = ROWS - 2;


        if (direction[0] === 0 && direction[1] === 1) {
            newSnakeHead[2] = 'D'
        }
        if (direction[0] === -1 && direction[1] === 0) {
            newSnakeHead[2] = 'L'
        }
        if (direction[0] === 0 && direction[1] === -1) {
            newSnakeHead[2] = 'U'
        }
        if (direction[0] === 1 && direction[1] === 0) {
            newSnakeHead[2] = 'R'
        }

        snakeCopy.unshift(newSnakeHead);

        const logDirection = [direction[0], direction[1]];
        setPrevDirection(logDirection);

        if (snakeCopy[0][0] === food[0] && snakeCopy[0][1] === food[1]) {
            newSnakeHead[3] = 'full';
            setFoodCount(foodCount + 1)
            // let newFood = randomizeFood();
            // while (didCollide(newFood, snakeCopy)) {
            //     newFood = randomizeFood();
            // }
            setScore((prevScore) => prevScore + 5);
            setSpeed((prevSpeed) => prevSpeed - 1);
        } else if ((snakeCopy[0][0] === prey[0][0] && snakeCopy[0][1] === prey[0][1]) || (snakeCopy[0][0] === prey[1][0] && snakeCopy[0][1] === prey[1][1])) {
            setScore((prevScore) => prevScore + 50);
            setSpeed((prevSpeed) => prevSpeed - 1);
            setPrey((prevPrey) => [[null, null], [null, null], prevPrey[2]])
            setPreyTimer(1);
            newSnakeHead[3] = 'full';
        } else {
            snakeCopy.pop();
            newSnakeHead[3] = 'hungry';
        }


        preyTimer === 0 ? setPrey((prevPrey) => [[null, null], [null, null], prevPrey[2]]) : setPreyTimer((prevPreyTimer) => prevPreyTimer - 1);

        setSnakeArr(snakeCopy);
    };


    designBoard(gameBoard.current);

    UseInterval(() => gameLoop(), speed);

    return (
        <div role="button" tabIndex="0" onKeyDown={e => moveSnake(e)}>
            <div className="score">
                SCORE: {score}
            </div>
            <div className="foodCount">
                foodCount: {foodCount}
            </div>
            <div className="preyTimer">
                preyTimer: {preyTimer}
            </div>


            {/* <div>
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

            <div className="screen">
                <Board theGrid={gameBoard.current} snakeArr={snakeArr} food={food} gameOver={gameOver} blinkOn={blinkOn} prey={prey} />
            </div>
            <div>
                <button onClick={startGame}>START GAME</button>
            </div>
            <div>
                {gameOver ? 'GAMEOVER' : ''}
            </div>
        </div>
    )
}