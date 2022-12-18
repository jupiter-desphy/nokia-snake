import React from 'react'
import LiteSlide from './LiteSlide'

export default function Instructions() {
    return (
        <>
            <LiteSlide optionName='Instructions' isHeading={true} />
            <br></br>
            <LiteSlide optionName='Use arrow keys on your' />
            <LiteSlide optionName='keyboard or numbers' />
            <LiteSlide optionName='2,4,6 and 8 on a phone' />
            <LiteSlide optionName='to direct the snake to' />
            <LiteSlide optionName='food. Make sure it does' />
            <LiteSlide optionName='not eat itself!' />
        </>
    )
}
