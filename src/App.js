import React from 'react';
import Ship from "./components/Ship";
import './App.scss';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      ships: []
    };
    this.getData();
  }

  getData() {
    fetch('https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palettes.json')
    .then(response => response.json())
    .then(data => {
      this.setState({ships: data.palettes});
    })
  }
  

  render() {
    const { ships } = this.state;

    return (
      <div className="App">
      <ul className="Ships">
          {ships.map((item, ind) => (
          <Ship key={ind} data={item} />
          )
          )}
      </ul>
      </div>
    );
  }
}

export default App

//¿Qué he hecho hasta ahora? 

//Ships es un objeto y lo saco de las props. Es un objeto, un array. Cojo mi array, del objeto props. En mi componente App hay un objeto props, este objeto props tiene una clave ships que dentro tiene un array y esto es lo que estoy cogiendo.

//El map es como una for. El map a cada objeto le creo una funcion y crea un arary en vez de objetos, me crea un array de lis.

//Seguimos. En ships.map tenia objetos, con un name que ya lo he pintado y a su vez una clave colors que contiene un array de colores. 
//Es exactmente lo mismo otra vez.

//Vamos a meter el nombre en un h2 y voy a meter los colores en un ol, porque la paleta esta ordenada. 

//Quiero tantos li como colores haya, pero tengo que volver a hacer un map -> ship.colors.map. ¿Porque tengo que volver a hacer otro map? Porque estoy dentro de cada item, y aqui tengo una clave colors que tiene de nuevo un array, es como un for dentro de un for.

//Me llega una clave colors y quiero pintar un li con un style. style en react acepta un objeto, por tanto, quiero ponerle en la clave background color el valor que me llega en color y le ponga la almohadilla porque es un hexadecimal. ademas le damos una clase que le de la altura y la anchura, pero dfe momento se la damos en el objeto del style y luego la llevamos a la clase: height: 30px, width: 30px; 

//Ya esta, tengo un li en cuyo atributo de react

//cuando las clases en css tiene unn guion, reatc nos dice, como es un objeto las palabras compuestas pasalas a camelCase.

//ya tenemos el componente Ship, Palette y ahora vamos a por ColorSquare, para ver como partir y partir elementos.

//que es this? si yo tengo aqui un atributo. Render es un metodo de un objeto, en este caso de la calse App. la clase App es un constructor de objetos como este. si yo quiero aceder a un atributo que haya llamado en la clase lo llamo con this (this.name, por ejemplo)


// Nosotros esttamos extendiendo de component. En el component reactc ha creado props vacios y state vacio


// Al extender la clase de React.Component la magia es que mi clase ahora es como component, osea:


// class App extend React.Componente {

//   props = {

//   }

//   state = {

//   }
//   render () {

//     return (

//     )
//   }
// }

//la magia de react es que en tre el punto en que yo pinto el componente, el por debajo coge y props y state lo enchufa.

// class App extends React.Component {
// props = {
//   ships: []
// }
//props es un atributo y tiene dentro la clave ships que es un array --> esto es lo que hace react por nosotras. Si tu aqui en el index.js cuando llamas a App en reactDOM.render cuando instancias le pones un atributo llamado ships, va a hacer esto. No lo vemos, pero hace esto.


//QUEREMOS QUE SE HAGA EL FETCH UNA VEZ Y AL PRINCIPIO. ¿que metodo de la clase se ejecuta solo una vez y al principio? el constructor. por tanto el cosntrutor me encaja genial para esto. de mommento si, ya veremos mas adelante donde.

//Vamos a hacermos otro metodo getdata que haga el fetch y lo vamos a llamar en el constructor al metodo. Get data hace un ftech de la url, cuando llegan los datos los parsea a json y en el siguiente then, le llega data y tenemos dos claves: version y paletes. 

//¿Que vamos a hacer? lo sacabamos de props. pero ahora no va a venir desde la madre, ella misma, la madre lo va a pedir por un fetch y lo va a guardar en su estado. 

//ships inicialmente es un array vacio y cuando data conteste: ships.sestate y que la clave ships tenga data.palettes

//en render aqui vamos a deir, en lugar de ships de las props, ships del estado

//ahora hemos reado una funcion que hace un fetch y el resultado lo guarda en ele stado. donde hemos llamado a este metodo? en ningun sitio aun --> hemos dicho que lo queriamos llammar una vez y al inicio


//¿No hay que hacer bind? Vale, ¿quien ejeuta this.state? GetData. Y esta funcion es ejecutada por nosotros? No, es ejecutada por el then, por tanto ->
//SI HAY QUE BINDEAR, pero como yo me he marcado un arrwo funtion no hay que bindear, porque el arrow tiene this lexico y no hay que bindear. Pero si hago funtion sin arrows si tengo que poner el bind


//Si tienes varios metodos que necesitan varios bindeados, haras tantos como necesites. aqui solo hay getdata, pero si hubiese mas y tienes que bindearlos, pones tantos bind.this como necesites

// return (
//   <div className="App">
//   <ul className="Ships">
//       {ships.map((item, ind) => (
//       <Ship key={ind} data={item} />
//           //al componenete ship le va a llegar data que es un objeto y en data vamos a enchufar el item de esta vuelta de lis
//         )
//       })}
//   </ul>
//   </div>