import React from 'react';
import PropTypes from 'prop-types';
import Palette from './Palette';

function Ship(props) {
  const { data } = props;
  return (
    <li className="Ship">
      <h2 className="Ship__name">{data.name}</h2>
      <Palette colors={data.colors} />
    </li>
  );
}

Ship.propTypes = {
  data: PropTypes.object.isRequired
};

export default Ship;



//creo un componennte ship. ship tiene que retornar el li. ¿Para poder retornar el li que le tiene que llegar por props? el dato ship. 
//Si yo simplemente lo copio y lo pego en el componente no vale, se lo tengo que pegar por props. 

//Le pongo const {ship} = props;

//como esto empieza a ser un componente complejo creo sus instrucciones con el propTypes

//ahora vamos a hacer otro componente Palette
//en ship quiero ahora pintar el componente Palette, a la cual le llega un array de colors, entonces le digo constante colors = {data.colors} -->  <Palette colors = {data.colors}/>