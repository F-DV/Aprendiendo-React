import React,{Fragment, useState} from 'react';

const  Formulario = () => {

    const [datos,setDatos] = useState({                  //Dato tipo objeto
        nombre: '',
        apellido: ''
    })

    const handleInputChange = (event) => {
        console.log(event.target.value)                     //Imprime mi evento onChange
        setDatos({
            ...datos,
            [event.target.name] : event.target.value         //Relaciona el campo que escribimos con el estado del hooks
        })
    }  
    
    const enviarDatos =(event) =>{
        event.preventDefault();                               // const para los eventos de enviar el formulario, recibimos un evento submit
        console.log(datos.nombre + ' ' + datos.apellido)      //Imprimimos los datos en consola cuando se presiona el boton
    }

    return ( 
        <Fragment>
            <h1>Formulario</h1>
            
            <form className="row" onSubmit={enviarDatos} >   
                <div className='col-md-3'>                  
                    <input placeholder="Ingrese Nombre"     //ingresamso todo lo de la etiqueta input, dentro de la etiqueta de abre
                    className="form-control"                //Utilizamos una clase de Bootstrap
                    type={'text'}
                    name="nombre"                           //Relacionamos el dato declarado arriba con su respectivo input
                    onChange={handleInputChange}            //esta al pendiente de este input, reacciona a travez de un evento
                ></input>
                </div>

                <div className='col-md-3'>
                    <input placeholder="Ingrese Apellido"
                    className="form-control" 
                    type={'text'}
                    name="apellido"                         //Relacionamos el dato declarado arriba con su respectivo input
                    onChange={handleInputChange}            //esta al pendiente de este input

                ></input> 
                </div>

                <div className='col-md-3'>
                    <button className='btn btn-primary' type='submint'>Enviar</button>
                </div>        
            </form>
            <h3>{datos.nombre} - {datos.apellido}</h3>

        </Fragment>
        
     );
}
 
export default Formulario;