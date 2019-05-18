import React, { Component } from "react";
import Palette from './Palette'
import "./Ship.scss";

class Ship extends Component {

  render() {
    const data = this.props.data;

    return (
        <li className="Ship">
          <h2 className="Ship__name">{data.name}</h2>
          <Palette colors={data.colors}/>
        </li>
    );
  }
}



export default Ship;
