import React from 'react'

const Circle = (props) => {
    const width = props.width / 2;
    const height = props.height / 2;
    const x = props.x;
    const y = props.y;
    const rotation = props.rotation ? (`${ props.rotation }, ${ props.x }, ${ props.y }`) : '0';

    return (
        <ellipse cx={ x + '%' } cy={ y + '%' } rx={ width + '%' } ry={ height + '%' } fill={ props.fill } onMouseDown={ (event) => props.onMouseDown(event) } onMouseOver={ (event) => props.onMouseOver(event) } transform={ `rotate(${ rotation })`}/>
    )
}

export default Circle;