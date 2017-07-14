import React from 'react'

const Rectangle = (props) => {
    const width = props.width;
    const height = props.height;
    const x = props.x - (width / 2);
    const y = props.y - (height / 2);
    const rotation = props.rotation ? (`${ props.rotation }, ${ props.x }, ${ props.y }`) : '0';

    return (
        <rect x={ x + '%' } y={ y + '%' } width={ width + '%' } height={ height + '%' } fill={ props.fill } onMouseDown={ (event) => props.onMouseDown(event) } onMouseOver={ (event) => props.onMouseOver(event) } transform={ `rotate(${ rotation })`}/>
    )
}

export default Rectangle;