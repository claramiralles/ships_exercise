
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ColorSquare from './ColorSquare';
import './Palette.scss';

class Palette extends Component {
  render() {
    const { colors } = this.props;
    return (
      <ol className="Palette">
        {colors.map(color => (
          <ColorSquare key={color} color={color} />
        ))}
      </ol>
    );
  }
}

Palette.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

export default Palette;


//function Palette ({props}){
    // const { colors } = props;
    // esto son las props y de las props saco la constante colors y la guardao en una consttante llamada colors