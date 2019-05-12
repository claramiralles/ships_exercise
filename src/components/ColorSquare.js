import React from 'react';
import PropTypes from 'prop-types';
import './ColorSquare.scss';

function ColorSquare(props) {
  const { color } = props;
  return (
    <li
      className="ColorSquare"
      style={{
        backgroundColor: `#${color}`
      }}
    />
  );
}

ColorSquare.propTypes = {
  color: PropTypes.string.isRequired
};

export default ColorSquare;
//ColorSquare es el li. ¿Que no tiene disponible y necesita? colors: pues de las props vamos a decirle que en las props hay una clave colors que yo voy a guardar en una constante colors

//¿en color square porque hace falta sacar coor si ya lo tienes sacado? Hace falta volver a sacar color porque props es un objeto, con tantos atributos como yo le saque a colors square. Por ejemplo si yo le doy size:l porque quiero pintar ccuadros grande sy pequeños, en props vendran dos claves, size y colors. props es un objeto, siempre siempre. Si le quito el size sigue siendo un objeto con una sola clave, color. A Nasi no le encanta loguear porque cuando e sun componente que se renderiza muchas veces al consola se queda muy sucia, le gusta mas decir, palette, a este color square que le llega.

//Podriamos poner los estilos de cada componente, vamos a hacer al menos el de el cuadrado.

