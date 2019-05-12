import React from 'react';
import './App.css';

function App(props) {
  
  const { ships } = props; 

  return (
    <div className="App">
    <ul>
     {ships.map(function(ships){
       return <li>{ships.name}</li>
     })}
     </ul>
    </div>
  );
}

export default App;
