import React from 'react'
import Rectangle from './rectangle'
import Circle from './circle'
import ImageObject from './image-object'

export default class SvgFrame extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            objects: JSON.parse(JSON.stringify(props.objects)), // DEEP CLONE ARRAY
            selection: {
                id: null
            },
            dragging: {
                offsetX: null,
                offsetY: null,
                id: null
            }
        }
    }

    generateObjects(){
        return this.state.objects.map((object, index) => {
            const draggable = object.draggable == false ? false : true;

            const props = {
                x: object.x,
                y: object.y,
                width: object.width,
                height: object.height,
                fill: object.fill,
                rotation: object.rotation ? object.rotation : 0
            }

            switch(object.type){
                case 'circle':
                    return <Circle {...props} key={ index } />
                case 'image':
                    props.src = object.src;
                    return <ImageObject {...props} key={ index }/>
                default:
                    return <Rectangle {...props} key={ index }/>
            }
        })
    }

    render(){
        const styles = {
            left: `${ this.props.left || 0 }%`,
            top: `${ this.props.top || 0 }%`,
            width: `${ this.props.width || 0 }%`,
            height: `${ this.props.height || 0 }%`,
            position: 'absolute'
        }

        const objects = this.generateObjects();

        return (
            <svg style={ styles } className="svg-frame">
                { objects }
            </svg>
        )
    }
}