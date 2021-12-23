import { Component } from "react";


class Input extends Component{
  //como el valor lo manejo desde el padre no necesito el estado
  // state={valor:" "}
  // handleChange = (value) =>{
  //   this.setState({valor:value})

  // }
  render(){
    return(
      <input
        //LO QUE HAGO EN ESTA LINEA ES ASIGNARLE LOS VALORES DE LLAMADA EN EL COMPONENTE PADRE. POR ESO EL PROPS.VALUE
        value={this.props.value} //this.props.value}
        onChange={this.props.onChange} //this.props.onChange
      />
    )
  }


}
// para poder manejar de mojor manera el estado vamos a pasar los state de los componentes hijos al padre para asi poder
// tener mas control al momento de manejar la data de los componentes 
//osea levantar / subir el estado de un componente

class App extends Component{

  state={
    nombre:" ",
    apellido:" ",
  }
  //funcion creada para poder recibir los valores de los hijos
  updateValues = (props,values) =>{
    //en este caso le paso un array al tratarse de varios valores en un mismo estado
    this.setState({[props]:values}) 
  }

  render(){
    return(
      <p>
        Nombre Completo:{`${this.state.nombre}  ${this.state.apellido}`}
        <Input 
        value={this.state.nombre} //toma el valor del nombre 
        onChange ={e => this.updateValues('nombre',e.target.value)} //llamo a la funcion creada mas arriba con el nombre de la propiedad y el valor a asignar
        />
       
        <Input 
        value={this.state.apellido} //toma el valor del nombre 
        onChange ={e => this.updateValues('apellido',e.target.value)} //llamo a la funcion creada mas arriba con el nombre de la propiedad y el valor a asignar
        />
       
      </p>
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





// import { Component } from "react";


// class Button extends Component{
//   state={}
//   //funcion que siempre se va a ejecutar en el momento de crear el componente
//   constructor(props){
//     super(props) // refierendo al componente padre Component se le pasan las propiedades al constructor 
//     console.log("constructor",props)
    
//   }

//   //se llama al querer actualiar el estado del componente
//   //se suele utilizar para renderizacion condicional en el front con valores del DOM
//   //llamados de datos a una api antes de usar el component
//   //se ejecuta despues del constructor y del render por ende existe en el DOM y se pueden manipular sus variables
//   componentDidMount(){
//     console.log("componentDidMount")
//   }

//   //prevProps contiene las propiedades anteriores a la actualizacion de componente
//   //prevState contiene el estado anterior osea lo guardado en la variable state
//   componentDidUpdate(prevProps,prevState){
//     console.log("componentDidUpdate",prevProps,prevState)
//   }

// //ESTE METODO SE EJECUTA AL DESMONTAR EL COMPONENTE OSEA CUANDO SE DESTRUYE DESDE EL FRONT 
//   componentWillUnmount(){
//     console.log("desmontando componente",this.props,this.state)
//   }


//   render(){
//     // al estar button dentro de app al executar render de app se ejecuta tambien el render de button por que el componente hijo 
//     // se actualiza con el padre
//     console.log("se renderizo boton")
//     return(
//       <button onClick={()=> this.setState({prop:1})}>
//         Enviar
//       </button>
//     )
//   }
// }

// // en este caso creo una clase App que hago exnteder el componramiento de component 
// class App extends Component{

//     // para yo poder obtener el estado ( valor ) de mi  objeto debo colocar la prop state
//     //esta condificona en su modificacion cuando se modifica render por esto la funcion setState. Que al colocar un nuevo valor con setState 
//     //vuelve a correr render
//     // render se actualiza cuando se ejecuta setState o el componente padre se renderiza 
//     //state palabra reservada solo para estado 
//     state={
//       valor:3
//     }

//     // el metodo mas importante es reder lo que va a mostrar el componente
//     render(){
//       console.log(this.state);
//       return(
//         <div>
//           <p>Hola Mundo</p>
//           {/* GENERO ESTE IF PARA PODER VER EN CASO DE QUE EL ESTADO SEA DISTINTO DE 3 DESMONTAR EL COMPONENTE */}
//           {this.state.valor ===3 ? <Button chanchito ="Feliz"/> : ""}
//           <button className={`${this.state.valor}`} onClick={() =>this.setState({valor: 2})}>
//             Enviar en app
//           </button>
//         </div>
//       )
//     }

// }


// export default App;