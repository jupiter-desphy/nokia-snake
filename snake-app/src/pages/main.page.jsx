import { useState } from "react";

export function MainPage(props) {
    const [snakeArr, setSnakeArr] = useState([64, 74, 84, 94, 104]);
    const [gameOver, setGameOver] = useState(false);
    const [score, setScore] = useState(0);
    const [direction, setDirection] = useState('right');
    const [food, setFood] = useState(Math.floor(Math.random()*200));

    function moveRight() {
        if (direction != 'left') {
            setSnakeArr(prevSnakeArr => {
                return [
                    prevSnakeArr.slice(1),
                    (Number([prevSnakeArr[prevSnakeArr.length - 1]]) + 10)
                ].flat()
            });
            if (snakeArr[snakeArr.length - 1] > 190) {
                setGameOver(true)
            };
            setDirection('right');
        }
    }

    function moveLeft() {
        if (direction != 'right') {
            setSnakeArr(prevSnakeArr => {
                return [
                    prevSnakeArr.slice(1),
                    (Number([prevSnakeArr[prevSnakeArr.length - 1]]) - 10)
                ].flat()
            });
            setDirection('left');
        }
    }

    function moveUp() {
        if (direction != 'down') {
            setSnakeArr(prevSnakeArr => {
                return [
                    prevSnakeArr.slice(1),
                    (Number([prevSnakeArr[prevSnakeArr.length - 1]]) - 1)
                ].flat()
            });
            setDirection('up');
        }
    }

    function moveDown() {
        if (direction != 'up') {
            setSnakeArr(prevSnakeArr => {
                return [
                    prevSnakeArr.slice(1),
                    (Number([prevSnakeArr[prevSnakeArr.length - 1]]) + 1)
                ].flat()
            });
            setDirection('down')
        }
    }


    return (
        <>
            <div>
                DIRECTION: {direction}
            </div>
            <div>
                FOOD: {food}
            </div>
            <div>
                SNAKE: {snakeArr.map((i) => i + `, `)}
            </div>
            <div className="score">
                SCORE: {score}
            </div>
            <div>
                {gameOver ? 'GAMEOVER' : ''}
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

                <div className={`pixel ${snakeArr.includes(0) ? 'black' : ''} ${food== 0 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 00 </div>
                    <div className="px8"> C0 </div>
                    <div className="px9"> R0</div>
                </div>
                <div className={`pixel ${snakeArr.includes(10) ? 'black' : ''} ${food== 10 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 10 </div>
                    <div className="px8"> C1 </div>
                    <div className="px9"> R0</div>
                </div>
                <div className={`pixel ${snakeArr.includes(20) ? 'black' : ''} ${food== 20 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 20 </div>
                    <div className="px8"> C2 </div>
                    <div className="px9"> R0</div>
                </div>
                <div className={`pixel ${snakeArr.includes(30) ? 'black' : ''} ${food== 30 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 30 </div>
                    <div className="px8"> C3 </div>
                    <div className="px9"> R0</div>
                </div>
                <div className={`pixel ${snakeArr.includes(40) ? 'black' : ''} ${food== 40 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 40 </div>
                    <div className="px8"> C4 </div>
                    <div className="px9"> R0</div>
                </div>
                <div className={`pixel ${snakeArr.includes(50) ? 'black' : ''} ${food== 50 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 50 </div>
                    <div className="px8"> C5 </div>
                    <div className="px9"> R0</div>
                </div>
                <div className={`pixel ${snakeArr.includes(60) ? 'black' : ''} ${food== 60 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 60 </div>
                    <div className="px8"> C6 </div>
                    <div className="px9"> R0</div>
                </div>
                <div className={`pixel ${snakeArr.includes(70) ? 'black' : ''} ${food== 70 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 70 </div>
                    <div className="px8"> C7 </div>
                    <div className="px9"> R0</div>
                </div>
                <div className={`pixel ${snakeArr.includes(80) ? 'black' : ''} ${food== 80 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 80 </div>
                    <div className="px8"> C8 </div>
                    <div className="px9"> R0</div>
                </div>
                <div className={`pixel ${snakeArr.includes(90) ? 'black' : ''} ${food== 90 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 90 </div>
                    <div className="px8"> C9 </div>
                    <div className="px9"> R0</div>
                </div>
                <div className={`pixel ${snakeArr.includes(100) ? 'black' : ''} ${food== 100 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 100 </div>
                    <div className="px8"> C10 </div>
                    <div className="px9"> R0</div>
                </div>
                <div className={`pixel ${snakeArr.includes(110) ? 'black' : ''} ${food== 110 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 110 </div>
                    <div className="px8"> C11 </div>
                    <div className="px9"> R0</div>
                </div>
                <div className={`pixel ${snakeArr.includes(120) ? 'black' : ''} ${food== 120 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 120 </div>
                    <div className="px8"> C12 </div>
                    <div className="px9"> R0</div>
                </div>
                <div className={`pixel ${snakeArr.includes(130) ? 'black' : ''} ${food== 130 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 130 </div>
                    <div className="px8"> C13 </div>
                    <div className="px9"> R0</div>
                </div>
                <div className={`pixel ${snakeArr.includes(140) ? 'black' : ''} ${food== 140 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 140 </div>
                    <div className="px8"> C14 </div>
                    <div className="px9"> R0</div>
                </div>
                <div className={`pixel ${snakeArr.includes(150) ? 'black' : ''} ${food== 150 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 150 </div>
                    <div className="px8"> C15 </div>
                    <div className="px9"> R0</div>
                </div>
                <div className={`pixel ${snakeArr.includes(160) ? 'black' : ''} ${food== 160 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 160 </div>
                    <div className="px8"> C16 </div>
                    <div className="px9"> R0</div>
                </div>
                <div className={`pixel ${snakeArr.includes(170) ? 'black' : ''} ${food== 170 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 170 </div>
                    <div className="px8"> C17 </div>
                    <div className="px9"> R0</div>
                </div>
                <div className={`pixel ${snakeArr.includes(180) ? 'black' : ''} ${food== 180 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 180 </div>
                    <div className="px8"> C18 </div>
                    <div className="px9"> R0</div>
                </div>
                <div className={`pixel ${snakeArr.includes(190) ? 'black' : ''} ${food== 190 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 190 </div>
                    <div className="px8"> C19 </div>
                    <div className="px9"> R0</div>
                </div>
                <div className={`pixel ${snakeArr.includes(1) ? 'black' : ''} ${food== 1 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 01 </div>
                    <div className="px8"> C0 </div>
                    <div className="px9"> R1</div>
                </div>
                <div className={`pixel ${snakeArr.includes(11) ? 'black' : ''} ${food== 11 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 11 </div>
                    <div className="px8"> C1 </div>
                    <div className="px9"> R1</div>
                </div>
                <div className={`pixel ${snakeArr.includes(21) ? 'black' : ''} ${food== 21 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 21 </div>
                    <div className="px8"> C2 </div>
                    <div className="px9"> R1</div>
                </div>
                <div className={`pixel ${snakeArr.includes(31) ? 'black' : ''} ${food== 31 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 31 </div>
                    <div className="px8"> C3 </div>
                    <div className="px9"> R1</div>
                </div>
                <div className={`pixel ${snakeArr.includes(41) ? 'black' : ''} ${food== 41 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 41 </div>
                    <div className="px8"> C4 </div>
                    <div className="px9"> R1</div>
                </div>
                <div className={`pixel ${snakeArr.includes(51) ? 'black' : ''} ${food== 51 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 51 </div>
                    <div className="px8"> C5 </div>
                    <div className="px9"> R1</div>
                </div>
                <div className={`pixel ${snakeArr.includes(61) ? 'black' : ''} ${food== 61 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 61 </div>
                    <div className="px8"> C6 </div>
                    <div className="px9"> R1</div>
                </div>
                <div className={`pixel ${snakeArr.includes(71) ? 'black' : ''} ${food== 71 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 71 </div>
                    <div className="px8"> C7 </div>
                    <div className="px9"> R1</div>
                </div>
                <div className={`pixel ${snakeArr.includes(81) ? 'black' : ''} ${food== 81 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 81 </div>
                    <div className="px8"> C8 </div>
                    <div className="px9"> R1</div>
                </div>
                <div className={`pixel ${snakeArr.includes(91) ? 'black' : ''} ${food== 91 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 91 </div>
                    <div className="px8"> C9 </div>
                    <div className="px9"> R1</div>
                </div>
                <div className={`pixel ${snakeArr.includes(101) ? 'black' : ''} ${food== 101 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 101 </div>
                    <div className="px8"> C10 </div>
                    <div className="px9"> R1</div>
                </div>
                <div className={`pixel ${snakeArr.includes(111) ? 'black' : ''} ${food== 111 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 111 </div>
                    <div className="px8"> C11 </div>
                    <div className="px9"> R1</div>
                </div>
                <div className={`pixel ${snakeArr.includes(121) ? 'black' : ''} ${food== 121 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 121 </div>
                    <div className="px8"> C12 </div>
                    <div className="px9"> R1</div>
                </div>
                <div className={`pixel ${snakeArr.includes(131) ? 'black' : ''} ${food== 131 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 131 </div>
                    <div className="px8"> C13 </div>
                    <div className="px9"> R1</div>
                </div>
                <div className={`pixel ${snakeArr.includes(141) ? 'black' : ''} ${food== 141 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 141 </div>
                    <div className="px8"> C14 </div>
                    <div className="px9"> R1</div>
                </div>
                <div className={`pixel ${snakeArr.includes(151) ? 'black' : ''} ${food== 151 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 151 </div>
                    <div className="px8"> C15 </div>
                    <div className="px9"> R1</div>
                </div>
                <div className={`pixel ${snakeArr.includes(161) ? 'black' : ''} ${food== 161 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 161 </div>
                    <div className="px8"> C16 </div>
                    <div className="px9"> R1</div>
                </div>
                <div className={`pixel ${snakeArr.includes(171) ? 'black' : ''} ${food== 171 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 171 </div>
                    <div className="px8"> C17 </div>
                    <div className="px9"> R1</div>
                </div>
                <div className={`pixel ${snakeArr.includes(181) ? 'black' : ''} ${food== 181 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 181 </div>
                    <div className="px8"> C18 </div>
                    <div className="px9"> R1</div>
                </div>
                <div className={`pixel ${snakeArr.includes(191) ? 'black' : ''} ${food== 191 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 191 </div>
                    <div className="px8"> C19 </div>
                    <div className="px9"> R1</div>
                </div>

                <div className={`pixel ${snakeArr.includes(2) ? 'black' : ''} ${food== 2 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 02 </div>
                    <div className="px8"> C0 </div>
                    <div className="px9"> R2</div>
                </div>
                <div className={`pixel ${snakeArr.includes(12) ? 'black' : ''} ${food== 12 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 12 </div>
                    <div className="px8"> C1 </div>
                    <div className="px9"> R2</div>
                </div>
                <div className={`pixel ${snakeArr.includes(22) ? 'black' : ''} ${food== 22 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 22 </div>
                    <div className="px8"> C2 </div>
                    <div className="px9"> R2</div>
                </div>
                <div className={`pixel ${snakeArr.includes(32) ? 'black' : ''} ${food== 32 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 32 </div>
                    <div className="px8"> C3 </div>
                    <div className="px9"> R2</div>
                </div>
                <div className={`pixel ${snakeArr.includes(42) ? 'black' : ''} ${food== 42 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 42 </div>
                    <div className="px8"> C4 </div>
                    <div className="px9"> R2</div>
                </div>
                <div className={`pixel ${snakeArr.includes(52) ? 'black' : ''} ${food== 52 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 52 </div>
                    <div className="px8"> C5 </div>
                    <div className="px9"> R2</div>
                </div>
                <div className={`pixel ${snakeArr.includes(62) ? 'black' : ''} ${food== 62 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 62 </div>
                    <div className="px8"> C6 </div>
                    <div className="px9"> R2</div>
                </div>
                <div className={`pixel ${snakeArr.includes(72) ? 'black' : ''} ${food== 72 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 72 </div>
                    <div className="px8"> C7 </div>
                    <div className="px9"> R2</div>
                </div>
                <div className={`pixel ${snakeArr.includes(82) ? 'black' : ''} ${food== 82 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 82 </div>
                    <div className="px8"> C8 </div>
                    <div className="px9"> R2</div>
                </div>
                <div className={`pixel ${snakeArr.includes(92) ? 'black' : ''} ${food== 92 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 92 </div>
                    <div className="px8"> C9 </div>
                    <div className="px9"> R2</div>
                </div>
                <div className={`pixel ${snakeArr.includes(102) ? 'black' : ''} ${food== 102 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 102 </div>
                    <div className="px8"> C10 </div>
                    <div className="px9"> R2</div>
                </div>
                <div className={`pixel ${snakeArr.includes(112) ? 'black' : ''} ${food== 112 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 112 </div>
                    <div className="px8"> C11 </div>
                    <div className="px9"> R2</div>
                </div>
                <div className={`pixel ${snakeArr.includes(122) ? 'black' : ''} ${food== 122 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 122 </div>
                    <div className="px8"> C12 </div>
                    <div className="px9"> R2</div>
                </div>
                <div className={`pixel ${snakeArr.includes(132) ? 'black' : ''} ${food== 132 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 132 </div>
                    <div className="px8"> C13 </div>
                    <div className="px9"> R2</div>
                </div>
                <div className={`pixel ${snakeArr.includes(142) ? 'black' : ''} ${food== 142 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 142 </div>
                    <div className="px8"> C14 </div>
                    <div className="px9"> R2</div>
                </div>
                <div className={`pixel ${snakeArr.includes(152) ? 'black' : ''} ${food== 152 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 152 </div>
                    <div className="px8"> C15 </div>
                    <div className="px9"> R2</div>
                </div>
                <div className={`pixel ${snakeArr.includes(162) ? 'black' : ''} ${food== 162 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 162 </div>
                    <div className="px8"> C16 </div>
                    <div className="px9"> R2</div>
                </div>
                <div className={`pixel ${snakeArr.includes(172) ? 'black' : ''} ${food== 172 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 172 </div>
                    <div className="px8"> C17 </div>
                    <div className="px9"> R2</div>
                </div>
                <div className={`pixel ${snakeArr.includes(182) ? 'black' : ''} ${food== 182 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 182 </div>
                    <div className="px8"> C18 </div>
                    <div className="px9"> R2</div>
                </div>
                <div className={`pixel ${snakeArr.includes(192) ? 'black' : ''} ${food== 192 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 192 </div>
                    <div className="px8"> C19 </div>
                    <div className="px9"> R2</div>
                </div>
                <div className={`pixel ${snakeArr.includes(3) ? 'black' : ''} ${food== 3 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 03 </div>
                    <div className="px8"> C0 </div>
                    <div className="px9"> R3</div>
                </div>
                <div className={`pixel ${snakeArr.includes(13) ? 'black' : ''} ${food== 13 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 13 </div>
                    <div className="px8"> C1 </div>
                    <div className="px9"> R3</div>
                </div>
                <div className={`pixel ${snakeArr.includes(23) ? 'black' : ''} ${food== 23 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 23 </div>
                    <div className="px8"> C2 </div>
                    <div className="px9"> R3</div>
                </div>
                <div className={`pixel ${snakeArr.includes(33) ? 'black' : ''} ${food== 33 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 33 </div>
                    <div className="px8"> C3 </div>
                    <div className="px9"> R3</div>
                </div>
                <div className={`pixel ${snakeArr.includes(43) ? 'black' : ''} ${food== 43 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 43 </div>
                    <div className="px8"> C4 </div>
                    <div className="px9"> R3</div>
                </div>
                <div className={`pixel ${snakeArr.includes(53) ? 'black' : ''} ${food== 53 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 53 </div>
                    <div className="px8"> C5 </div>
                    <div className="px9"> R3</div>
                </div>
                <div className={`pixel ${snakeArr.includes(63) ? 'black' : ''} ${food== 63 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 63 </div>
                    <div className="px8"> C6 </div>
                    <div className="px9"> R3</div>
                </div>
                <div className={`pixel ${snakeArr.includes(73) ? 'black' : ''} ${food== 73 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 73 </div>
                    <div className="px8"> C7 </div>
                    <div className="px9"> R3</div>
                </div>
                <div className={`pixel ${snakeArr.includes(83) ? 'black' : ''} ${food== 83 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 83 </div>
                    <div className="px8"> C8 </div>
                    <div className="px9"> R3</div>
                </div>
                <div className={`pixel ${snakeArr.includes(93) ? 'black' : ''} ${food== 93 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 93 </div>
                    <div className="px8"> C9 </div>
                    <div className="px9"> R3</div>
                </div>
                <div className={`pixel ${snakeArr.includes(103) ? 'black' : ''} ${food== 103 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 103 </div>
                    <div className="px8"> C10 </div>
                    <div className="px9"> R3</div>
                </div>
                <div className={`pixel ${snakeArr.includes(113) ? 'black' : ''} ${food== 113 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 113 </div>
                    <div className="px8"> C11 </div>
                    <div className="px9"> R3</div>
                </div>
                <div className={`pixel ${snakeArr.includes(123) ? 'black' : ''} ${food== 123 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 123 </div>
                    <div className="px8"> C12 </div>
                    <div className="px9"> R3</div>
                </div>
                <div className={`pixel ${snakeArr.includes(133) ? 'black' : ''} ${food== 133 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 133 </div>
                    <div className="px8"> C13 </div>
                    <div className="px9"> R3</div>
                </div>
                <div className={`pixel ${snakeArr.includes(143) ? 'black' : ''} ${food== 143 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 143 </div>
                    <div className="px8"> C14 </div>
                    <div className="px9"> R3</div>
                </div>
                <div className={`pixel ${snakeArr.includes(153) ? 'black' : ''} ${food== 153 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 153 </div>
                    <div className="px8"> C15 </div>
                    <div className="px9"> R3</div>
                </div>
                <div className={`pixel ${snakeArr.includes(163) ? 'black' : ''} ${food== 163 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 163 </div>
                    <div className="px8"> C16 </div>
                    <div className="px9"> R3</div>
                </div>
                <div className={`pixel ${snakeArr.includes(173) ? 'black' : ''} ${food== 173 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 173 </div>
                    <div className="px8"> C17 </div>
                    <div className="px9"> R3</div>
                </div>
                <div className={`pixel ${snakeArr.includes(183) ? 'black' : ''} ${food== 183 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 183 </div>
                    <div className="px8"> C18 </div>
                    <div className="px9"> R3</div>
                </div>
                <div className={`pixel ${snakeArr.includes(193) ? 'black' : ''} ${food== 193 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 193 </div>
                    <div className="px8"> C19 </div>
                    <div className="px9"> R3</div>
                </div>
                <div className={`pixel ${snakeArr.includes(4) ? 'black' : ''} ${food== 4 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 04 </div>
                    <div className="px8"> C0 </div>
                    <div className="px9"> R4</div>
                </div>
                <div className={`pixel ${snakeArr.includes(14) ? 'black' : ''} ${food== 14 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 14 </div>
                    <div className="px8"> C1 </div>
                    <div className="px9"> R4</div>
                </div>
                <div className={`pixel ${snakeArr.includes(24) ? 'black' : ''} ${food== 24 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 24 </div>
                    <div className="px8"> C2 </div>
                    <div className="px9"> R4</div>
                </div>
                <div className={`pixel ${snakeArr.includes(34) ? 'black' : ''} ${food== 34 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 34 </div>
                    <div className="px8"> C3 </div>
                    <div className="px9"> R4</div>
                </div>
                <div className={`pixel ${snakeArr.includes(44) ? 'black' : ''} ${food== 44 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 44 </div>
                    <div className="px8"> C4 </div>
                    <div className="px9"> R4</div>
                </div>
                <div className={`pixel ${snakeArr.includes(54) ? 'black' : ''} ${food== 54 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 54 </div>
                    <div className="px8"> C5 </div>
                    <div className="px9"> R4</div>
                </div>
                <div className={`pixel ${snakeArr.includes(64) ? 'black' : ''} ${food== 64 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 64 </div>
                    <div className="px8"> C6 </div>
                    <div className="px9"> R4</div>
                </div>
                <div className={`pixel ${snakeArr.includes(74) ? 'black' : ''} ${food== 74 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 74 </div>
                    <div className="px8"> C7 </div>
                    <div className="px9"> R4</div>
                </div>
                <div className={`pixel ${snakeArr.includes(84) ? 'black' : ''} ${food== 84 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 84 </div>
                    <div className="px8"> C8 </div>
                    <div className="px9"> R4</div>
                </div>
                <div className={`pixel ${snakeArr.includes(94) ? 'black' : ''} ${food== 94 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 94 </div>
                    <div className="px8"> C9 </div>
                    <div className="px9"> R4</div>
                </div>
                <div className={`pixel ${snakeArr.includes(104) ? 'black' : ''} ${food== 104 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 104 </div>
                    <div className="px8"> C10 </div>
                    <div className="px9"> R4</div>
                </div>
                <div className={`pixel ${snakeArr.includes(114) ? 'black' : ''} ${food== 114 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 114 </div>
                    <div className="px8"> C11 </div>
                    <div className="px9"> R4</div>
                </div>
                <div className={`pixel ${snakeArr.includes(124) ? 'black' : ''} ${food== 124 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 124 </div>
                    <div className="px8"> C12 </div>
                    <div className="px9"> R4</div>
                </div>
                <div className={`pixel ${snakeArr.includes(134) ? 'black' : ''} ${food== 134 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 134 </div>
                    <div className="px8"> C13 </div>
                    <div className="px9"> R4</div>
                </div>
                <div className={`pixel ${snakeArr.includes(144) ? 'black' : ''} ${food== 144 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 144 </div>
                    <div className="px8"> C14 </div>
                    <div className="px9"> R4</div>
                </div>
                <div className={`pixel ${snakeArr.includes(154) ? 'black' : ''} ${food== 154 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 154 </div>
                    <div className="px8"> C15 </div>
                    <div className="px9"> R4</div>
                </div>
                <div className={`pixel ${snakeArr.includes(164) ? 'black' : ''} ${food== 164 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 164 </div>
                    <div className="px8"> C16 </div>
                    <div className="px9"> R4</div>
                </div>
                <div className={`pixel ${snakeArr.includes(174) ? 'black' : ''} ${food== 174 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 174 </div>
                    <div className="px8"> C17 </div>
                    <div className="px9"> R4</div>
                </div>
                <div className={`pixel ${snakeArr.includes(184) ? 'black' : ''} ${food== 184 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 184 </div>
                    <div className="px8"> C18 </div>
                    <div className="px9"> R4</div>
                </div>
                <div className={`pixel ${snakeArr.includes(194) ? 'black' : ''} ${food== 194 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 194 </div>
                    <div className="px8"> C19 </div>
                    <div className="px9"> R4</div>
                </div>
                <div className={`pixel ${snakeArr.includes(5) ? 'black' : ''} ${food== 5 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 05 </div>
                    <div className="px8"> C0 </div>
                    <div className="px9"> R5</div>
                </div>
                <div className={`pixel ${snakeArr.includes(15) ? 'black' : ''} ${food== 15 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 15 </div>
                    <div className="px8"> C1 </div>
                    <div className="px9"> R5</div>
                </div>
                <div className={`pixel ${snakeArr.includes(25) ? 'black' : ''} ${food== 25 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 25 </div>
                    <div className="px8"> C2 </div>
                    <div className="px9"> R5</div>
                </div>
                <div className={`pixel ${snakeArr.includes(35) ? 'black' : ''} ${food== 35 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 35 </div>
                    <div className="px8"> C3 </div>
                    <div className="px9"> R5</div>
                </div>
                <div className={`pixel ${snakeArr.includes(45) ? 'black' : ''} ${food== 45 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 45 </div>
                    <div className="px8"> C4 </div>
                    <div className="px9"> R5</div>
                </div>
                <div className={`pixel ${snakeArr.includes(55) ? 'black' : ''} ${food== 55 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 55 </div>
                    <div className="px8"> C5 </div>
                    <div className="px9"> R5</div>
                </div>
                <div className={`pixel ${snakeArr.includes(65) ? 'black' : ''} ${food== 65 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 65 </div>
                    <div className="px8"> C6 </div>
                    <div className="px9"> R5</div>
                </div>
                <div className={`pixel ${snakeArr.includes(75) ? 'black' : ''} ${food== 75 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 75 </div>
                    <div className="px8"> C7 </div>
                    <div className="px9"> R5</div>
                </div>
                <div className={`pixel ${snakeArr.includes(85) ? 'black' : ''} ${food== 85 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 85 </div>
                    <div className="px8"> C8 </div>
                    <div className="px9"> R5</div>
                </div>
                <div className={`pixel ${snakeArr.includes(95) ? 'black' : ''} ${food== 95 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 95 </div>
                    <div className="px8"> C9 </div>
                    <div className="px9"> R5</div>
                </div>
                <div className={`pixel ${snakeArr.includes(105) ? 'black' : ''} ${food== 105 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 105 </div>
                    <div className="px8"> C10 </div>
                    <div className="px9"> R5</div>
                </div>
                <div className={`pixel ${snakeArr.includes(115) ? 'black' : ''} ${food== 115 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 115 </div>
                    <div className="px8"> C11 </div>
                    <div className="px9"> R5</div>
                </div>
                <div className={`pixel ${snakeArr.includes(125) ? 'black' : ''} ${food== 125 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 125 </div>
                    <div className="px8"> C12 </div>
                    <div className="px9"> R5</div>
                </div>
                <div className={`pixel ${snakeArr.includes(135) ? 'black' : ''} ${food== 135 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 135 </div>
                    <div className="px8"> C13 </div>
                    <div className="px9"> R5</div>
                </div>
                <div className={`pixel ${snakeArr.includes(145) ? 'black' : ''} ${food== 145 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 145 </div>
                    <div className="px8"> C14 </div>
                    <div className="px9"> R5</div>
                </div>
                <div className={`pixel ${snakeArr.includes(155) ? 'black' : ''} ${food== 155 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 155 </div>
                    <div className="px8"> C15 </div>
                    <div className="px9"> R5</div>
                </div>
                <div className={`pixel ${snakeArr.includes(165) ? 'black' : ''} ${food== 165 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 165 </div>
                    <div className="px8"> C16 </div>
                    <div className="px9"> R5</div>
                </div>
                <div className={`pixel ${snakeArr.includes(175) ? 'black' : ''} ${food== 175 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 175 </div>
                    <div className="px8"> C17 </div>
                    <div className="px9"> R5</div>
                </div>
                <div className={`pixel ${snakeArr.includes(185) ? 'black' : ''} ${food== 185 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 185 </div>
                    <div className="px8"> C18 </div>
                    <div className="px9"> R5</div>
                </div>
                <div className={`pixel ${snakeArr.includes(195) ? 'black' : ''} ${food== 195 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 195 </div>
                    <div className="px8"> C19 </div>
                    <div className="px9"> R5</div>
                </div>
                <div className={`pixel ${snakeArr.includes(6) ? 'black' : ''} ${food== 6 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 06 </div>
                    <div className="px8"> C0 </div>
                    <div className="px9"> R6</div>
                </div>
                <div className={`pixel ${snakeArr.includes(16) ? 'black' : ''} ${food== 16 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 16 </div>
                    <div className="px8"> C1 </div>
                    <div className="px9"> R6</div>
                </div>
                <div className={`pixel ${snakeArr.includes(26) ? 'black' : ''} ${food== 26 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 26 </div>
                    <div className="px8"> C2 </div>
                    <div className="px9"> R6</div>
                </div>
                <div className={`pixel ${snakeArr.includes(36) ? 'black' : ''} ${food== 36 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 36 </div>
                    <div className="px8"> C3 </div>
                    <div className="px9"> R6</div>
                </div>
                <div className={`pixel ${snakeArr.includes(46) ? 'black' : ''} ${food== 46 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 46 </div>
                    <div className="px8"> C4 </div>
                    <div className="px9"> R6</div>
                </div>
                <div className={`pixel ${snakeArr.includes(56) ? 'black' : ''} ${food== 56 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 56 </div>
                    <div className="px8"> C5 </div>
                    <div className="px9"> R6</div>
                </div>
                <div className={`pixel ${snakeArr.includes(66) ? 'black' : ''} ${food== 66 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 66 </div>
                    <div className="px8"> C6 </div>
                    <div className="px9"> R6</div>
                </div>
                <div className={`pixel ${snakeArr.includes(76) ? 'black' : ''} ${food== 76 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 76 </div>
                    <div className="px8"> C7 </div>
                    <div className="px9"> R6</div>
                </div>
                <div className={`pixel ${snakeArr.includes(86) ? 'black' : ''} ${food== 86 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 86 </div>
                    <div className="px8"> C8 </div>
                    <div className="px9"> R6</div>
                </div>
                <div className={`pixel ${snakeArr.includes(96) ? 'black' : ''} ${food== 96 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 96 </div>
                    <div className="px8"> C9 </div>
                    <div className="px9"> R6</div>
                </div>
                <div className={`pixel ${snakeArr.includes(106) ? 'black' : ''} ${food== 106 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 106 </div>
                    <div className="px8"> C10 </div>
                    <div className="px9"> R6</div>
                </div>
                <div className={`pixel ${snakeArr.includes(116) ? 'black' : ''} ${food== 116 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 116 </div>
                    <div className="px8"> C11 </div>
                    <div className="px9"> R6</div>
                </div>
                <div className={`pixel ${snakeArr.includes(126) ? 'black' : ''} ${food== 126 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 126 </div>
                    <div className="px8"> C12 </div>
                    <div className="px9"> R6</div>
                </div>
                <div className={`pixel ${snakeArr.includes(136) ? 'black' : ''} ${food== 136 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 136 </div>
                    <div className="px8"> C13 </div>
                    <div className="px9"> R6</div>
                </div>
                <div className={`pixel ${snakeArr.includes(146) ? 'black' : ''} ${food== 146 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 146 </div>
                    <div className="px8"> C14 </div>
                    <div className="px9"> R6</div>
                </div>
                <div className={`pixel ${snakeArr.includes(156) ? 'black' : ''} ${food== 156 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 156 </div>
                    <div className="px8"> C15 </div>
                    <div className="px9"> R6</div>
                </div>
                <div className={`pixel ${snakeArr.includes(166) ? 'black' : ''} ${food== 166 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 166 </div>
                    <div className="px8"> C16 </div>
                    <div className="px9"> R6</div>
                </div>
                <div className={`pixel ${snakeArr.includes(176) ? 'black' : ''} ${food== 176 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 176 </div>
                    <div className="px8"> C17 </div>
                    <div className="px9"> R6</div>
                </div>
                <div className={`pixel ${snakeArr.includes(186) ? 'black' : ''} ${food== 186 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 186 </div>
                    <div className="px8"> C18 </div>
                    <div className="px9"> R6</div>
                </div>
                <div className={`pixel ${snakeArr.includes(196) ? 'black' : ''} ${food== 196 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 196 </div>
                    <div className="px8"> C19 </div>
                    <div className="px9"> R6</div>
                </div>
                <div className={`pixel ${snakeArr.includes(7) ? 'black' : ''} ${food== 7 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 07 </div>
                    <div className="px8"> C0 </div>
                    <div className="px9"> R7</div>
                </div>
                <div className={`pixel ${snakeArr.includes(17) ? 'black' : ''} ${food== 17 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 17 </div>
                    <div className="px8"> C1 </div>
                    <div className="px9"> R7</div>
                </div>
                <div className={`pixel ${snakeArr.includes(27) ? 'black' : ''} ${food== 27 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 27 </div>
                    <div className="px8"> C2 </div>
                    <div className="px9"> R7</div>
                </div>
                <div className={`pixel ${snakeArr.includes(37) ? 'black' : ''} ${food== 37 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 37 </div>
                    <div className="px8"> C3 </div>
                    <div className="px9"> R7</div>
                </div>
                <div className={`pixel ${snakeArr.includes(47) ? 'black' : ''} ${food== 47 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 47 </div>
                    <div className="px8"> C4 </div>
                    <div className="px9"> R7</div>
                </div>
                <div className={`pixel ${snakeArr.includes(57) ? 'black' : ''} ${food== 57 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 57 </div>
                    <div className="px8"> C5 </div>
                    <div className="px9"> R7</div>
                </div>
                <div className={`pixel ${snakeArr.includes(67) ? 'black' : ''} ${food== 67 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 67 </div>
                    <div className="px8"> C6 </div>
                    <div className="px9"> R7</div>
                </div>
                <div className={`pixel ${snakeArr.includes(77) ? 'black' : ''} ${food== 77 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 77 </div>
                    <div className="px8"> C7 </div>
                    <div className="px9"> R7</div>
                </div>
                <div className={`pixel ${snakeArr.includes(87) ? 'black' : ''} ${food== 87 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 87 </div>
                    <div className="px8"> C8 </div>
                    <div className="px9"> R7</div>
                </div>
                <div className={`pixel ${snakeArr.includes(97) ? 'black' : ''} ${food== 97 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 97 </div>
                    <div className="px8"> C9 </div>
                    <div className="px9"> R7</div>
                </div>
                <div className={`pixel ${snakeArr.includes(107) ? 'black' : ''} ${food== 107 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 107 </div>
                    <div className="px8"> C10 </div>
                    <div className="px9"> R7</div>
                </div>
                <div className={`pixel ${snakeArr.includes(117) ? 'black' : ''} ${food== 117 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 117 </div>
                    <div className="px8"> C11 </div>
                    <div className="px9"> R7</div>
                </div>
                <div className={`pixel ${snakeArr.includes(127) ? 'black' : ''} ${food== 127 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 127 </div>
                    <div className="px8"> C12 </div>
                    <div className="px9"> R7</div>
                </div>
                <div className={`pixel ${snakeArr.includes(137) ? 'black' : ''} ${food== 137 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 137 </div>
                    <div className="px8"> C13 </div>
                    <div className="px9"> R7</div>
                </div>
                <div className={`pixel ${snakeArr.includes(147) ? 'black' : ''} ${food== 147 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 147 </div>
                    <div className="px8"> C14 </div>
                    <div className="px9"> R7</div>
                </div>
                <div className={`pixel ${snakeArr.includes(157) ? 'black' : ''} ${food== 157 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 157 </div>
                    <div className="px8"> C15 </div>
                    <div className="px9"> R7</div>
                </div>
                <div className={`pixel ${snakeArr.includes(167) ? 'black' : ''} ${food== 167 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 167 </div>
                    <div className="px8"> C16 </div>
                    <div className="px9"> R7</div>
                </div>
                <div className={`pixel ${snakeArr.includes(177) ? 'black' : ''} ${food== 177 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 177 </div>
                    <div className="px8"> C17 </div>
                    <div className="px9"> R7</div>
                </div>
                <div className={`pixel ${snakeArr.includes(187) ? 'black' : ''} ${food== 187 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 187 </div>
                    <div className="px8"> C18 </div>
                    <div className="px9"> R7</div>
                </div>
                <div className={`pixel ${snakeArr.includes(197) ? 'black' : ''} ${food== 197 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 197 </div>
                    <div className="px8"> C19 </div>
                    <div className="px9"> R7</div>
                </div>
                <div className={`pixel ${snakeArr.includes(8) ? 'black' : ''} ${food== 8 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 08 </div>
                    <div className="px8"> C0 </div>
                    <div className="px9"> R8</div>
                </div>
                <div className={`pixel ${snakeArr.includes(18) ? 'black' : ''} ${food== 18 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 18 </div>
                    <div className="px8"> C1 </div>
                    <div className="px9"> R8</div>
                </div>
                <div className={`pixel ${snakeArr.includes(28) ? 'black' : ''} ${food== 28 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 28 </div>
                    <div className="px8"> C2 </div>
                    <div className="px9"> R8</div>
                </div>
                <div className={`pixel ${snakeArr.includes(38) ? 'black' : ''} ${food== 38 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 38 </div>
                    <div className="px8"> C3 </div>
                    <div className="px9"> R8</div>
                </div>
                <div className={`pixel ${snakeArr.includes(48) ? 'black' : ''} ${food== 48 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 48 </div>
                    <div className="px8"> C4 </div>
                    <div className="px9"> R8</div>
                </div>
                <div className={`pixel ${snakeArr.includes(58) ? 'black' : ''} ${food== 58 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 58 </div>
                    <div className="px8"> C5 </div>
                    <div className="px9"> R8</div>
                </div>
                <div className={`pixel ${snakeArr.includes(68) ? 'black' : ''} ${food== 68 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 68 </div>
                    <div className="px8"> C6 </div>
                    <div className="px9"> R8</div>
                </div>
                <div className={`pixel ${snakeArr.includes(78) ? 'black' : ''} ${food== 78 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 78 </div>
                    <div className="px8"> C7 </div>
                    <div className="px9"> R8</div>
                </div>
                <div className={`pixel ${snakeArr.includes(88) ? 'black' : ''} ${food== 88 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 88 </div>
                    <div className="px8"> C8 </div>
                    <div className="px9"> R8</div>
                </div>
                <div className={`pixel ${snakeArr.includes(98) ? 'black' : ''} ${food== 98 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 98 </div>
                    <div className="px8"> C9 </div>
                    <div className="px9"> R8</div>
                </div>
                <div className={`pixel ${snakeArr.includes(108) ? 'black' : ''} ${food== 108 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 108 </div>
                    <div className="px8"> C10 </div>
                    <div className="px9"> R8</div>
                </div>
                <div className={`pixel ${snakeArr.includes(118) ? 'black' : ''} ${food== 118 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 118 </div>
                    <div className="px8"> C11 </div>
                    <div className="px9"> R8</div>
                </div>
                <div className={`pixel ${snakeArr.includes(128) ? 'black' : ''} ${food== 128 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 128 </div>
                    <div className="px8"> C12 </div>
                    <div className="px9"> R8</div>
                </div>
                <div className={`pixel ${snakeArr.includes(138) ? 'black' : ''} ${food== 138 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 138 </div>
                    <div className="px8"> C13 </div>
                    <div className="px9"> R8</div>
                </div>
                <div className={`pixel ${snakeArr.includes(148) ? 'black' : ''} ${food== 148 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 148 </div>
                    <div className="px8"> C14 </div>
                    <div className="px9"> R8</div>
                </div>
                <div className={`pixel ${snakeArr.includes(158) ? 'black' : ''} ${food== 158 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 158 </div>
                    <div className="px8"> C15 </div>
                    <div className="px9"> R8</div>
                </div>
                <div className={`pixel ${snakeArr.includes(168) ? 'black' : ''} ${food== 168 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 168 </div>
                    <div className="px8"> C16 </div>
                    <div className="px9"> R8</div>
                </div>
                <div className={`pixel ${snakeArr.includes(178) ? 'black' : ''} ${food== 178 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 178 </div>
                    <div className="px8"> C17 </div>
                    <div className="px9"> R8</div>
                </div>
                <div className={`pixel ${snakeArr.includes(188) ? 'black' : ''} ${food== 188 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 188 </div>
                    <div className="px8"> C18 </div>
                    <div className="px9"> R8</div>
                </div>
                <div className={`pixel ${snakeArr.includes(198) ? 'black' : ''} ${food== 198 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 198 </div>
                    <div className="px8"> C19 </div>
                    <div className="px9"> R8</div>
                </div>
                <div className={`pixel ${snakeArr.includes(9) ? 'black' : ''} ${food== 9 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 09 </div>
                    <div className="px8"> C0 </div>
                    <div className="px9"> R9</div>
                </div>
                <div className={`pixel ${snakeArr.includes(19) ? 'black' : ''} ${food== 19 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 19 </div>
                    <div className="px8"> C1 </div>
                    <div className="px9"> R9</div>
                </div>
                <div className={`pixel ${snakeArr.includes(29) ? 'black' : ''} ${food== 29 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 29 </div>
                    <div className="px8"> C2 </div>
                    <div className="px9"> R9</div>
                </div>
                <div className={`pixel ${snakeArr.includes(39) ? 'black' : ''} ${food== 39 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 39 </div>
                    <div className="px8"> C3 </div>
                    <div className="px9"> R9</div>
                </div>
                <div className={`pixel ${snakeArr.includes(49) ? 'black' : ''} ${food== 49 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 49 </div>
                    <div className="px8"> C4 </div>
                    <div className="px9"> R9</div>
                </div>
                <div className={`pixel ${snakeArr.includes(59) ? 'black' : ''} ${food== 59 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 59 </div>
                    <div className="px8"> C5 </div>
                    <div className="px9"> R9</div>
                </div>
                <div className={`pixel ${snakeArr.includes(69) ? 'black' : ''} ${food== 69 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 69 </div>
                    <div className="px8"> C6 </div>
                    <div className="px9"> R9</div>
                </div>
                <div className={`pixel ${snakeArr.includes(79) ? 'black' : ''} ${food== 79 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 79 </div>
                    <div className="px8"> C7 </div>
                    <div className="px9"> R9</div>
                </div>
                <div className={`pixel ${snakeArr.includes(89) ? 'black' : ''} ${food== 89 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 89 </div>
                    <div className="px8"> C8 </div>
                    <div className="px9"> R9</div>
                </div>
                <div className={`pixel ${snakeArr.includes(99) ? 'black' : ''} ${food== 99 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 99 </div>
                    <div className="px8"> C9 </div>
                    <div className="px9"> R9</div>
                </div>
                <div className={`pixel ${snakeArr.includes(109) ? 'black' : ''} ${food== 109 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 109 </div>
                    <div className="px8"> C10 </div>
                    <div className="px9"> R9</div>
                </div>
                <div className={`pixel ${snakeArr.includes(119) ? 'black' : ''} ${food== 119 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 119 </div>
                    <div className="px8"> C11 </div>
                    <div className="px9"> R9</div>
                </div>
                <div className={`pixel ${snakeArr.includes(129) ? 'black' : ''} ${food== 129 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 129 </div>
                    <div className="px8"> C12 </div>
                    <div className="px9"> R9</div>
                </div>
                <div className={`pixel ${snakeArr.includes(139) ? 'black' : ''} ${food== 139 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 139 </div>
                    <div className="px8"> C13 </div>
                    <div className="px9"> R9</div>
                </div>
                <div className={`pixel ${snakeArr.includes(149) ? 'black' : ''} ${food== 149 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 149 </div>
                    <div className="px8"> C14 </div>
                    <div className="px9"> R9</div>
                </div>
                <div className={`pixel ${snakeArr.includes(159) ? 'black' : ''} ${food== 159 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 159 </div>
                    <div className="px8"> C15 </div>
                    <div className="px9"> R9</div>
                </div>
                <div className={`pixel ${snakeArr.includes(169) ? 'black' : ''} ${food== 169 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 169 </div>
                    <div className="px8"> C16 </div>
                    <div className="px9"> R9</div>
                </div>
                <div className={`pixel ${snakeArr.includes(179) ? 'black' : ''} ${food== 179 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 179 </div>
                    <div className="px8"> C17 </div>
                    <div className="px9"> R9</div>
                </div>
                <div className={`pixel ${snakeArr.includes(189) ? 'black' : ''} ${food== 189 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 189 </div>
                    <div className="px8"> C18 </div>
                    <div className="px9"> R9</div>
                </div>
                <div className={`pixel ${snakeArr.includes(199) ? 'black' : ''} ${food== 199 ? 'food' : ''}`}>
                    <div className="px1"></div>
                    <div className="px2"></div>
                    <div className="px3"></div>
                    <div className="px4"></div>
                    <div className="px5"></div>
                    <div className="px6"></div>
                    <div className="px7"> 199 </div>
                    <div className="px8"> C19 </div>
                    <div className="px9"> R9</div>
                </div>
            </div>
        </>
    )
}