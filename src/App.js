import { Component } from "react";


class Button extends Component{
  state={}
  //funcion que siempre se va a ejecutar en el momento de crear el componente
  constructor(props){
    super(props) // refierendo al componente padre Component se le pasan las propiedades al constructor 
    console.log("constructor",props)
    
  }

  //se llama al querer actualiar el estado del componente
  //se suele utilizar para renderizacion condicional en el front con valores del DOM
  //llamados de datos a una api antes de usar el component
  //se ejecuta despues del constructor y del render por ende existe en el DOM y se pueden manipular sus variables
  componentDidMount(){
    console.log("componentDidMount")
  }


  render(){
    // al estar button dentro de app al executar render de app se ejecuta tambien el render de button por que el componente hijo 
    // se actualiza con el padre
    console.log("se renderizo boton")
    return(
      <button>
        Enviar
      </button>
    )
  }
}

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
          <Button chanchito ="Feliz"/>
          <button className={`${this.state.valor}`} onClick={() =>this.setState({valor: 2})}>
            Enviar en app
          </button>
        </div>
      )
    }

}


export default App;


// Estado de vida de los componentes 
// componentDidMount accione que se realizan cuando se crea el componente
// componentDidUpdate acciones que se realizan cuando se re-renderiza el componente
// componentWillUnmpunt acciones a realizar cuando el componente se va a eliminar 


// class Button extends Component{
  
//   render(){
//     // al estar button dentro de app al executar render de app se ejecuta tambien el render de button por que el componente hijo 
//     // se actualiza con el padre
//     console.log("se renderizo boton")
//     return(
//       <button>
//         Enviar
//       </button>
//     )
//   }
// }