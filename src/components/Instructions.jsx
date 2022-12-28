import React from 'react'
import LiteSlide from './LiteSlide'

export default function Instructions(props) {
    let line1 = 'Use arrow keys on your';
    let line2 = 'keyboard or numbers';
    let line3 = '2,4,6 and 8 on a phone';
    let line4 = 'to direct the snake to'
    let line5 = 'food. Make sure it does'
    let line6 = 'not eat itself nor walls!'

    if (props.version === 'Snake II') {
        line6 = 'not eat itself!'

    }
    return (
        <>
            <LiteSlide optionName='Instructions' isHeading={true} />
            <br></br>
            <LiteSlide optionName={line1} />
            <LiteSlide optionName={line2} />
            <LiteSlide optionName={line3} />
            <LiteSlide optionName={line4} />
            <LiteSlide optionName={line5} />
            <LiteSlide optionName={line6} />
        </>
    )
}
