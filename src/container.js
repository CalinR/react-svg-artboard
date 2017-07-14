import React from 'react'

const SvgContainer = (props) => {
    const styles = {
        position: 'relative',
        width: `${ props.width }px`,
        height: `${ props.height }px`
    }

    return (
        <div style={ styles } className="svg-container">
            { props.children }
        </div>
    )
}

export default SvgContainer