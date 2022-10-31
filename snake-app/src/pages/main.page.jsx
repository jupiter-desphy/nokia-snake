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
                <button onClick={moveRight}>Move Right</button>
                <button onClick={moveLeft}>Move Left</button>
                <button onClick={moveDown}>Move Down</button>
                <button onClick={moveUp}>Move Up</button>
            </div>

            <div className="screen">

                <div className={`pixel ${snakeArr.includes(0) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 00 </div><div> C0 </div><div> R0</div>
                </div>
                <div className={`pixel ${snakeArr.includes(10) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 10 </div><div> C1 </div><div> R0</div>
                </div>
                <div className={`pixel ${snakeArr.includes(20) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 20 </div><div> C2 </div><div> R0</div>
                </div>
                <div className={`pixel ${snakeArr.includes(30) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 30 </div><div> C3 </div><div> R0</div>
                </div>
                <div className={`pixel ${snakeArr.includes(40) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 40 </div><div> C4 </div><div> R0</div>
                </div>
                <div className={`pixel ${snakeArr.includes(50) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 50 </div><div> C5 </div><div> R0</div>
                </div>
                <div className={`pixel ${snakeArr.includes(60) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 60 </div><div> C6 </div><div> R0</div>
                </div>
                <div className={`pixel ${snakeArr.includes(70) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 70 </div><div> C7 </div><div> R0</div>
                </div>
                <div className={`pixel ${snakeArr.includes(80) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 80 </div><div> C8 </div><div> R0</div>
                </div>
                <div className={`pixel ${snakeArr.includes(90) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 90 </div><div> C9 </div><div> R0</div>
                </div>
                <div className={`pixel ${snakeArr.includes(100) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 100 </div><div> C10 </div><div> R0</div>
                </div>
                <div className={`pixel ${snakeArr.includes(110) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 110 </div><div> C11 </div><div> R0</div>
                </div>
                <div className={`pixel ${snakeArr.includes(120) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 120 </div><div> C12 </div><div> R0</div>
                </div>
                <div className={`pixel ${snakeArr.includes(130) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 130 </div><div> C13 </div><div> R0</div>
                </div>
                <div className={`pixel ${snakeArr.includes(140) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 140 </div><div> C14 </div><div> R0</div>
                </div>
                <div className={`pixel ${snakeArr.includes(150) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 150 </div><div> C15 </div><div> R0</div>
                </div>
                <div className={`pixel ${snakeArr.includes(160) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 160 </div><div> C16 </div><div> R0</div>
                </div>
                <div className={`pixel ${snakeArr.includes(170) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 170 </div><div> C17 </div><div> R0</div>
                </div>
                <div className={`pixel ${snakeArr.includes(180) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 180 </div><div> C18 </div><div> R0</div>
                </div>
                <div className={`pixel ${snakeArr.includes(190) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 190 </div><div> C19 </div><div> R0</div>
                </div>
                <div className={`pixel ${snakeArr.includes(1) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 01 </div><div> C0 </div><div> R1</div>
                </div>
                <div className={`pixel ${snakeArr.includes(11) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 11 </div><div> C1 </div><div> R1</div>
                </div>
                <div className={`pixel ${snakeArr.includes(21) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 21 </div><div> C2 </div><div> R1</div>
                </div>
                <div className={`pixel ${snakeArr.includes(31) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 31 </div><div> C3 </div><div> R1</div>
                </div>
                <div className={`pixel ${snakeArr.includes(41) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 41 </div><div> C4 </div><div> R1</div>
                </div>
                <div className={`pixel ${snakeArr.includes(51) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 51 </div><div> C5 </div><div> R1</div>
                </div>
                <div className={`pixel ${snakeArr.includes(61) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 61 </div><div> C6 </div><div> R1</div>
                </div>
                <div className={`pixel ${snakeArr.includes(71) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 71 </div><div> C7 </div><div> R1</div>
                </div>
                <div className={`pixel ${snakeArr.includes(81) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 81 </div><div> C8 </div><div> R1</div>
                </div>
                <div className={`pixel ${snakeArr.includes(91) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 91 </div><div> C9 </div><div> R1</div>
                </div>
                <div className={`pixel ${snakeArr.includes(101) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 101 </div><div> C10 </div><div> R1</div>
                </div>
                <div className={`pixel ${snakeArr.includes(111) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 111 </div><div> C11 </div><div> R1</div>
                </div>
                <div className={`pixel ${snakeArr.includes(121) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 121 </div><div> C12 </div><div> R1</div>
                </div>
                <div className={`pixel ${snakeArr.includes(131) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 131 </div><div> C13 </div><div> R1</div>
                </div>
                <div className={`pixel ${snakeArr.includes(141) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 141 </div><div> C14 </div><div> R1</div>
                </div>
                <div className={`pixel ${snakeArr.includes(151) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 151 </div><div> C15 </div><div> R1</div>
                </div>
                <div className={`pixel ${snakeArr.includes(161) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 161 </div><div> C16 </div><div> R1</div>
                </div>
                <div className={`pixel ${snakeArr.includes(171) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 171 </div><div> C17 </div><div> R1</div>
                </div>
                <div className={`pixel ${snakeArr.includes(181) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 181 </div><div> C18 </div><div> R1</div>
                </div>
                <div className={`pixel ${snakeArr.includes(191) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 191 </div><div> C19 </div><div> R1</div>
                </div>

                <div className={`pixel ${snakeArr.includes(2) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 02 </div><div> C0 </div><div> R2</div>
                </div>
                <div className={`pixel ${snakeArr.includes(12) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 12 </div><div> C1 </div><div> R2</div>
                </div>
                <div className={`pixel ${snakeArr.includes(22) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 22 </div><div> C2 </div><div> R2</div>
                </div>
                <div className={`pixel ${snakeArr.includes(32) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 32 </div><div> C3 </div><div> R2</div>
                </div>
                <div className={`pixel ${snakeArr.includes(42) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 42 </div><div> C4 </div><div> R2</div>
                </div>
                <div className={`pixel ${snakeArr.includes(52) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 52 </div><div> C5 </div><div> R2</div>
                </div>
                <div className={`pixel ${snakeArr.includes(62) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 62 </div><div> C6 </div><div> R2</div>
                </div>
                <div className={`pixel ${snakeArr.includes(72) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 72 </div><div> C7 </div><div> R2</div>
                </div>
                <div className={`pixel ${snakeArr.includes(82) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 82 </div><div> C8 </div><div> R2</div>
                </div>
                <div className={`pixel ${snakeArr.includes(92) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 92 </div><div> C9 </div><div> R2</div>
                </div>
                <div className={`pixel ${snakeArr.includes(102) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 102 </div><div> C10 </div><div> R2</div>
                </div>
                <div className={`pixel ${snakeArr.includes(112) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 112 </div><div> C11 </div><div> R2</div>
                </div>
                <div className={`pixel ${snakeArr.includes(122) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 122 </div><div> C12 </div><div> R2</div>
                </div>
                <div className={`pixel ${snakeArr.includes(132) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 132 </div><div> C13 </div><div> R2</div>
                </div>
                <div className={`pixel ${snakeArr.includes(142) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 142 </div><div> C14 </div><div> R2</div>
                </div>
                <div className={`pixel ${snakeArr.includes(152) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 152 </div><div> C15 </div><div> R2</div>
                </div>
                <div className={`pixel ${snakeArr.includes(162) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 162 </div><div> C16 </div><div> R2</div>
                </div>
                <div className={`pixel ${snakeArr.includes(172) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 172 </div><div> C17 </div><div> R2</div>
                </div>
                <div className={`pixel ${snakeArr.includes(182) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 182 </div><div> C18 </div><div> R2</div>
                </div>
                <div className={`pixel ${snakeArr.includes(192) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 192 </div><div> C19 </div><div> R2</div>
                </div>
                <div className={`pixel ${snakeArr.includes(3) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 03 </div><div> C0 </div><div> R3</div>
                </div>
                <div className={`pixel ${snakeArr.includes(13) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 13 </div><div> C1 </div><div> R3</div>
                </div>
                <div className={`pixel ${snakeArr.includes(23) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 23 </div><div> C2 </div><div> R3</div>
                </div>
                <div className={`pixel ${snakeArr.includes(33) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 33 </div><div> C3 </div><div> R3</div>
                </div>
                <div className={`pixel ${snakeArr.includes(43) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 43 </div><div> C4 </div><div> R3</div>
                </div>
                <div className={`pixel ${snakeArr.includes(53) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 53 </div><div> C5 </div><div> R3</div>
                </div>
                <div className={`pixel ${snakeArr.includes(63) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 63 </div><div> C6 </div><div> R3</div>
                </div>
                <div className={`pixel ${snakeArr.includes(73) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 73 </div><div> C7 </div><div> R3</div>
                </div>
                <div className={`pixel ${snakeArr.includes(83) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 83 </div><div> C8 </div><div> R3</div>
                </div>
                <div className={`pixel ${snakeArr.includes(93) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 93 </div><div> C9 </div><div> R3</div>
                </div>
                <div className={`pixel ${snakeArr.includes(103) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 103 </div><div> C10 </div><div> R3</div>
                </div>
                <div className={`pixel ${snakeArr.includes(113) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 113 </div><div> C11 </div><div> R3</div>
                </div>
                <div className={`pixel ${snakeArr.includes(123) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 123 </div><div> C12 </div><div> R3</div>
                </div>
                <div className={`pixel ${snakeArr.includes(133) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 133 </div><div> C13 </div><div> R3</div>
                </div>
                <div className={`pixel ${snakeArr.includes(143) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 143 </div><div> C14 </div><div> R3</div>
                </div>
                <div className={`pixel ${snakeArr.includes(153) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 153 </div><div> C15 </div><div> R3</div>
                </div>
                <div className={`pixel ${snakeArr.includes(163) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 163 </div><div> C16 </div><div> R3</div>
                </div>
                <div className={`pixel ${snakeArr.includes(173) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 173 </div><div> C17 </div><div> R3</div>
                </div>
                <div className={`pixel ${snakeArr.includes(183) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 183 </div><div> C18 </div><div> R3</div>
                </div>
                <div className={`pixel ${snakeArr.includes(193) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 193 </div><div> C19 </div><div> R3</div>
                </div>
                <div className={`pixel ${snakeArr.includes(4) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 04 </div><div> C0 </div><div> R4</div>
                </div>
                <div className={`pixel ${snakeArr.includes(14) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 14 </div><div> C1 </div><div> R4</div>
                </div>
                <div className={`pixel ${snakeArr.includes(24) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 24 </div><div> C2 </div><div> R4</div>
                </div>
                <div className={`pixel ${snakeArr.includes(34) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 34 </div><div> C3 </div><div> R4</div>
                </div>
                <div className={`pixel ${snakeArr.includes(44) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 44 </div><div> C4 </div><div> R4</div>
                </div>
                <div className={`pixel ${snakeArr.includes(54) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 54 </div><div> C5 </div><div> R4</div>
                </div>
                <div className={`pixel ${snakeArr.includes(64) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 64 </div><div> C6 </div><div> R4</div>
                </div>
                <div className={`pixel ${snakeArr.includes(74) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 74 </div><div> C7 </div><div> R4</div>
                </div>
                <div className={`pixel ${snakeArr.includes(84) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 84 </div><div> C8 </div><div> R4</div>
                </div>
                <div className={`pixel ${snakeArr.includes(94) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 94 </div><div> C9 </div><div> R4</div>
                </div>
                <div className={`pixel ${snakeArr.includes(104) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 104 </div><div> C10 </div><div> R4</div>
                </div>
                <div className={`pixel ${snakeArr.includes(114) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 114 </div><div> C11 </div><div> R4</div>
                </div>
                <div className={`pixel ${snakeArr.includes(124) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 124 </div><div> C12 </div><div> R4</div>
                </div>
                <div className={`pixel ${snakeArr.includes(134) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 134 </div><div> C13 </div><div> R4</div>
                </div>
                <div className={`pixel ${snakeArr.includes(144) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 144 </div><div> C14 </div><div> R4</div>
                </div>
                <div className={`pixel ${snakeArr.includes(154) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 154 </div><div> C15 </div><div> R4</div>
                </div>
                <div className={`pixel ${snakeArr.includes(164) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 164 </div><div> C16 </div><div> R4</div>
                </div>
                <div className={`pixel ${snakeArr.includes(174) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 174 </div><div> C17 </div><div> R4</div>
                </div>
                <div className={`pixel ${snakeArr.includes(184) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 184 </div><div> C18 </div><div> R4</div>
                </div>
                <div className={`pixel ${snakeArr.includes(194) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 194 </div><div> C19 </div><div> R4</div>
                </div>
                <div className={`pixel ${snakeArr.includes(5) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 05 </div><div> C0 </div><div> R5</div>
                </div>
                <div className={`pixel ${snakeArr.includes(15) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 15 </div><div> C1 </div><div> R5</div>
                </div>
                <div className={`pixel ${snakeArr.includes(25) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 25 </div><div> C2 </div><div> R5</div>
                </div>
                <div className={`pixel ${snakeArr.includes(35) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 35 </div><div> C3 </div><div> R5</div>
                </div>
                <div className={`pixel ${snakeArr.includes(45) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 45 </div><div> C4 </div><div> R5</div>
                </div>
                <div className={`pixel ${snakeArr.includes(55) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 55 </div><div> C5 </div><div> R5</div>
                </div>
                <div className={`pixel ${snakeArr.includes(65) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 65 </div><div> C6 </div><div> R5</div>
                </div>
                <div className={`pixel ${snakeArr.includes(75) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 75 </div><div> C7 </div><div> R5</div>
                </div>
                <div className={`pixel ${snakeArr.includes(85) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 85 </div><div> C8 </div><div> R5</div>
                </div>
                <div className={`pixel ${snakeArr.includes(95) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 95 </div><div> C9 </div><div> R5</div>
                </div>
                <div className={`pixel ${snakeArr.includes(105) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 105 </div><div> C10 </div><div> R5</div>
                </div>
                <div className={`pixel ${snakeArr.includes(115) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 115 </div><div> C11 </div><div> R5</div>
                </div>
                <div className={`pixel ${snakeArr.includes(125) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 125 </div><div> C12 </div><div> R5</div>
                </div>
                <div className={`pixel ${snakeArr.includes(135) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 135 </div><div> C13 </div><div> R5</div>
                </div>
                <div className={`pixel ${snakeArr.includes(145) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 145 </div><div> C14 </div><div> R5</div>
                </div>
                <div className={`pixel ${snakeArr.includes(155) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 155 </div><div> C15 </div><div> R5</div>
                </div>
                <div className={`pixel ${snakeArr.includes(165) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 165 </div><div> C16 </div><div> R5</div>
                </div>
                <div className={`pixel ${snakeArr.includes(175) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 175 </div><div> C17 </div><div> R5</div>
                </div>
                <div className={`pixel ${snakeArr.includes(185) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 185 </div><div> C18 </div><div> R5</div>
                </div>
                <div className={`pixel ${snakeArr.includes(195) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 195 </div><div> C19 </div><div> R5</div>
                </div>
                <div className={`pixel ${snakeArr.includes(6) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 06 </div><div> C0 </div><div> R6</div>
                </div>
                <div className={`pixel ${snakeArr.includes(16) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 16 </div><div> C1 </div><div> R6</div>
                </div>
                <div className={`pixel ${snakeArr.includes(26) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 26 </div><div> C2 </div><div> R6</div>
                </div>
                <div className={`pixel ${snakeArr.includes(36) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 36 </div><div> C3 </div><div> R6</div>
                </div>
                <div className={`pixel ${snakeArr.includes(46) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 46 </div><div> C4 </div><div> R6</div>
                </div>
                <div className={`pixel ${snakeArr.includes(56) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 56 </div><div> C5 </div><div> R6</div>
                </div>
                <div className={`pixel ${snakeArr.includes(66) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 66 </div><div> C6 </div><div> R6</div>
                </div>
                <div className={`pixel ${snakeArr.includes(76) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 76 </div><div> C7 </div><div> R6</div>
                </div>
                <div className={`pixel ${snakeArr.includes(86) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 86 </div><div> C8 </div><div> R6</div>
                </div>
                <div className={`pixel ${snakeArr.includes(96) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 96 </div><div> C9 </div><div> R6</div>
                </div>
                <div className={`pixel ${snakeArr.includes(106) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 106 </div><div> C10 </div><div> R6</div>
                </div>
                <div className={`pixel ${snakeArr.includes(116) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 116 </div><div> C11 </div><div> R6</div>
                </div>
                <div className={`pixel ${snakeArr.includes(126) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 126 </div><div> C12 </div><div> R6</div>
                </div>
                <div className={`pixel ${snakeArr.includes(136) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 136 </div><div> C13 </div><div> R6</div>
                </div>
                <div className={`pixel ${snakeArr.includes(146) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 146 </div><div> C14 </div><div> R6</div>
                </div>
                <div className={`pixel ${snakeArr.includes(156) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 156 </div><div> C15 </div><div> R6</div>
                </div>
                <div className={`pixel ${snakeArr.includes(166) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 166 </div><div> C16 </div><div> R6</div>
                </div>
                <div className={`pixel ${snakeArr.includes(176) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 176 </div><div> C17 </div><div> R6</div>
                </div>
                <div className={`pixel ${snakeArr.includes(186) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 186 </div><div> C18 </div><div> R6</div>
                </div>
                <div className={`pixel ${snakeArr.includes(196) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 196 </div><div> C19 </div><div> R6</div>
                </div>
                <div className={`pixel ${snakeArr.includes(7) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 07 </div><div> C0 </div><div> R7</div>
                </div>
                <div className={`pixel ${snakeArr.includes(17) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 17 </div><div> C1 </div><div> R7</div>
                </div>
                <div className={`pixel ${snakeArr.includes(27) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 27 </div><div> C2 </div><div> R7</div>
                </div>
                <div className={`pixel ${snakeArr.includes(37) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 37 </div><div> C3 </div><div> R7</div>
                </div>
                <div className={`pixel ${snakeArr.includes(47) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 47 </div><div> C4 </div><div> R7</div>
                </div>
                <div className={`pixel ${snakeArr.includes(57) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 57 </div><div> C5 </div><div> R7</div>
                </div>
                <div className={`pixel ${snakeArr.includes(67) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 67 </div><div> C6 </div><div> R7</div>
                </div>
                <div className={`pixel ${snakeArr.includes(77) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 77 </div><div> C7 </div><div> R7</div>
                </div>
                <div className={`pixel ${snakeArr.includes(87) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 87 </div><div> C8 </div><div> R7</div>
                </div>
                <div className={`pixel ${snakeArr.includes(97) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 97 </div><div> C9 </div><div> R7</div>
                </div>
                <div className={`pixel ${snakeArr.includes(107) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 107 </div><div> C10 </div><div> R7</div>
                </div>
                <div className={`pixel ${snakeArr.includes(117) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 117 </div><div> C11 </div><div> R7</div>
                </div>
                <div className={`pixel ${snakeArr.includes(127) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 127 </div><div> C12 </div><div> R7</div>
                </div>
                <div className={`pixel ${snakeArr.includes(137) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 137 </div><div> C13 </div><div> R7</div>
                </div>
                <div className={`pixel ${snakeArr.includes(147) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 147 </div><div> C14 </div><div> R7</div>
                </div>
                <div className={`pixel ${snakeArr.includes(157) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 157 </div><div> C15 </div><div> R7</div>
                </div>
                <div className={`pixel ${snakeArr.includes(167) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 167 </div><div> C16 </div><div> R7</div>
                </div>
                <div className={`pixel ${snakeArr.includes(177) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 177 </div><div> C17 </div><div> R7</div>
                </div>
                <div className={`pixel ${snakeArr.includes(187) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 187 </div><div> C18 </div><div> R7</div>
                </div>
                <div className={`pixel ${snakeArr.includes(197) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 197 </div><div> C19 </div><div> R7</div>
                </div>
                <div className={`pixel ${snakeArr.includes(8) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 08 </div><div> C0 </div><div> R8</div>
                </div>
                <div className={`pixel ${snakeArr.includes(18) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 18 </div><div> C1 </div><div> R8</div>
                </div>
                <div className={`pixel ${snakeArr.includes(28) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 28 </div><div> C2 </div><div> R8</div>
                </div>
                <div className={`pixel ${snakeArr.includes(38) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 38 </div><div> C3 </div><div> R8</div>
                </div>
                <div className={`pixel ${snakeArr.includes(48) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 48 </div><div> C4 </div><div> R8</div>
                </div>
                <div className={`pixel ${snakeArr.includes(58) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 58 </div><div> C5 </div><div> R8</div>
                </div>
                <div className={`pixel ${snakeArr.includes(68) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 68 </div><div> C6 </div><div> R8</div>
                </div>
                <div className={`pixel ${snakeArr.includes(78) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 78 </div><div> C7 </div><div> R8</div>
                </div>
                <div className={`pixel ${snakeArr.includes(88) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 88 </div><div> C8 </div><div> R8</div>
                </div>
                <div className={`pixel ${snakeArr.includes(98) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 98 </div><div> C9 </div><div> R8</div>
                </div>
                <div className={`pixel ${snakeArr.includes(108) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 108 </div><div> C10 </div><div> R8</div>
                </div>
                <div className={`pixel ${snakeArr.includes(118) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 118 </div><div> C11 </div><div> R8</div>
                </div>
                <div className={`pixel ${snakeArr.includes(128) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 128 </div><div> C12 </div><div> R8</div>
                </div>
                <div className={`pixel ${snakeArr.includes(138) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 138 </div><div> C13 </div><div> R8</div>
                </div>
                <div className={`pixel ${snakeArr.includes(148) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 148 </div><div> C14 </div><div> R8</div>
                </div>
                <div className={`pixel ${snakeArr.includes(158) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 158 </div><div> C15 </div><div> R8</div>
                </div>
                <div className={`pixel ${snakeArr.includes(168) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 168 </div><div> C16 </div><div> R8</div>
                </div>
                <div className={`pixel ${snakeArr.includes(178) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 178 </div><div> C17 </div><div> R8</div>
                </div>
                <div className={`pixel ${snakeArr.includes(188) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 188 </div><div> C18 </div><div> R8</div>
                </div>
                <div className={`pixel ${snakeArr.includes(198) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 198 </div><div> C19 </div><div> R8</div>
                </div>
                <div className={`pixel ${snakeArr.includes(9) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 09 </div><div> C0 </div><div> R9</div>
                </div>
                <div className={`pixel ${snakeArr.includes(19) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 19 </div><div> C1 </div><div> R9</div>
                </div>
                <div className={`pixel ${snakeArr.includes(29) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 29 </div><div> C2 </div><div> R9</div>
                </div>
                <div className={`pixel ${snakeArr.includes(39) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 39 </div><div> C3 </div><div> R9</div>
                </div>
                <div className={`pixel ${snakeArr.includes(49) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 49 </div><div> C4 </div><div> R9</div>
                </div>
                <div className={`pixel ${snakeArr.includes(59) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 59 </div><div> C5 </div><div> R9</div>
                </div>
                <div className={`pixel ${snakeArr.includes(69) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 69 </div><div> C6 </div><div> R9</div>
                </div>
                <div className={`pixel ${snakeArr.includes(79) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 79 </div><div> C7 </div><div> R9</div>
                </div>
                <div className={`pixel ${snakeArr.includes(89) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 89 </div><div> C8 </div><div> R9</div>
                </div>
                <div className={`pixel ${snakeArr.includes(99) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 99 </div><div> C9 </div><div> R9</div>
                </div>
                <div className={`pixel ${snakeArr.includes(109) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 109 </div><div> C10 </div><div> R9</div>
                </div>
                <div className={`pixel ${snakeArr.includes(119) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 119 </div><div> C11 </div><div> R9</div>
                </div>
                <div className={`pixel ${snakeArr.includes(129) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 129 </div><div> C12 </div><div> R9</div>
                </div>
                <div className={`pixel ${snakeArr.includes(139) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 139 </div><div> C13 </div><div> R9</div>
                </div>
                <div className={`pixel ${snakeArr.includes(149) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 149 </div><div> C14 </div><div> R9</div>
                </div>
                <div className={`pixel ${snakeArr.includes(159) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 159 </div><div> C15 </div><div> R9</div>
                </div>
                <div className={`pixel ${snakeArr.includes(169) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 169 </div><div> C16 </div><div> R9</div>
                </div>
                <div className={`pixel ${snakeArr.includes(179) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 179 </div><div> C17 </div><div> R9</div>
                </div>
                <div className={`pixel ${snakeArr.includes(189) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 189 </div><div> C18 </div><div> R9</div>
                </div>
                <div className={`pixel ${snakeArr.includes(199) ? 'black' : 'green'}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div> 199 </div><div> C19 </div><div> R9</div>
                </div>
            </div>
        </>
    )
}