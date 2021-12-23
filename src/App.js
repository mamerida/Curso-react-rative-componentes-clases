import { Component } from "react";

// en este caso creo una clase App que hago exnteder el componramiento de component 
class App extends Component{

    // para yo poder obtener el estado ( valor ) de mi  objeto debo colocar la prop state
    //esta condificona en su modificacion cuando se modifica render por esto la funcion setState. Que al colocar un nuevo valor con setState 
    //vuelve a correr render
    // render se actualiza cuando se ejecuta setState o el componente padre se renderiza 
    //state palabra reservada solo para estado
    state={
      valor:3
    }

    // el metodo mas importante es reder lo que va a mostrar el componente
    render(){
      console.log(this.state);
      return(
        <div>
          <p>Hola Mundo</p>
          <button className="{}" onClick={() =>this.setState({valor: 2})}>
            Enviar
          </button>
        </div>
      )
    }

}


export default App;
