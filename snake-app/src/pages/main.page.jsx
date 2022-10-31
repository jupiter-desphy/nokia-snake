import { useState } from "react";

export function MainPage(props) {
    const [snakeArr, setSnakeArr] = useState([64, 74, 84, 94, 104])
    const [snakeLength, setSnakeLength] = useState(5)

    function moveRight () {
        setSnakeArr (prevSnakeArr => {
           return [
            prevSnakeArr.slice(1),
            (Number([prevSnakeArr[prevSnakeArr.length-1]])+10)
            ].flat()
        })
    }

    function moveLeft () {
        setSnakeArr (prevSnakeArr => {
           return [
            prevSnakeArr.slice(1),
            (Number([prevSnakeArr[prevSnakeArr.length-1]])-10)
            ].flat()
        })
    }

    function moveUp () {
        setSnakeArr (prevSnakeArr => {
           return [
            prevSnakeArr.slice(1),
            (Number([prevSnakeArr[prevSnakeArr.length-1]])-1)
            ].flat()
        })
    }

    function moveDown () {
        setSnakeArr (prevSnakeArr => {
           return [
            prevSnakeArr.slice(1),
            ([prevSnakeArr[prevSnakeArr.length-1]]+1)
            ].flat()
        })
    }

    return (
        <>
            <div className="score">
                {snakeArr}
            </div>
            <button onClick={moveRight}>Move Right</button>
            <button onClick={moveLeft}>Move Left</button>
            <button onClick={moveDown}>Move Down</button>
            <button onClick={moveUp}>Move Up</button>
            <div className="screen">
                <div id="div0" className="pixel"> 00 <br></br> C0 <br></br> R0</div>
                <div id="div10" className="pixel"> 10 <br></br> C1 <br></br> R0</div>
                <div id="div20" className="pixel"> 20 <br></br> C2 <br></br> R0</div>
                <div id="div30" className="pixel"> 30 <br></br> C3 <br></br> R0</div>
                <div id="div40" className="pixel"> 40 <br></br> C4 <br></br> R0</div>
                <div id="div50" className="pixel"> 50 <br></br> C5 <br></br> R0</div>
                <div id="div60" className="pixel"> 60 <br></br> C6 <br></br> R0</div>
                <div id="div70" className="pixel"> 70 <br></br> C7 <br></br> R0</div>
                <div id="div80" className="pixel"> 80 <br></br> C8 <br></br> R0</div>
                <div id="div90" className="pixel"> 90 <br></br> C9 <br></br> R0</div>
                <div id="div100" className="pixel"> 100 <br></br> C10 <br></br> R0</div>
                <div id="div110" className="pixel"> 110 <br></br> C11 <br></br> R0</div>
                <div id="div120" className="pixel"> 120 <br></br> C12 <br></br> R0</div>
                <div id="div130" className="pixel"> 130 <br></br> C13 <br></br> R0</div>
                <div id="div140" className="pixel"> 140 <br></br> C14 <br></br> R0</div>
                <div id="div150" className="pixel"> 150 <br></br> C15 <br></br> R0</div>
                <div id="div160" className="pixel"> 160 <br></br> C16 <br></br> R0</div>
                <div id="div170" className="pixel"> 170 <br></br> C17 <br></br> R0</div>
                <div id="div180" className="pixel"> 180 <br></br> C18 <br></br> R0</div>
                <div id="div190" className="pixel"> 190 <br></br> C19 <br></br> R0</div>

                <div id="div1" className="pixel"> 01 <br></br> C0 <br></br> R1</div>
                <div id="div11" className="pixel"> 11 <br></br> C1 <br></br> R1</div>
                <div id="div21" className="pixel"> 21 <br></br> C2 <br></br> R1</div>
                <div id="div31" className="pixel"> 31 <br></br> C3 <br></br> R1</div>
                <div id="div41" className="pixel"> 41 <br></br> C4 <br></br> R1</div>
                <div id="div51" className="pixel"> 51 <br></br> C5 <br></br> R1</div>
                <div id="div61" className="pixel"> 61 <br></br> C6 <br></br> R1</div>
                <div id="div71" className="pixel"> 71 <br></br> C7 <br></br> R1</div>
                <div id="div81" className="pixel"> 81 <br></br> C8 <br></br> R1</div>
                <div id="div91" className="pixel"> 91 <br></br> C9 <br></br> R1</div>
                <div id="div101" className="pixel"> 101 <br></br> C10 <br></br> R1</div>
                <div id="div111" className="pixel"> 111 <br></br> C11 <br></br> R1</div>
                <div id="div121" className="pixel"> 121 <br></br> C12 <br></br> R1</div>
                <div id="div131" className="pixel"> 131 <br></br> C13 <br></br> R1</div>
                <div id="div141" className="pixel"> 141 <br></br> C14 <br></br> R1</div>
                <div id="div151" className="pixel"> 151 <br></br> C15 <br></br> R1</div>
                <div id="div161" className="pixel"> 161 <br></br> C16 <br></br> R1</div>
                <div id="div171" className="pixel"> 171 <br></br> C17 <br></br> R1</div>
                <div id="div181" className="pixel"> 181 <br></br> C18 <br></br> R1</div>
                <div id="div191" className="pixel"> 191 <br></br> C19 <br></br> R1</div>


                <div id="div2" className="pixel"> 02 <br></br> C0 <br></br> R2</div>
                <div id="div12" className="pixel"> 12 <br></br> C1 <br></br> R2</div>
                <div id="div22" className="pixel"> 22 <br></br> C2 <br></br> R2</div>
                <div id="div32" className="pixel"> 32 <br></br> C3 <br></br> R2</div>
                <div id="div42" className="pixel"> 42 <br></br> C4 <br></br> R2</div>
                <div id="div52" className="pixel"> 52 <br></br> C5 <br></br> R2</div>
                <div id="div62" className="pixel"> 62 <br></br> C6 <br></br> R2</div>
                <div id="div72" className="pixel"> 72 <br></br> C7 <br></br> R2</div>
                <div id="div82" className="pixel"> 82 <br></br> C8 <br></br> R2</div>
                <div id="div92" className="pixel"> 92 <br></br> C9 <br></br> R2</div>
                <div id="div102" className="pixel"> 102 <br></br> C10 <br></br> R2</div>
                <div id="div112" className="pixel"> 112 <br></br> C11 <br></br> R2</div>
                <div id="div122" className="pixel"> 122 <br></br> C12 <br></br> R2</div>
                <div id="div132" className="pixel"> 132 <br></br> C13 <br></br> R2</div>
                <div id="div142" className="pixel"> 142 <br></br> C14 <br></br> R2</div>
                <div id="div152" className="pixel"> 152 <br></br> C15 <br></br> R2</div>
                <div id="div162" className="pixel"> 162 <br></br> C16 <br></br> R2</div>
                <div id="div172" className="pixel"> 172 <br></br> C17 <br></br> R2</div>
                <div id="div182" className="pixel"> 182 <br></br> C18 <br></br> R2</div>
                <div id="div192" className="pixel"> 192 <br></br> C19 <br></br> R2</div>

                <div id="div3" className="pixel"> 03 <br></br> C0 <br></br> R3</div>
                <div id="div13" className="pixel"> 13 <br></br> C1 <br></br> R3</div>
                <div id="div23" className="pixel"> 23 <br></br> C2 <br></br> R3</div>
                <div id="div33" className="pixel"> 33 <br></br> C3 <br></br> R3</div>
                <div id="div43" className="pixel"> 43 <br></br> C4 <br></br> R3</div>
                <div id="div53" className="pixel"> 53 <br></br> C5 <br></br> R3</div>
                <div id="div63" className="pixel"> 63 <br></br> C6 <br></br> R3</div>
                <div id="div73" className="pixel"> 73 <br></br> C7 <br></br> R3</div>
                <div id="div83" className="pixel"> 83 <br></br> C8 <br></br> R3</div>
                <div id="div93" className="pixel"> 93 <br></br> C9 <br></br> R3</div>
                <div id="div103" className="pixel"> 103 <br></br> C10 <br></br> R3</div>
                <div id="div113" className="pixel"> 113 <br></br> C11 <br></br> R3</div>
                <div id="div123" className="pixel"> 123 <br></br> C12 <br></br> R3</div>
                <div id="div133" className="pixel"> 133 <br></br> C13 <br></br> R3</div>
                <div id="div143" className="pixel"> 143 <br></br> C14 <br></br> R3</div>
                <div id="div153" className="pixel"> 153 <br></br> C15 <br></br> R3</div>
                <div id="div163" className="pixel"> 163 <br></br> C16 <br></br> R3</div>
                <div id="div173" className="pixel"> 173 <br></br> C17 <br></br> R3</div>
                <div id="div183" className="pixel"> 183 <br></br> C18 <br></br> R3</div>
                <div id="div193" className="pixel"> 193 <br></br> C19 <br></br> R3</div>

                <div id="div4" className="pixel"> 04 <br></br> C0 <br></br> R4</div>
                <div id="div14" className="pixel"> 14 <br></br> C1 <br></br> R4</div>
                <div id="div24" className="pixel"> 24 <br></br> C2 <br></br> R4</div>
                <div id="div34" className="pixel"> 34 <br></br> C3 <br></br> R4</div>
                <div id="div44" className="pixel"> 44 <br></br> C4 <br></br> R4</div>
                <div id="div54" className="pixel"> 54 <br></br> C5 <br></br> R4</div>
                <div id="div64" className="pixel"> 64 <br></br> C6 <br></br> R4</div>
                <div id="div74" className="pixel"> 74 <br></br> C7 <br></br> R4</div>
                <div id="div84" className="pixel"> 84 <br></br> C8 <br></br> R4</div>
                <div id="div94" className="pixel"> 94 <br></br> C9 <br></br> R4</div>
                <div id="div104" className="pixel"> 104 <br></br> C10 <br></br> R4</div>
                <div id="div114" className="pixel"> 114 <br></br> C11 <br></br> R4</div>
                <div id="div124" className="pixel"> 124 <br></br> C12 <br></br> R4</div>
                <div id="div134" className="pixel"> 134 <br></br> C13 <br></br> R4</div>
                <div id="div144" className="pixel"> 144 <br></br> C14 <br></br> R4</div>
                <div id="div154" className="pixel"> 154 <br></br> C15 <br></br> R4</div>
                <div id="div164" className="pixel"> 164 <br></br> C16 <br></br> R4</div>
                <div id="div174" className="pixel"> 174 <br></br> C17 <br></br> R4</div>
                <div id="div184" className="pixel"> 184 <br></br> C18 <br></br> R4</div>
                <div id="div194" className="pixel"> 194 <br></br> C19 <br></br> R4</div>

                <div id="div5" className="pixel"> 05 <br></br> C0 <br></br> R5</div>
                <div id="div15" className="pixel"> 15 <br></br> C1 <br></br> R5</div>
                <div id="div25" className="pixel"> 25 <br></br> C2 <br></br> R5</div>
                <div id="div35" className="pixel"> 35 <br></br> C3 <br></br> R5</div>
                <div id="div45" className="pixel"> 45 <br></br> C4 <br></br> R5</div>
                <div id="div55" className="pixel"> 55 <br></br> C5 <br></br> R5</div>
                <div id="div65" className="pixel"> 65 <br></br> C6 <br></br> R5</div>
                <div id="div75" className="pixel"> 75 <br></br> C7 <br></br> R5</div>
                <div id="div85" className="pixel"> 85 <br></br> C8 <br></br> R5</div>
                <div id="div95" className="pixel"> 95 <br></br> C9 <br></br> R5</div>
                <div id="div105" className="pixel"> 105 <br></br> C10 <br></br> R5</div>
                <div id="div115" className="pixel"> 115 <br></br> C11 <br></br> R5</div>
                <div id="div125" className="pixel"> 125 <br></br> C12 <br></br> R5</div>
                <div id="div135" className="pixel"> 135 <br></br> C13 <br></br> R5</div>
                <div id="div145" className="pixel"> 145 <br></br> C14 <br></br> R5</div>
                <div id="div155" className="pixel"> 155 <br></br> C15 <br></br> R5</div>
                <div id="div165" className="pixel"> 165 <br></br> C16 <br></br> R5</div>
                <div id="div175" className="pixel"> 175 <br></br> C17 <br></br> R5</div>
                <div id="div185" className="pixel"> 185 <br></br> C18 <br></br> R5</div>
                <div id="div195" className="pixel"> 195 <br></br> C19 <br></br> R5</div>

                <div id="div6" className="pixel"> 06 <br></br> C0 <br></br> R6</div>
                <div id="div16" className="pixel"> 16 <br></br> C1 <br></br> R6</div>
                <div id="div26" className="pixel"> 26 <br></br> C2 <br></br> R6</div>
                <div id="div36" className="pixel"> 36 <br></br> C3 <br></br> R6</div>
                <div id="div46" className="pixel"> 46 <br></br> C4 <br></br> R6</div>
                <div id="div56" className="pixel"> 56 <br></br> C5 <br></br> R6</div>
                <div id="div66" className="pixel"> 66 <br></br> C6 <br></br> R6</div>
                <div id="div76" className="pixel"> 76 <br></br> C7 <br></br> R6</div>
                <div id="div86" className="pixel"> 86 <br></br> C8 <br></br> R6</div>
                <div id="div96" className="pixel"> 96 <br></br> C9 <br></br> R6</div>
                <div id="div106" className="pixel"> 106 <br></br> C10 <br></br> R6</div>
                <div id="div116" className="pixel"> 116 <br></br> C11 <br></br> R6</div>
                <div id="div126" className="pixel"> 126 <br></br> C12 <br></br> R6</div>
                <div id="div136" className="pixel"> 136 <br></br> C13 <br></br> R6</div>
                <div id="div146" className="pixel"> 146 <br></br> C14 <br></br> R6</div>
                <div id="div156" className="pixel"> 156 <br></br> C15 <br></br> R6</div>
                <div id="div166" className="pixel"> 166 <br></br> C16 <br></br> R6</div>
                <div id="div176" className="pixel"> 176 <br></br> C17 <br></br> R6</div>
                <div id="div186" className="pixel"> 186 <br></br> C18 <br></br> R6</div>
                <div id="div196" className="pixel"> 196 <br></br> C19 <br></br> R6</div>

                <div id="div7" className="pixel"> 07 <br></br> C0 <br></br> R7</div>
                <div id="div17" className="pixel"> 17 <br></br> C1 <br></br> R7</div>
                <div id="div27" className="pixel"> 27 <br></br> C2 <br></br> R7</div>
                <div id="div37" className="pixel"> 37 <br></br> C3 <br></br> R7</div>
                <div id="div47" className="pixel"> 47 <br></br> C4 <br></br> R7</div>
                <div id="div57" className="pixel"> 57 <br></br> C5 <br></br> R7</div>
                <div id="div67" className="pixel"> 67 <br></br> C6 <br></br> R7</div>
                <div id="div77" className="pixel"> 77 <br></br> C7 <br></br> R7</div>
                <div id="div87" className="pixel"> 87 <br></br> C8 <br></br> R7</div>
                <div id="div97" className="pixel"> 97 <br></br> C9 <br></br> R7</div>
                <div id="div107" className="pixel"> 107 <br></br> C10 <br></br> R7</div>
                <div id="div117" className="pixel"> 117 <br></br> C11 <br></br> R7</div>
                <div id="div127" className="pixel"> 127 <br></br> C12 <br></br> R7</div>
                <div id="div137" className="pixel"> 137 <br></br> C13 <br></br> R7</div>
                <div id="div147" className="pixel"> 147 <br></br> C14 <br></br> R7</div>
                <div id="div157" className="pixel"> 157 <br></br> C15 <br></br> R7</div>
                <div id="div167" className="pixel"> 167 <br></br> C16 <br></br> R7</div>
                <div id="div177" className="pixel"> 177 <br></br> C17 <br></br> R7</div>
                <div id="div187" className="pixel"> 187 <br></br> C18 <br></br> R7</div>
                <div id="div197" className="pixel"> 197 <br></br> C19 <br></br> R7</div>

                <div id="div8" className="pixel"> 08 <br></br> C0 <br></br> R8</div>
                <div id="div18" className="pixel"> 18 <br></br> C1 <br></br> R8</div>
                <div id="div28" className="pixel"> 28 <br></br> C2 <br></br> R8</div>
                <div id="div38" className="pixel"> 38 <br></br> C3 <br></br> R8</div>
                <div id="div48" className="pixel"> 48 <br></br> C4 <br></br> R8</div>
                <div id="div58" className="pixel"> 58 <br></br> C5 <br></br> R8</div>
                <div id="div68" className="pixel"> 68 <br></br> C6 <br></br> R8</div>
                <div id="div78" className="pixel"> 78 <br></br> C7 <br></br> R8</div>
                <div id="div88" className="pixel"> 88 <br></br> C8 <br></br> R8</div>
                <div id="div98" className="pixel"> 98 <br></br> C9 <br></br> R8</div>
                <div id="div108" className="pixel"> 108 <br></br> C10 <br></br> R8</div>
                <div id="div118" className="pixel"> 118 <br></br> C11 <br></br> R8</div>
                <div id="div128" className="pixel"> 128 <br></br> C12 <br></br> R8</div>
                <div id="div138" className="pixel"> 138 <br></br> C13 <br></br> R8</div>
                <div id="div148" className="pixel"> 148 <br></br> C14 <br></br> R8</div>
                <div id="div158" className="pixel"> 158 <br></br> C15 <br></br> R8</div>
                <div id="div168" className="pixel"> 168 <br></br> C16 <br></br> R8</div>
                <div id="div178" className="pixel"> 178 <br></br> C17 <br></br> R8</div>
                <div id="div188" className="pixel"> 188 <br></br> C18 <br></br> R8</div>
                <div id="div198" className="pixel"> 198 <br></br> C19 <br></br> R8</div>

                <div id="div9" className="pixel"> 09 <br></br> C0 <br></br> R9</div>
                <div id="div19" className="pixel"> 19 <br></br> C1 <br></br> R9</div>
                <div id="div29" className="pixel"> 29 <br></br> C2 <br></br> R9</div>
                <div id="div39" className="pixel"> 39 <br></br> C3 <br></br> R9</div>
                <div id="div49" className="pixel"> 49 <br></br> C4 <br></br> R9</div>
                <div id="div59" className="pixel"> 59 <br></br> C5 <br></br> R9</div>
                <div id="div69" className="pixel"> 69 <br></br> C6 <br></br> R9</div>
                <div id="div79" className="pixel"> 79 <br></br> C7 <br></br> R9</div>
                <div id="div89" className="pixel"> 89 <br></br> C8 <br></br> R9</div>
                <div id="div99" className="pixel"> 99 <br></br> C9 <br></br> R9</div>
                <div id="div109" className="pixel"> 109 <br></br> C10 <br></br> R9</div>
                <div id="div119" className="pixel"> 119 <br></br> C11 <br></br> R9</div>
                <div id="div129" className="pixel"> 129 <br></br> C12 <br></br> R9</div>
                <div id="div139" className="pixel"> 139 <br></br> C13 <br></br> R9</div>
                <div id="div149" className="pixel"> 149 <br></br> C14 <br></br> R9</div>
                <div id="div159" className="pixel"> 159 <br></br> C15 <br></br> R9</div>
                <div id="div169" className="pixel"> 169 <br></br> C16 <br></br> R9</div>
                <div id="div179" className="pixel"> 179 <br></br> C17 <br></br> R9</div>
                <div id="div189" className="pixel"> 189 <br></br> C18 <br></br> R9</div>
                <div id="div199" className="pixel"> 199 <br></br> C19 <br></br> R9</div>

            </div>
        </>
    )
}