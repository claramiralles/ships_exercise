import React, { Component } from 'react';
import './Ship.scss';
import ColorSquare from './ColorSquare'


class Palette extends Component {

    render (){
        const colors= this.props.colors

        return (
            <ol className= "Palette">
            {colors.map((color) => (<ColorSquare key={color} color={color}/>
            ))} 
            </ol>
        );
    }
}

export default Palette;