import { useState, useRef, useEffect } from "react";
import Board from "../components/Board.jsx";
// import useInterval from "../helpers/useinterval.js";
import {
    DIRECTIONS
} from '../constants';
import useInterval from "../helpers/useinterval.js";
import arrayIncludes from "../helpers/arrayIncludes.js";

export function MainPage(props) {

    /* Gameboard 2D Array */
    const columns = 20;
    const rows = 10;


    /* STATE */
    const [snakeArr, setSnakeArr] = useState([
        [10, 4],
        [9, 4],
        [8, 4],
        [7, 4],
        [6, 4]
    ]);
    const [gameOver, setGameOver] = useState(false);
    const [score, setScore] = useState(0);
    const [food, setFood] = useState([Math.floor(Math.random() * columns), Math.floor(Math.random() * rows)]);
    const [direction, setDirection] = useState([1, 0]);
    const [speed, setSpeed] = useState(null);

    /* FUNCTIONS */

    const startGame = () => {
        setSnakeArr([
            [10, 4],
            [9, 4],
            [8, 4],
            [7, 4],
            [6, 4]
        ]);
        setDirection([1, 0]);
        setSpeed(280);
        setGameOver(false);

    }

    const endGame = () => {
        setSpeed(null);
        setGameOver(true);

    }

    function randomizeFood() {
        let foodCoordinates = [Math.floor(Math.random() * columns), Math.floor(Math.random() * rows)];
        // while (snakeArr.includes(foodCoordinates)) { //includes shouldn't work anymore
        //     foodCoordinates = [Math.floor(Math.random() * columns), Math.floor(Math.random() * rows)];
        // }
        setFood(foodCoordinates);
    }


    const checkCollision = (piece, snk = snakeArr) => {
        if (
            piece[0] >= 20 ||
            piece[0] < 0 ||
            piece[1] >= rows ||
            piece[1] < 0
        )
            return true;

        for (const segment of snk) {
            if (piece[0] === segment[0] && piece[1] === segment[1]) { return true; }
        }
        return false;
    };



    const gameLoop = () => {
        const snakeCopy = JSON.parse(JSON.stringify(snakeArr));
        const newSnakeHead = [snakeCopy[0][0] + direction[0], snakeCopy[0][1] + direction[1]];
        snakeCopy.unshift(newSnakeHead);
        console.log('snakeCopy', snakeCopy)
        if (checkCollision(newSnakeHead)) {
            endGame()
        };
        if (snakeCopy[0][0] === food[0] && snakeCopy[0][1] === food[1]) {
            setSnakeArr(snakeCopy);
            randomizeFood();
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
        if (direction[0] != 1 && direction[1] != 0) {
            setDirection([-1, 0]);
            const snakeCopy = JSON.parse(JSON.stringify(snakeArr));
            const nextHead = [snakeCopy[0][0] + direction[0], snakeCopy[0][1] + direction[1]];
            if (checkCollision(nextHead)) endGame();
        }
    }

    const moveUp = () => {
        if (direction[0] != 0 && direction[1] != 1) {
            setDirection([0, -1]);
            const snakeCopy = JSON.parse(JSON.stringify(snakeArr));
            const nextHead = [snakeCopy[0][0] + direction[0], snakeCopy[0][1] + direction[1]];
            if (checkCollision(nextHead)) endGame();
        }
    }

    const moveRight = () => {
        if (direction[0] != -1 && direction[1] != 0) {
            setDirection([1, 0]);
            const snakeCopy = JSON.parse(JSON.stringify(snakeArr));
            const nextHead = [snakeCopy[0][0] + direction[0], snakeCopy[0][1] + direction[1]];
            if (checkCollision(nextHead)) endGame();
        }
    }
    const moveDown = () => {
        if (direction[0] != 0 && direction[1] != -1) {
            setDirection([0, 1]);
            const snakeCopy = JSON.parse(JSON.stringify(snakeArr));
            const nextHead = [snakeCopy[0][0] + direction[0], snakeCopy[0][1] + direction[1]];
            if (checkCollision(nextHead)) endGame();
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
                game[i][j] = [j, i];
            }
        }
    }


    designBoard(gameBoard.current);

    useEffect(() => {


    }, [snakeArr, food, gameOver]);

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