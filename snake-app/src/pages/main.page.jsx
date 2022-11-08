import { useState, useRef, useEffect } from "react";
import Board from "../components/Board.jsx";
// import useInterval from "../helpers/useinterval.js";
import {
    SNAKE_START
} from '../constants';
import useInterval from "../helpers/useinterval.js";
import arrayIncludes from "../helpers/arrayIncludes.js";

export function MainPage(props) {

    /* Gameboard 2D Array */
    const columns = 20;
    const rows = 10;


    /* STATE */
    const [snakeArr, setSnakeArr] = useState(SNAKE_START);
    const [gameOver, setGameOver] = useState(false);
    const [score, setScore] = useState(0);
    const [food, setFood] = useState([Math.floor(Math.random() * columns), Math.floor(Math.random() * rows)]);
    const [direction, setDirection] = useState([1, 0]);
    const [speed, setSpeed] = useState(null);
    const [prevDirection, setPrevDirection] = useState([]);

    /* FUNCTIONS */

    const startGame = () => {
        setSnakeArr(SNAKE_START);
        setDirection([1, 0]);
        setSpeed(270);
        setGameOver(false);
        setScore(0)

    }

    const endGame = () => {
        setSpeed(null);
        setGameOver(true);

    }

    function randomizeFood() {
        let foodCoordinates = [Math.floor(Math.random() * columns), Math.floor(Math.random() * rows)];
        for (let i = 0; i < snakeArr.length; i++) {
            while (snakeArr[i][0] == foodCoordinates[0] && snakeArr[i][0]) {
                foodCoordinates = [Math.floor(Math.random() * columns), Math.floor(Math.random() * rows)];
            }
        }
        setFood(foodCoordinates);
    }


    const checkCollision = (piece, snk = snakeArr) => {

        if (
            piece[0] >= columns ||
            piece[0] < 0 ||
            piece[1] >= rows ||
            piece[1] < 0
        )
            return true;

        // for (const segment of snk) {
        //     if (piece[0] === segment[0] && piece[1] === segment[1]) {
        //         console.log(piece, 'segment', segment)
        for (let i = 0; i < snk.length -1; i++){
            if(piece[0] === snk[i][0] && piece[1] === snk[i][1])
                return true;
        }
        return false;
    };



    const gameLoop = () => {
        const snakeCopy = JSON.parse(JSON.stringify(snakeArr));
        const newSnakeHead = [snakeCopy[0][0] + direction[0], snakeCopy[0][1] + direction[1], snakeCopy[0][2]];

        if (direction[0] == 0 && direction[1] == 1){
            newSnakeHead[2] = 'D'
        }
        if (direction[0] == -1 && direction[1] == 0){
            newSnakeHead[2] = 'L'
        }
        if (direction[0] == 0 && direction[1] == -1){
            newSnakeHead[2] = 'U'
        }
        if (direction[0] == 1 && direction[1] == 0){
            newSnakeHead[2] = 'R'
        }

        snakeCopy.unshift(newSnakeHead);

        const logDirection = [direction[0], direction[1]];
        setPrevDirection(logDirection);



        if (checkCollision(newSnakeHead)) {
            endGame()
        };

        if (snakeCopy[0][0] === food[0] && snakeCopy[0][1] === food[1]) {
            setSnakeArr(snakeCopy);
            randomizeFood();
            setScore((prevScore) => prevScore + 10);
            setSpeed((prevSpeed) => prevSpeed - 2);
        } else snakeCopy.pop();


        setSnakeArr(snakeCopy);
    };

    // const moveSnake = ({ keyCode }) => {
    //     keyCode >= 37 && keyCode <= 40 && setDirection(DIRECTIONS[keyCode]);
    //     const snakeCopy = JSON.parse(JSON.stringify(snakeArr));
    //     const nextHead = [snakeCopy[0][0] + direction[0], snakeCopy[0][1] + direction[1]];
    //     if (checkCollision(nextHead)) endGame();
    // }

    const moveLeft = () => {
        if (prevDirection[0] != 1 && prevDirection[1] != 0) {
            setDirection([-1, 0]);
            // const snakeCopy = JSON.parse(JSON.stringify(snakeArr));
            // const nextHead = [snakeCopy[0][0] + direction[0], snakeCopy[0][1] + direction[1]];
            // if (checkCollision(nextHead)) endGame();
        }
    }

    const moveUp = () => {
        if (prevDirection[0] != 0 && prevDirection[1] != 1) {
            setDirection([0, -1]);
            // const snakeCopy = JSON.parse(JSON.stringify(snakeArr));
            // const nextHead = [snakeCopy[0][0] + direction[0], snakeCopy[0][1] + direction[1]];
            // if (checkCollision(nextHead)) endGame();
        }
    }

    const moveRight = () => {
        if (prevDirection[0] != -1 && prevDirection[1] != 0) {
            setDirection([1, 0]);
            // const snakeCopy = JSON.parse(JSON.stringify(snakeArr));
            // const nextHead = [snakeCopy[0][0] + direction[0], snakeCopy[0][1] + direction[1]];
            // if (checkCollision(nextHead)) endGame();
        }
    }
    const moveDown = () => {
        if (prevDirection[0] != 0 && prevDirection[1] != -1) {
            setDirection([0, 1]);
            // const snakeCopy = JSON.parse(JSON.stringify(snakeArr));
            // const nextHead = [snakeCopy[0][0] + direction[0], snakeCopy[0][1] + direction[1]];
            // if (checkCollision(nextHead)) endGame();
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
        for (let i = 0; i < rows; i++) {
            game.push(new Array(rows))
            for (let j = 0; j < columns; j++) {
                game[i][j] = [j, i, null];
            }
        }
    }


    designBoard(gameBoard.current);

    useInterval(() => gameLoop(), speed);

    return (
        <div role="button" tabIndex="0" onKeyDown={e => moveSnake(e)}>
            <div className="score">
                SCORE: {score}
            </div>


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
            </div>

            <div className="screen">
                <Board theGrid={gameBoard.current} snakeArr={snakeArr} food={food} />
            </div>
            <div>
                <button onClick={startGame}>START GAME</button>
            </div>
            <div>
                {gameOver ? 'GAMEOVER' : ''}
            </div>
            {/* <span>
                SNAKE ARRAY: {snakeArr + ''}
            </span> */}
            {/* <span>
                PREV DIR: {prevDirection + ''}
            </span> */}
        </div>
    )
}

    // function moveRight() {
    //     const head = snakeArr[snakeArr.length - 1]
    //     const lunch = food
    //     if (direction != 'left') {
    //         if (head == lunch) {
    //             // console.log('log1', snakeArr)
    //             setSnakeArr(prevSnakeArr => {
    //                 return [
    //                     prevSnakeArr,
    //                     (Number([prevSnakeArr[prevSnakeArr.length - 1]]) + 10)
    //                 ].flat()
    //             });
    //             console.log('before randomizefood', snakeArr)
    //             randomizeFood()
    //             console.log('after randomize', snakeArr)
    //         } else {
    //             setSnakeArr(prevSnakeArr => {
    //                 let tempThing = prevSnakeArr.slice(1);
    //                 tempThing.push(Number([prevSnakeArr[prevSnakeArr.length - 1]]) + 10);
    //                 return tempThing;

    //             });
    //         }

    //         if (snakeArr[snakeArr.length - 1] > 190) {
    //             setGameOver(true)
    //         };
    //         setDirection('right');
    //     }
    // }