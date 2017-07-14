import React from 'react'

const ImageObject = (props) => {
    const width = props.width;
    const height = props.height;
    const x = props.x - (width / 2);
    const y = props.y - (height / 2);
    const rotation = props.rotation ? (`${ props.rotation }, ${ props.x }, ${ props.y }`) : '0';

    return (
        <image xlinkHref={ props.src } x={ x + '%' } y={ y + '%' } width={ width + '%' } height={ height + '%' } transform={ `rotate(${ rotation })` } onMouseDown={ (event) => props.onMouseDown(event) } onMouseOver={ (event) => props.onMouseOver(event) } />
    )
}

export default ImageObject;