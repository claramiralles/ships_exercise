import React, {Component} from 'react';
import './ColorSquare.scss';

class ColorSquare extends Component {
    render () {
        const {color} = this.props;
        console.log(color)
        return ( 
            <li className="ColorSquare"
                style= {{backgroundColor:`#${color}`}}
            />
        );
    }
}

export default ColorSquare;

